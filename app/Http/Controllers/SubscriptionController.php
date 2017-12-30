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
        $WhoToFollow = (new User())
            ->with("followed")
            ->withCount('followers','following')
            ->inRandomOrder()
            ->whereDoesntHave("followed")
            ->where("id","!=",Auth::id())
            ->limit(5)
            ->get();
        return new Response($WhoToFollow);
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
        if($receiver_id !== Auth::id()){
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
    public function show(Subscription $subscription)
    {
        //
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
}
