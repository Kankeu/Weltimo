<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Message extends Model
{
    protected $fillable = ['sender_id', 'receiver_id', 'request_id', 'message'];

    protected $casts = ['sender_id'=>'int', 'receiver_id'=>'int', 'request_id'=>'int'];
}
