<?php

/*
|--------------------------------------------------------------------------
| Broadcast Channels
|--------------------------------------------------------------------------
|
| Here you may register all of the event broadcasting channels that your
| application supports. The given channel authorization callbacks are
| used to check if an authenticated user can listen to the channel.
|
*/

use App\User;

Broadcast::channel('App.User.{id}', function ($user, $id) {
    return (int) $user->id === (int) $id;
});
Broadcast::channel('article.user.{id}', function ($user, $id) {
    return (int) $user->id === (int) $id;
});
Broadcast::channel('comment.articleOwner.{id}', function ($user, $id) {
    return (int) $user->id === (int) $id;
});
Broadcast::channel('comment.commentOwner.{id}', function ($user, $id) {
    return (int) $user->id === (int) $id;
});
Broadcast::channel('user.online.{id}', function (User $user, $id) {
    //if((int) $user->id === (int) $id){
        return User::withCount('followers','following')
            ->find($user->id);
    //}
});
