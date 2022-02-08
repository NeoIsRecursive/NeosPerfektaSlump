<?php

use App\Http\Controllers\AddListController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\GetListJsonController;
use App\Http\Controllers\LogInController;
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

Route::view('/', 'index')->middleware('guest')->name('login');
Route::post('login', LogInController::class);

Route::middleware(['auth'])->group(function () {
    Route::get('dashboard', DashboardController::class);
    Route::view('uploadFile', 'uploadFile')->name('uploadFile');
    Route::post('addList', AddListController::class);
    Route::get('getGroupApi', GetListJsonController::class);
});
