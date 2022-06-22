<?php

use App\Http\Controllers\AppController;
use App\Http\Controllers\CreateGroupController;
use App\Http\Controllers\DeleteGroupController;
use App\Http\Controllers\ManagerController;
use App\Http\Controllers\GetGroupController;
use App\Http\Controllers\GetGroupJsonController;
use App\Http\Controllers\LogInController;
use App\Http\Controllers\LogoutController;
use App\Http\Controllers\Member\AddMemberController;
use App\Http\Controllers\Member\RemoveMemberController;
use App\Http\Controllers\RegisterController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

//random
Route::get('slump', AppController::class);

Route::middleware(['guest'])->group(function () {
    Route::view('/', 'index');
    Route::view('login', 'login')->name('login');
    Route::post('login', LogInController::class);
    Route::view('register', 'register');
    Route::post('register', RegisterController::class);
});

Route::middleware(['auth'])->group(function () {
    Route::get('manager', ManagerController::class);
    Route::get('logout', LogoutController::class)->name('logout');

    Route::get('getGroupApi', GetGroupJsonController::class);

    Route::post('manager/add-group', CreateGroupController::class);
    Route::get('manager/groups/{group}/manage', GetGroupController::class);
    Route::patch('manager/groups/{group}/manage/add-member', AddMemberController::class);
    Route::delete(
        'manager/groups/{group}/manage/remove-member/{member}',
        RemoveMemberController::class
    )->scopeBindings();
    Route::delete('manager/groups/{group}', DeleteGroupController::class);
});
