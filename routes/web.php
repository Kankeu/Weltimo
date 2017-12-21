<?php

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

Route::middleware('AjaxDetecte')->group(function () {
	Route::resource('sign_in', "InscriptionController",["only"=>["store","update"]]);
	Route::post('avatar','InscriptionController@upload');
	Route::post('log_in','LoginController@login');
	Route::get('log_in','LoginController@loginWithToken');
	Route::get('log_out','LogoutController@logout');
	Route::middleware('auth')->prefix('user')->group(function (){
	    Route::resource('article', 'ArticleController');
	    Route::get('article/{article}/like/{type}', 'ArticleController@like');
	    Route::delete('article/{article}/like', 'ArticleController@deleteLike');
	    Route::resource('profile', 'ProfileController');
    });
});
Route::view('{url1?}/{url2?}', 'welcome');