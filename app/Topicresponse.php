<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Topicresponse extends Model
{
    protected $fillable = ['user_id','response','topic_id'];

    protected $casts = ['user_id'=>'int','topic_id'=>'int'];

    public function user()
    {
        return $this->BelongsTo("App\User")
            ->with("followed")
            ->withCount('followers','following');
    }

    public function topic()
    {
        return $this->belongsTo('App\Topic');
    }
}
