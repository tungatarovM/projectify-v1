<?php

use App\Entities\User;
use Illuminate\Http\Request;

Auth::routes(['verify' => true]);

Route::get('/', 'HomeController@index')->name('home');

Route::group(
    [
        'prefix' => 'manager',
        'as' => 'manager',
        'middleware' => ['auth', 'verified', 'role.manager'],
    ],
    function () {
        Route::get('/', 'ManagerController@index')->name('home');
        Route::post('/', 'ManagerController@store');
        Route::post('/change', 'ManagerController@change');
        Route::delete('/delete/{user}', 'ManagerController@destroy');
});

Route::middleware(['auth', 'verified'])->group(function () {
   Route::get('/users/current', function (Request $request) { return $request->user()   ; });
   Route::get('/users', 'UserController@index');
});

Route::middleware(['auth', 'verified'])->group(function () {
   Route::get('/projects', 'ProjectController@index');
});
