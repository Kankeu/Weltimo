<?php

namespace App\Http\Controllers;

use App\Article;
use Illuminate\Http\Response;

class ActualityController extends Controller
{
    public function index ()
    {
        $actualities = Article::with('image','liked')
            ->where("type","actuality")
            ->where("published_at","<=",NOW())
            ->orderBy("created_at","desc")
            ->withCount('likes','comments')
            ->paginate(10);
        return new Response($actualities);
    }
}
