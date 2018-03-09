<?php

namespace App;

use DateTimeInterface;
use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    protected $fillable = ["user_id","title", "message", "type", "level", "url", "published_at"];

    protected $casts = [
        "user_id" => "int",
        "published_at" => "datetime"
    ];

    public function user()
    {
        return $this->BelongsTo("App\User")
            ->with("followed")
            ->withCount('followers','following');
    }

    public function comments()
    {
        return $this->morphMany('App\Comment','commentable');
    }

    public function serializeDate(DateTimeInterface $date)
    {
        return $date->format('c');
    }
}
