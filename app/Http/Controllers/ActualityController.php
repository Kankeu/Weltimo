<?php

namespace App\Http\Controllers;

use App\Actuality;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;

class ActualityController extends Controller
{
    public function index ()
    {
        $actualities = Actuality::with('image','liked')
            ->where("type","actuality")
            ->where("published_at","<=",NOW())
            ->orderBy("created_at","desc")
            ->withCount('likes','comments')
            ->paginate(10);
        return new Response($actualities);
    }

    public function like(Actuality $actuality, int $type)
    {
        $like = $actuality->liked()->first();
        if(is_null($like)){
            return new Response($actuality->likes()->create(["user_id"=>Auth::id(),"type"=>$type]));
        }
        if($like->type !== $type){
            $like->type = $type;
            $like->save();
            return new Response($like);
        }
    }

    public function deleteLike(Actuality $actuality)
    {
        $actuality->liked()->delete();
        return new Response(["status"=>1]);
    }

    public function likers(int $actuality, $type)
    {
        $likers = Actuality::find($actuality)->likes()->where('type',$type)->with('user')
            ->paginate(20);
        return new Response($likers);
    }

    public function likes(int $actuality)
    {
        $actuality = Actuality::with("image","liked")
            ->withCount('likes_love',
            'likes_like','likes_hah','likes_wow',
            'likes_glad','likes_brother','likes_sad','likes_angry','comments','likes')
            ->find($actuality);
        return new Response($actuality);
    }
}
