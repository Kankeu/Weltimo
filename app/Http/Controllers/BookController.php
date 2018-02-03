<?php

namespace App\Http\Controllers;

use App\Book;
use Illuminate\Http\Response;

class BookController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(string $type, string $level)
    {
        $books = Book::with('image','user')
            ->where('level',$level)
            ->where("type",$type)
            ->where("published_at","<=",NOW())
            ->orderBy("created_at","desc")
            ->withCount('comments')
            ->paginate(10);
        return new Response($books);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Book  $book
     * @return \Illuminate\Http\Response
     */
    public function show(Book $book)
    {
        //
    }

}
