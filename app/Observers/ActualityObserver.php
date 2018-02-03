<?php
/**
 * Created by IntelliJ IDEA.
 * User: root
 * Date: 28/01/18
 * Time: 21:37
 */

namespace App\Observer;


use App\Actuality;
use App\Jobs\DeleteImage;

class ActualityObserver
{
    /**
     * Listen to the User created event.
     *
     * @param Actuality $actuality
     * @return void
     * @internal param User $user
     */
    public function created(Actuality $actuality)
    {

    }

    /**
     * Listen to the User deleting event.
     *
     * @param  \App\User  $user
     * @return void
     */
    public function deleting(Actuality $actuality)
    {
        $actuality->likes()->delete();
        $actuality->comments()->delete();
        if($actuality->image){
            $url = $actuality->image->path;
            dispatch(new DeleteImage(public_path($url)));
            $actuality->image()->delete();
        }
    }
}