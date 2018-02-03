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
        Route::prefix('actuality/{actuality}')->group(function () {
            Route::get('like/{type}', 'ActualityController@like');
            Route::delete('like', 'ActualityController@deleteLike');
            Route::resource('comment', 'CommentActualityController');
            Route::get('comment/{comment}/like/{type}', 'CommentActualityController@like');
            Route::delete('comment/{comment}/like', 'CommentActualityController@deleteLike');
            Route::get('likers/{type}', 'ActualityController@likers');
            Route::get('likes/count', 'ActualityController@likes');
        });
	    Route::resource('article', 'ArticleController',['except'=>'update']);
	    Route::post('article/{article}', 'ArticleController@update');
	    Route::resource('profile', 'ProfileController');
	    Route::get('profile/{profile}/article/{article}', 'ProfileController@article');
	    Route::resource('subscription', 'SubscriptionController',['except'=>'destroy']);
	    Route::get('unfollow/{id}', 'SubscriptionController@unfollow');
	    Route::get('deletefollower/{id}', 'SubscriptionController@deletefollower');
        Route::prefix('profile/{profile}')->group(function () {
            Route::resource('follower', 'FollowerController', ["only" => ["index", "show"]]);
            Route::resource('following', 'FollowingController', ["only" => ["index", "show"]]);
            Route::get('album', 'ProfileController@album');
        });
        Route::prefix('article/{article}')->group(function () {
            Route::get('like/{type}', 'ArticleController@like');
            Route::delete('like', 'ArticleController@deleteLike');
            Route::resource('comment', 'CommentArticleController');
            Route::get('comment/{comment}/like/{type}', 'CommentArticleController@like');
            Route::delete('comment/{comment}/like', 'CommentArticleController@deleteLike');
            Route::get('likers/{type}', 'ArticleController@likers');
            Route::get('likes/count', 'ArticleController@likes');
        });
        Route::prefix('book')->group(function () {
            Route::get('{type}/{level}', 'BookController@index');
            Route::get('{type}/{level}/{id}', 'BookController@index');
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
        Route::resource('book', 'BookController');
        Route::resource('user', 'UserController');
        Route::resource('article', 'ArticleController');
    });
});
Route::get('/',function(){
    if(\Illuminate\Support\Facades\Auth::check()){
        return view('app');
    }else{
        return view('welcome');
    }
});

