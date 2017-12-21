<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;

class Article extends Model
{
    protected $fillable = ["message","user_id","color"];

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
}
