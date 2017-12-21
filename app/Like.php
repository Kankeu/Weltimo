<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Like extends Model
{
    protected $fillable = ['user_id','likable_id','likable_type','type'];

    public function likable()
    {
      return $this->morphTo();
    }

    protected $hidden = [
        'likable_type',
    ];
}
