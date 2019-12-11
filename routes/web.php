<?php

Route::get('/')->name('dashboard')->uses('DashboardController');

Route::get('users')->name('users')->uses('UsersController@index');
Route::get('users/{user}/edit')->name('users.edit')->uses('UsersController@edit');
Route::put('users/{user}')->name('users.update')->uses('UsersController@update');