<?php

namespace App;

use DateTimeInterface;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;

class Article extends Model
{
    protected $fillable = ["message","user_id","color","type","title","published_at"];

    protected $casts = [
        "user_id" => "int"
    ];

    public function image()
    {
        return $this->hasOne("App\Image");
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
        return $this->hasMany('App\Comment');
    }

    public function serializeDate(DateTimeInterface $date)
    {
        return $date->format('c');
    }
}
