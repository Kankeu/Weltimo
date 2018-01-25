<?php

namespace App\Http\Controllers\Admin;

use App\Article;
use App\Events\ActualityCreatedEvent;
use App\Events\ArticleCreatedEvent;
use App\Events\UserOnlineEvent;
use App\Image;
use App\Jobs\ActualityPublish;
use App\Jobs\DeleteImage;
use App\Jobs\ResizeImage;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;

class ActualityController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return new Response(Article::where("type","actuality")->all());
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
     * @param  \App\Actuality  $article
     * @return \Illuminate\Http\Response
     */
    public function show(Article $article)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Actuality  $article
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
     * @param  \App\Actuality  $article
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Article $article)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Actuality  $article
     * @return \Illuminate\Http\Response
     */
    public function destroy(Article $article)
    {
        if(!is_null($article)){
            $article->likes()->delete();
            if($article->image){
                $url = $article->image->path;
                $this->dispatch(new DeleteImage(public_path($url)));
                $article->delete();
            }else{
                $article->delete();
            }
            return new Response(["status"=>1]);
        }
    }

    private function storeWithFile(Request $request)
    {
        $image = $request->file('image');
        $extension = $image->getClientOriginalExtension();
        $name = Auth::id().'.'.time().'.'.$extension;
        $path = '/img/articles/'.$name;
        $global_path = $path;
        if($path = $image->move(public_path('/img/articles/'), $name))
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
            if($article->published_at && !is_null($article->type)){
                $this->dispatch((new ActualityPublish($article->toJson(), Auth::user()))
                    ->delay(new \DateTime($article->published_at)));
            }else{
                $this->dispatch((new ActualityPublish($article->toJson(), Auth::user())));
            }
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
            if($article->published_at && !is_null($article->type)){
                $this->dispatch((new ActualityPublish($article->toJson(), Auth::user()))
                    ->delay(new \DateTime($article->published_at)));
            }else{
                $this->dispatch((new ActualityPublish($article->toJson(), Auth::user())));
            }
            return new Response($article);
        }
        return new Response(["status"=>0]);
    }
}
