<?php

namespace App\Http\Controllers;

use App\Notifications\TopicReplyed;
use App\Topic;
use App\Topicresponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;

class TopicResponseController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(int $id)
    {
        $topicresponses = Topicresponse::with('user')
            ->where('topic_id', $id)
            ->orderBy('created_at','asc')
            ->paginate(10);
        return new Response($topicresponses);
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
            'response' => 'required',
            'emailReceive' => 'boolean'
        ]);
        $topic = Topic::find($id);
        if(!is_null($topic)){
            $data = $request->only(['response']);
            $data['user_id'] = Auth::id();
            $data['topic_id'] = $id;
            $topicresponse = Topicresponse::create($data);
            if($request->input('emailReceive') && is_null($topic->notifiableusers()->where('user_id',Auth::id())->first())){
                $topic->notifiableusers()->create(['type'=>$request->input('emailReceive'),'user_id'=>Auth::id()]);
            }
            foreach ($topic->notifiableusers as $notifiableuser){
                if($notifiableuser->user->id!==Auth::id()){
                    $notifiableuser->user->notify(new TopicReplyed(Auth::user(), $topic,$topicresponse->id, $notifiableuser->user->id===$topic->user_id ? 'your' : 'the'));
                }
            }
            return new Response($topicresponse);
        }
        return new Response(['status'=>0]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Topicresponse  $topicresponse
     * @return \Illuminate\Http\Response
     */
    public function show(Topicresponse $topicresponse)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Topicresponse  $topicresponse
     * @return \Illuminate\Http\Response
     */
    public function edit(Topicresponse $topicresponse)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Topicresponse  $topicresponse
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, int $id,Topicresponse $topicresponse)
    {
        $request->validate([
            'response' => 'required',
        ]);
        if(!is_null($topicresponse)){
            $topicresponse->response = $request->input('response');
            $topicresponse->save();
            return new Response($topicresponse);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Topicresponse  $topicresponse
     * @return \Illuminate\Http\Response
     */
    public function destroy(int $topic,Topicresponse $topicresponse)
    {
        if(!is_null($topicresponse)){
            $topicresponse->delete();
            return new Response(['status'=>1]);
        }
        return new Response(['status'=>0]);
    }
}
