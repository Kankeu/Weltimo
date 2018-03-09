<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Discussionstate extends Model
{
    protected $fillable = ['user_id','request_id','state','confirmated'];

    protected $casts = [
        'user_id'=>'int',
        'request_id'=>'int',
        'state'=>'int',
        'confirmated'=>'int'
    ];

    public function user()
    {
        return $this->belongsTo('App\User');
    }

    public function request()
    {
        return $this->belongsTo('App\Request');
    }
}
