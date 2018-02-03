<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Like extends Model
{
    protected $fillable = ['user_id','likable_id','likable_type','type'];


    protected $casts = [
        "likable" => "int",
        "user_id" => "int"
    ];

    public function likable()
    {
      return $this->morphTo();
    }

    public function user()
    {
        return $this->belongsTo('App\User');
    }

}
