<?php

namespace App\Http\Controllers;

use App\Article;
use App\Image;
use App\Jobs\ResizeImage;
use App\Like;
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
        $articles = Article::with('image','liked','user')
            ->orderBy("id","desc")
            ->withCount('likes','comments')
            ->get();
        return new Response($articles);
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
       // return new Response($request->all());
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
        if($article = Article::where("id",$article->id)->update($data)){
            $article->load('user','liked');
            $article->likes_count = $article->likes()->where("likable_id",$article->id)->count();
            $article->comments_count = $article->comments()->where("article_id",$article->id)->count();
            return new Response($article);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Article  $article
     * @return \Illuminate\Http\Response
     */
    public function destroy(Article $article)
    {
        if(!is_null($article)){
            $article->likes()->delete();
            if($article->delete()){
                return new Response(["status"=>1]);
            }
        }
    }

    private function storeWithFile(Request $request)
    {
        $image = $request->file('image');
        $extension = $image->getClientOriginalExtension();
        $name = Auth::id().'.'.time().'.'.$extension;
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
            $article->load("image","user","liked");
            $article->likes_count = $article->likes()->where("likable_id",$article->id)->count();
            $article->comments_count = $article->comments()->where("article_id",$article->id)->count();
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
            $article->load('user','liked');
            $article->likes_count = $article->likes()->where("likable_id",$article->id)->count();
            $article->comments_count = $article->comments()->where("article_id",$article->id)->count();
            return new Response($article);
        }
        return new Response(["status"=>0]);
    }

    public function like(Article $article, int $type)
    {
        $like = $article->liked()->first();
        if(is_null($like)){
            return new Response($article->likes()->create(["user_id"=>Auth::id(),"type"=>$type]));
        }
        if($like->type !== $type){
            $like->type = $type;
            $like->save();
            return new Response($like);
        }
    }

    public function deleteLike(Article $article)
    {
        $article->liked()->delete();
        return new Response(["status"=>1]);
    }
}
