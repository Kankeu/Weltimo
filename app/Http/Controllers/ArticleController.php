<?php

namespace App\Http\Controllers;

use App\Article;
use App\Events\ArticleCreatedEvent;
use App\Image;
use App\Jobs\DeleteImage;
use App\Jobs\ResizeImage;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;

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
            ->paginate(10);
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
       $request->validate([
           'message' => 'required_without:image',
           'image' => $request->hasFile('image') ? 'required_without:message|nullable|mimes:jpeg,png,bmp,gif' : '',
        ]);
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
        if($article){
            $article->load("image","liked");
            $article->likes_count = $article->likes()->where("likable_id",$article->id)->count();
            $article->comments_count = $article->comments()->count();
            return new Response($article);
        }
        return new Response(['status'=>0]);
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
        $request->validate([
            'message' => 'required_without:image',
            'image' => 'required_without:message|image',
        ]);
        if($article){
            if($request->hasFile('image')){
                return $this->updateWithFile($request, $article);
            }
            $article->update($request->all());
            $article->load("image","user","liked");
            $article->likes_count = $article->likes()->where("likable_id",$article->id)->count();
            $article->comments_count = $article->comments()->count();
            return new Response($article);
        }
        return Response(["status"=>0]);
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
            $article->delete();
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
                $article->image()->create(['path'=>$global_path,'user_id'=>Auth::id()]);
                $this->dispatch(new ResizeImage($path, [0=>['w'=>660,'h'=>520]]));
                $article->load('user','image');
                $article->likes_count = $article->likes()->where("likable_id",$article->id)->count();
                $article->comments_count = $article->comments()->count();
                broadcast(new ArticleCreatedEvent($article->toJson(), Auth::user()))->toOthers();
                return new Response($article);
            }
        }
        return new Response(["status"=>0]);
    }

    private function storeWithoutFile(Request $request)
    {
        $data = $request->all();
        unset($data['image']);
        $data["user_id"] = Auth::id();
        if($article = Article::create($data)){
            $article->load('user');
            $article->likes_count = $article->likes()->where("likable_id",$article->id)->count();
            $article->comments_count = $article->comments()->count();
            broadcast(new ArticleCreatedEvent($article->toJson(), Auth::user()))->toOthers();
            return new Response($article);
        }
        return new Response(["status"=>0]);
    }

    private function updateWithFile(Request $request, Article $article)
    {
        $image = $request->file('image');
        $extension = $image->getClientOriginalExtension();
        if($article->image){
            $path = $article->image->path;
            $name = str_replace('/img/articles/','', $path);
        }else{
            $name = Auth::id().'.'.time().'.'.$extension;
            $path = '/img/articles/'.$name;
        }
        $global_path = $path;
        if($path = $image->move(public_path('/img/articles/'), $name))
        {
            $data = $request->all();
            unset($data["image"]);
            $data["user_id"] = Auth::id();
            if($article->update($data)){
                if($article->image){
                    $article->image->update(['path'=>$global_path]);
                }else{
                    $article->image()->create(['path'=>$global_path,'user_id'=>Auth::id()]);
                }
            }
            $this->dispatch(new ResizeImage($path, [0=>['w'=>660,'h'=>520]]));
            $article->load("image","user");
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

    public function likers(int $article, $type)
    {
        $likers = Article::find($article)->likes()->where('type',$type)->with('user')
            ->paginate(20);
        return new Response($likers);
    }

    public function likes(int $article)
    {
        $article = Article::with("image","liked")
            ->withCount('likes_love',
            'likes_like','likes_haha','likes_wow',
            'likes_glad','likes_brother','likes_sad','likes_angry','comments','likes')
            ->find($article);
        return new Response($article);
    }
}
