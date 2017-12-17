<?php

namespace App\Http\Controllers;

use App\Article;
use App\Image;
use App\Jobs\ResizeImage;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\URL;

class ArticleController extends Controller
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
        return new Response($request->all());
        if($request->hasFile('image')){
            return $this->storeWithFile($request);
        }else{
            return $this->storeWithoutFile($request);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Article  $article
     * @return \Illuminate\Http\Response
     */
    public function show(Article $article)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Article  $article
     * @return \Illuminate\Http\Response
     */
    public function edit(Article $article)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Article  $article
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Article $article)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Article  $article
     * @return \Illuminate\Http\Response
     */
    public function destroy(Article $article)
    {
        //
    }

    private function storeWithFile(Request $request)
    {
        $image = $request->file('image');
        $extension = $image->getClientOriginalExtension();
        $name = Auth::id().'.'.microtime().'.'.$extension;
        $path = 'img/articles/'.$name;
        $global_path = URL::asset($path);
        if($path = $image->move(public_path('img/articles/'), $name))
        {
            $data = $request->all();
            unset($data["image"]);
            $data["user_id"] = Auth::id();
            if($article = Article::create($data)){
                Image::create(['path'=>$global_path,'article_id'=>$article->id]);
            }
            $this->dispatch(new ResizeImage($path, [0=>['w'=>660,'h'=>520]]));
            $article->load("image");
            return new Response($article);
        }
        return new Response(["status"=>0]);
    }

    private function storeWithoutFile(Request $request)
    {
        $data = $request->all();
        unset($data['image']);
        $data["user_id"] = Auth::id();
        if($article = Article::create($data)){
            return new Response($article);
        }
        return new Response(["status"=>0]);
    }
}
