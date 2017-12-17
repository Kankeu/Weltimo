<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    protected $fillable = ["message","user_id","color"];

    public function image()
    {
        return $this->hasOne("App\Image");
    }
}
