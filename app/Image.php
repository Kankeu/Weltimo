<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    protected $fillable = ["path","article_id"];

    protected $casts = [
        "article_id" => "int"
    ];

    public function user()
    {
        return $this->belongsTo( 'App\User');
    }
}
