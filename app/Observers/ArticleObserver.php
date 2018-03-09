<?php
/**
 * Created by IntelliJ IDEA.
 * User: root
 * Date: 28/01/18
 * Time: 14:48
 */

namespace App\Observer;


use App\Article;
use App\Jobs\DeleteImage;

class ArticleObserver
{
    /**
     * Listen to the User created event.
     *
     * @param  \App\User  $user
     * @return void
     */
    public function created(Article $article)
    {

    }

    /**
     * Listen to the User deleting event.
     *
     * @param  \App\User  $user
     * @return void
     */
    public function deleting(Article $article)
    {
        $article->likes()->delete();
        $article->comments()->delete();
        if($article->image){
            $url = $article->image->path;
            dispatch(new DeleteImage(public_path($url)));
            $article->image()->delete();
        }
    }
}