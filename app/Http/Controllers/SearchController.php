<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Response;

class SearchController extends Controller
{
    public function index(string $keyword){
        $users = User::where("name", "LIKE","%$keyword%")
            ->orWhere("forename", "LIKE", "%$keyword%")
            ->orWhere("title", "LIKE", "%$keyword%")
            ->orWhere("biography", "LIKE", "%$keyword%")
            ->limit(5)
            ->get(["id","name","forename","avatar"]);
        return new Response($users);
    }
}
