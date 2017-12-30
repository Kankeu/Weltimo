<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;

class Comment extends Model
{
    protected $fillable = ["article_id","user_id","comment_id","message"];

    public function user()
    {
        return $this->belongsTo('App\User')->with("followed","followers","following");
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
}
