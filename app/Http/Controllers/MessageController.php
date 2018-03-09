<?php

namespace App\Http\Controllers;

use App\Events\MessageCreatedEvent;
use App\Message;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
class MessageController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(int $id)
    {
        $messages = Message::where('request_id', $id)
            ->orderBy('created_at','desc')
            ->paginate(10);
        return new Response($messages);
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
        $request->validate([
            'message'=>'required|string',
            'receiver_id'=> Auth::user()->role === "admin" ? 'required|integer' : ''
        ]);
        $receiver_id = $request->input('receiver_id');
        if(Auth::user()->role !== "admin"){
            $admin = User::where('email',$_ENV['ADMIN'])->first();
            $receiver_id = $admin->id;
        }
        $message = Message::create(['sender_id'=>Auth::id(), 'receiver_id'=>$receiver_id, 'message'=>$request->input('message'),'request_id'=>$id]);
        broadcast(new MessageCreatedEvent($message->toJson(), Auth::user()))->toOthers();
        return new Response($message);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Message  $message
     * @return \Illuminate\Http\Response
     */
    public function show(Message $message)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Message  $message
     * @return \Illuminate\Http\Response
     */
    public function edit(Message $message)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Message  $message
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Message $message)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Message  $message
     * @return \Illuminate\Http\Response
     */
    public function destroy(Message $message)
    {
        //
    }
}
