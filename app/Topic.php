<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;

class Topic extends Model
{
    protected $fillable = ['user_id','question','title'];

    protected $casts = ['user_id'=>'int'];

    public function user()
    {
        return $this->BelongsTo("App\User")
            ->with("followed")
            ->withCount('followers','following');
    }

    public function categories()
    {
        return $this->hasMany('App\Category');
    }

    public function topicresponses()
    {
        return $this->hasMany('App\Topicresponse')->with('user');
    }

    public function notifiableusers()
    {
             return $this->morphMany('App\Notifiableuser','notifiable');
    }
}
