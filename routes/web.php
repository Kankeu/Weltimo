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
	Route::get('offer', 'OfferController@index');
	Route::post('avatar','InscriptionController@upload');
	Route::post('log_in','LoginController@login');
	Route::get('log_in','LoginController@loginWithToken');
	Route::get('log_out','LogoutController@logout');
	Route::middleware('auth')->prefix('user')->group(function (){
	    Route::get('/search/{keyword}', 'SearchController@index');
        Route::resource('actuality', 'ActualityController');
	    Route::resource('article', 'ArticleController',['except'=>'update']);
	    Route::post('article/{article}', 'ArticleController@update');
	    Route::get('article/{article}/like', 'ArticleController@deleteLike');
	    Route::resource('profile', 'ProfileController');
	    Route::get('profile/{profile}/article/{article}', 'ProfileController@article');
	    Route::resource('subscription', 'SubscriptionController');
        Route::prefix('profile/{profile}')->group(function () {
            Route::resource('follower', 'FollowerController', ["only" => ["index", "show"]]);
            Route::resource('following', 'FollowingController', ["only" => ["index", "show"]]);
            Route::get('album', 'ProfileController@album');
        });
        Route::prefix('article/{article}')->group(function () {
            Route::get('like/{type}', 'ArticleController@like');
            Route::resource('comment', 'CommentController');
            Route::get('comment/{comment}/like/{type}', 'CommentController@like');
            Route::delete('comment/{comment}/like', 'CommentController@deleteLike');
            Route::get('likers/{type}', 'ArticleController@likers');
        });
        Route::post('cover','UserController@cover');
        Route::post('avatar','UserController@avatar');
        // doit toujour etre les dernieres routes
        Route::get('/{user}','UserController@show');
        Route::put('/{user}','UserController@update');
        Route::delete('/{user}','UserController@destroy');
    });
    Route::namespace('Admin')->prefix('admin')->group(function (){
        Route::prefix('queue')->group(function (){
            Route::get('run', function () {
                 Artisan::call("queue:work",[
                    '--queue' => 'default',
                    '--tries' => 3,
                ]);
            });
            Route::get('restart', function () {
                 Artisan::call("queue:restart");
            });
            Route::get('retry', function () {
                Artisan::call("queue:retry",["id"=>"all"]);
            });
            Route::get('retry/{id}', function (int $id) {
                Artisan::call("queue:retry",["id"=>$id]);
            });
            Route::resource('failedJob', 'FailedJobController');
            Route::resource('job', 'JobController');
        });
        Route::resource('actuality', 'ActualityController');
        Route::resource('user', 'UserController');
        Route::resource('article', 'ArticleController');
    });
});
Route::view('{url1?}/{url2?}', 'welcome');