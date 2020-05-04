<?php
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
   Route::get('/users', 'UserController@index');
   Route::get('/users/current', 'UserController@current');
});

Route::middleware(['auth', 'verified'])->group(function () {
   Route::get('/projects', 'ProjectController@index');
   Route::post('/projects', 'ProjectController@store')->middleware(['role.manager']);
   Route::delete('/projects/{project}', 'ProjectController@destroy')->middleware(['role.manager']);
});
