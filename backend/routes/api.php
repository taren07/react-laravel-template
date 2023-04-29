<?php

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

// Route::get('/', function () {
//     return view('app');
// });

//ログイン
Route::post('/user/login', [App\Http\Controllers\User\UserAuthController::class, 'login']);

Route::prefix("user")->namespace("user")->middleware('auth:sanctum')->group(function () {
});
