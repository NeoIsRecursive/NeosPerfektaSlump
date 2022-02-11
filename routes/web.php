<?php

use App\Http\Controllers\AppController;
use App\Http\Controllers\CreateGroupController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\GetGroupController;
use App\Http\Controllers\GetGroupJsonController;
use App\Http\Controllers\LogInController;
use App\Http\Controllers\LogoutController;
use App\Http\Controllers\Member\AddMemberController;
use App\Http\Controllers\Member\RemoveMemberController;
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

Route::view('/', 'index')->middleware('guest');
Route::view('login', 'login')->name('login');
Route::post('login', LogInController::class);
Route::get('app', AppController::class)->name('app');

Route::middleware(['auth'])->group(function () {
    Route::get('groups', DashboardController::class);
    Route::get('logout', LogoutController::class)->name('logout');
    Route::post('addGroup', CreateGroupController::class);
    Route::get('getGroupApi', GetGroupJsonController::class);
    Route::get('groups/{group}/manage', GetGroupController::class);
    Route::patch('groups/{group}/manage/add-member', AddMemberController::class);
    Route::delete('groups/{group}/manage/remove-member/{member:id}', RemoveMemberController::class);
});
