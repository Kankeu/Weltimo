<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $fillable = ['user_id','type','topic_id'];

    protected $casts = ['user_id'=>'int','topic_id'=>'ind'];
}
