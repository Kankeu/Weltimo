<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Subscription extends Model
{
    protected $fillable = ["sender_id","receiver_id","status"];

    public function follower()
    {
        return $this->BelongsTo("App\User", "id","sender_id")
            ->with("followed")
            ->withCount('followers','following');
    }

    public function following()
    {
        return $this->BelongsTo("App\User","receiver_id")
            ->with("followed")
            ->withCount('followers','following');
    }
}
