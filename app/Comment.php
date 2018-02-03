<?php

namespace App;

use DateTimeInterface;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;

class Comment extends Model
{
    protected $fillable = ["user_id","comment_id","message"];


    protected $casts = [
        "user_id" => "int",
        "commentable_id" => "int",
        "comment_id" => "int"
    ];

    public function user()
    {
        return $this->belongsTo('App\User')
            ->with("followed")
            ->withCount("followers","following");
    }

    public function article()
    {
        return $this->belongsTo('App\Article');
    }

    public function replyedUser()
    {
        return $this->belongsTo('App\User', 'comment_id','id')
            ->with("followed")
            ->withCount('followers','following');
    }

    public function likes()
    {
        return $this->morphMany('App\Like','likable');
    }

    public function liked()
    {
        return $this->morphOne('App\Like','likable')->where("user_id",Auth::id());
    }

    public function serializeDate(DateTimeInterface $date)
    {
        return $date->format('c');
    }
}
