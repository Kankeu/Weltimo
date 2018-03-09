<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Request extends Model
{
    protected $fillable = ['user_id','offer','town'];

    protected $casts = ['user_id'=>'int'];

    public function user()
    {
        return $this->belongsTo('App\User');
    }
}
