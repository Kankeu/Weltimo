<?php

namespace App;

use Illuminate\Auth\Notifications\ResetPassword;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Support\Facades\Auth;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'forename', 'email', 'password', 'level', 'avatar'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    public function articles()
    {
        return $this->hasMany("App\Article");
    }

    public function likes()
    {
        return $this->hasMany("App\Like");
    }

    public function comments()
    {
        return $this->hasMany("App\Comment");
    }

    public function followers()
    {
        return $this->hasMany("App\Subscription", "receiver_id");
    }

    public function followed()
    {
        return $this->hasOne("App\Subscription", "receiver_id")->where("sender_id",Auth::id());
    }

    public function following()
    {
        return $this->hasMany("App\Subscription", "sender_id");
    }

    public function followed_by()
    {
        return $this->hasOne("App\Subscription", "receiver_id");
    }

    public function follower_of()
    {
        return $this->hasOne("App\Subscription", "sender_id");
    }

    /**
     * Send the password reset notification.
     *
     * @param  string  $token
     * @return void
     */
    public function sendPasswordResetNotification($token)
    {
        $this->notify(new ResetPassword($token, $this));
    }

}
