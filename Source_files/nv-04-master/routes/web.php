<?php

use App\Http\Controllers\APIController;
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
Route::post('/api/process', [APIController::class, 'processor'])->name('api.processor');
Route::post('/api/upload', [APIController::class, 'upload'])->name('api.upload');
Route::view('/{path?}', 'index');
Route::get("{any}", function () {
    return view('index'); // or wherever your React app is bootstrapped.
})->where('any', '.*');
