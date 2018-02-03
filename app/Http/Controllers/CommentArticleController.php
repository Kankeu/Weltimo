<?php

namespace App\Http\Controllers;

use App\Article;
use App\Comment;
use App\Events\CommentCreatedEvent;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;

class CommentArticleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(int $article)
    {
        $article = Article::find($article);
        if(!is_null($article)){
            $comments = $article->comments()->with('user','replyedUser','liked')
                ->withCount("likes")
                ->orderBy("created_at","desc")
                ->paginate(10);
            return new Response($comments);
        }
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
    public function store(Request $request, int $id)
    {
        $data = $request->all();
        $article = Article::find($id);
        if(!is_null($article)){
            $comment = $article->comments()->create($data);
            $comment->load('user');
            $comment->likes_count = $comment->likes()->where("likable_id",$comment->id)->count();
            if($comment->comment_id){
                $comment->load('replyedUser','liked');
            }
            broadcast(new CommentCreatedEvent($comment->toJson(), $article->user->id))->toOthers();
            return new Response($comment);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Comment  $comment
     * @return \Illuminate\Http\Response
     */
    public function show(Comment $comment)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Comment  $comment
     * @return \Illuminate\Http\Response
     */
    public function edit(Comment $comment)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Comment  $comment
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Comment $comment)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Comment  $comment
     * @return \Illuminate\Http\Response
     */
    public function destroy(int $article,Comment $comment)
    {
        if(!is_null($comment)){
            $comment->likes()->delete();
            if($comment->delete()){
                return new Response(["status"=>1]);
            }
        }
    }

    public function like(int $article, Comment $comment, int $type)
    {
        $like = $comment->liked()->first();
        if(is_null($like)){
            return new Response($comment->likes()->create(["user_id"=>Auth::id(),"type"=>$type]));
        }
    }

    public function deleteLike(int $article, Comment $comment)
    {
        $comment->liked()->delete();
        return new Response(["status"=>1]);
    }
}
