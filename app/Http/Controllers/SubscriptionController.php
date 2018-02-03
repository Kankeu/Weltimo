<?php

namespace App\Http\Controllers;

use App\Subscription;
use App\User;
use function foo\func;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;

class SubscriptionController extends Controller
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
     * @return Response
     */
    public function store(Request $request)
    {
        $request->validate(["receiver_id"=>"required|integer"]);
        $receiver_id = $request->input("receiver_id");
        $subscription = Subscription::where('receiver_id',$receiver_id)->where('sender_id',Auth::id())->first();
        if($receiver_id !== Auth::id() && is_null($subscription)){
            if($subscription = Subscription::create(["sender_id"=>Auth::id(),"receiver_id"=>$receiver_id])){
                return new Response($subscription);
            }
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Subscription  $subscription
     * @return \Illuminate\Http\Response
     */
    public function show(int $profile)
    {
        $WhoToFollow = User::with("followed")
            ->whereDoesntHave('followed')
            ->withCount('followers','following')
            ->inRandomOrder()
           /* ->whereHas('followed_by',function ($query) use ($profile){
                $query->where("sender_id",$profile);
            })*/
            ->where('id','!=',$profile)
            ->where("id","!=",Auth::id())
            ->limit(5)
            ->get();
        return new Response($WhoToFollow);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Subscription  $subscription
     * @return \Illuminate\Http\Response
     */
    public function edit(Subscription $subscription)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Subscription  $subscription
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Subscription $subscription)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Subscription  $subscription
     * @return \Illuminate\Http\Response
     */
    public function destroy(Subscription $subscription)
    {
        if(!is_null($subscription) && $subscription->delete()){
            return new Response(["status"=>1]);
        }
    }

    public function unfollow(int $id){
        return $this->destroy(Subscription::where('receiver_id',$id)->where('sender_id',Auth::id())->first());
    }

    public function deletefollower(int $id){
        $this->destroy(Subscription::where('receiver_id',Auth::id())->where('sender_id',$id)->first());
    }
}
