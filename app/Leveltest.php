<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Leveltest extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'level', 'leveltest_id', 'sentence', 'just'
    ];

    public function answers()
    {
        return $this->hasMany('App\Leveltest');
    }
}
