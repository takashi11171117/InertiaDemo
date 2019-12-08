<?php

Route::get('/')->name('dashboard')->uses('DashboardController');

Route::get('users')->name('users')->uses('UsersController@index');