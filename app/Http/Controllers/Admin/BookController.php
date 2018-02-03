<?php

namespace App\Http\Controllers\Admin;

use App\Book;
use App\Jobs\BookPublish;
use App\Jobs\ResizeImage;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;

class BookController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'level' => 'required',
            'type' => 'required',
            'url' => 'required|url',
            'published_at' => 'date',
            'image' => 'image',
        ]);
        if(!is_null($request->input('published_at'))){
            $request['published_at'] = date_format(new \DateTime($request->input('published_at')),'Y-m-d H:i:s');
        }
        if($request->hasFile('image')){
            return $this->storeWithFile($request);
        }else{
            return $this->storeWithoutFile($request);
        }
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

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Book  $book
     * @return \Illuminate\Http\Response
     */
    public function edit(Book $book)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Book  $book
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Book $book)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Book  $book
     * @return \Illuminate\Http\Response
     */
    public function destroy(Book $book)
    {
        //
    }

    private function storeWithFile(Request $request)
    {
        $image = $request->file('image');
        $extension = $image->getClientOriginalExtension();
        $name = Auth::id().'.'.time().'.'.$extension;
        $path = '/img/books/'.$name;
        $global_path = $path;
        if($path = $image->move(public_path('/img/books/'), $name))
        {
            $data = $request->all();
            $data['user_id'] = Auth::id();
            unset($data["image"]);
            if($book = Book::create($data)){
                $book->image()->create(['path'=>$global_path,'user_id'=>Auth::id()]);
            }
            $this->dispatch(new ResizeImage($path, [0=>['w'=>660,'h'=>520]]));
            $book->load("image","user");
            $book->comments_count = $book->comments()->count();
            if($book->published_at && !is_null($book->type)){
                $this->dispatch((new BookPublish($book->toJson(), Auth::user()))
                    ->delay(new \DateTime($book->published_at)));
            }else{
                $this->dispatch((new BookPublish($book->toJson(), Auth::user())));
            }
            return new Response($book);
        }
        return new Response(["status"=>0]);
    }

    private function storeWithoutFile(Request $request)
    {
        $data = $request->all();
        $data['user_id'] = Auth::id();
        unset($data['image']);
        if($book = Book::create($data)){
            $book->load('user');
            $book->comments_count = $book->comments()->count();
            if($book->published_at && !is_null($book->type)){
                $this->dispatch((new BookPublish($book->toJson(), Auth::user()))
                    ->delay(new \DateTime($book->published_at)));
            }else{
                $this->dispatch((new BookPublish($book->toJson(), Auth::user())));
            }
            return new Response($book);
        }
        return new Response(["status"=>0]);
    }
}
