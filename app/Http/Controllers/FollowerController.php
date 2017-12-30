<?php

namespace App\Http\Controllers;

use App\Subscription;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;

class FollowerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(int $profile)
    {
        $followers = User::with(["followed","follower_of"=>function ($query) use ($profile){
            $query->where("receiver_id",$profile);
        }])
            ->withCount('followers','following')
            ->whereHas('follower_of',function ($query) use ($profile){
                $query->where("receiver_id",$profile);
            })
            ->where('id','!=',$profile)
            ->get();
        return new Response(["data"=>$followers]);
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
       //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\follower  $follower
     * @return \Illuminate\Http\Response
     */
    public function show(Subscription $follower)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\follower  $follower
     * @return \Illuminate\Http\Response
     */
    public function edit(Subscription $follower)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\follower  $follower
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Subscription $follower)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\follower  $follower
     * @return \Illuminate\Http\Response
     */
    public function destroy(Subscription $follower)
    {
        //
    }
}
