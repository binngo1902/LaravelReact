<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
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
                ],400);
            }

            Auth::login($user);
            $tokenResult = $user->createToken('API Token')->plainTextToken;
            $info = [
                'account' => $user->account,
                'email' => $user->email,
            ];
            $time = 120;
            if ($request->remember) {
                $time = 0;
            }

            $token = cookie('jwt',$tokenResult,$time);
            return response()->json([
                'logged_in' => 1,
                'info' => $info,
            ])->withCookie($token);
        } catch (\Exception $error) {
            return response()->json([
                'status_code' => 500,
                'message' => 'Error in Login',
                'error' => $error,
            ],500);
        }
    }
}
