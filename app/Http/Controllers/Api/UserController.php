<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use App\Repositories\User\UserRepositoryInterface;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cookie;

class UserController extends Controller
{
    //
    protected $accountRepo;
    public function __construct(UserRepositoryInterface $account)
    {
        $this->accountRepo = $account;
    }


    public function postLogin(LoginRequest $request)
    {
        try {
            $requestArray = $request->all();
            $user = $this->accountRepo->getUser($requestArray['account']);
            if (!$user) {
                return response()->json([
                    'status_code' => 500,
                    'message' => 'Unauthorized'
                ], 400);
            }

            Auth::login($user);
            $tokenResult = $user->createToken('API Token')->plainTextToken;
            $info = [
                'account' => $user->account,
                'email' => $user->email,
            ];
            $time = 2;

            if ($request->remember) {
                $tokenResult = $user->createToken('API Token', ['remember'])->plainTextToken;
                $time = 0;
            }
            $token = cookie('jwt', $tokenResult, $time);
            return response()->json([
                'logged_in' => 1,
                'info' => $info,
            ])->withCookie($token);
        } catch (\Exception $error) {
            return response()->json([
                'status_code' => 500,
                'message' => 'Error in Login',
                'error' => $error,
            ], 500);
        }
    }
    public function logout()
    {
        try {
            $cookie = \Cookie::forget('jwt');
            auth()->user()->tokens()->delete();
            return response()->json('User logged out successfully')->withCookie($cookie);
        } catch (\Exception $exception) {
            return response()->json('Sorry, the user cannot be logged out', 500);
        }
    }

    public function listUsers(Request $request)
    {
        $a = User::where('id', '!=', 0)
        ->orderBy($request->column_sort ?? 'id',$request->type_sort ?? 'asc')
        ->paginate( $request->per_page ?? 10);
        return UserResource::collection($a);
    }
}
