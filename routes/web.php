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
	    Route::resource('subscription', 'SubscriptionController');
        Route::prefix('profile/{profile}')->group(function () {
            Route::resource('follower', 'FollowerController', ["only" => ["index", "show"]]);
            Route::resource('following', 'FollowingController', ["only" => ["index", "show"]]);
        });
        Route::prefix('article/{article}')->group(function () {
            Route::resource('comment', 'CommentController');
            Route::get('comment/{comment}/like/{type}', 'CommentController@like');
            Route::delete('comment/{comment}/like', 'CommentController@deleteLike');
        });
        Route::post('cover','UserController@cover');
        Route::post('avatar','UserController@avatar');
        // doit toujour etre la derniere route
        Route::get('/{user}','UserController@show');
        Route::delete('/{user}','UserController@destroy');
    });
});
Route::view('{url1?}/{url2?}', 'welcome');