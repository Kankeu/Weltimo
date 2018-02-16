<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Notifiableuser extends Model
{
    protected $fillable = ['user_id','type','notifiable_type','notifiable_id'];

    protected $casts = ['user_id'=>'int','notifiable_id'=>'int'];

    public function user()
    {
        return $this->belongsTo('App\User');
    }
}
