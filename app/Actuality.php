<?php

namespace App;

use DateTimeInterface;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;

class Actuality extends Model
{
    protected $fillable = ["message","user_id","color","type","title","published_at"];

    protected $casts = [
        "user_id" => "int",
        "published_at" => "datetime"
    ];

    public function image()
    {
        return $this->morphOne('App\Image','imagable');
    }

    public function likes()
    {
        return $this->morphMany('App\Like','likable');
    }

    public function liked()
    {
        return $this->morphOne('App\Like','likable')->where("user_id",Auth::id());
    }

    public function user()
    {
        return $this->BelongsTo("App\User")
            ->with("followed")
            ->withCount('followers','following');
    }

    public function comments()
    {
        return $this->morphMany('App\Comment','commentable');
    }

    public function serializeDate(DateTimeInterface $date)
    {
        return $date->format('c');
    }

    public function likes_love()
    {
        return $this->morphMany('App\Like','likable')->where('type',8);
    }

    public function likes_like()
    {
        return $this->morphMany('App\Like','likable')->where('type',7);
    }

    public function likes_haha()
    {
        return $this->morphMany('App\Like','likable')->where('type',6);
    }

    public function likes_wow()
    {
        return $this->morphMany('App\Like','likable')->where('type',5);
    }

    public function likes_glad()
    {
        return $this->morphMany('App\Like','likable')->where('type',4);
    }

    public function likes_brother()
    {
        return $this->morphMany('App\Like','likable')->where('type',3);
    }

    public function likes_sad()
    {
        return $this->morphMany('App\Like','likable')->where('type',2);
    }

    public function likes_angry()
    {
        return $this->morphMany('App\Like','likable')->where('type',1);
    }

}
