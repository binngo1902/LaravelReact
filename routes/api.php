<?php

use App\Http\Controllers\Api\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::post('/login',[UserController::class,'postLogin']);

Route::middleware('auth:sanctum')->group(function() {
    Route::get('checkToken',function(){
        return response()->json('Your logged in',200);
    });

    Route::get('listUsers',[UserController::class,'listUsers']);

    Route::post('logout', [UserController::class, 'logout']);
});
