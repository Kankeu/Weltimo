<?php

namespace App\Http\Controllers;

use App\Category;
use App\Topic;
use App\Topicresponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;

class TopicController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $topics = Topic::with('user','categories')
            ->withCount('topicresponses')
            ->paginate(10);
        return new Response($topics);
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
            'title' => 'required|max:190',
            'categories' => 'required|array',
            'question' => 'required',
            'emailReceive' => 'boolean'
        ]);
        $data = $request->only(['title','question']);
        $data['user_id'] = Auth::id();
        $topic = Topic::create($data);
        if($request->input('emailReceive')){
            $topic->notifiableusers()->create(['type'=>$request->input('emailReceive'),'user_id'=>Auth::id()]);
        }
        foreach ($request->only('categories')['categories'] as $category){
           Category::create(['type'=>$category,'user_id'=>Auth::id(),'topic_id'=>$topic->id]);
        }
        $topic->load('categories');
        $topic->topicresponses_count = 0;
        return new Response($topic);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Topic  $topic
     * @return \Illuminate\Http\Response
     */
    public function show(Topic $topic)
    {
        $topic->topicresponses_count = Topicresponse::where('topic_id',$topic->id)
            ->count();
        $topic->load('user','categories');
        return new Response($topic->load('user'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Topic  $topic
     * @return \Illuminate\Http\Response
     */
    public function edit(Topic $topic)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Topic  $topic
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Topic $topic)
    {
        $request->validate([
            'title' => 'required|max:190',
            'categories' => 'required|array',
            'question' => 'required',
        ]);
        if(!is_null($topic)){
            $topic->title = $request->input('title');
            $topic->question = $request->input('question');
            $topic->save();
            $topic->categories()->delete();
            foreach ($request->only('categories')['categories'] as $category){
                Category::create(['type'=>$category,'user_id'=>Auth::id(),'topic_id'=>$topic->id]);
            }
            $topic->load('categories');
            $topic->topicresponses_count = 0;
            return new Response($topic);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Topic  $topic
     * @return \Illuminate\Http\Response
     */
    public function destroy(Topic $topic)
    {
        //
    }

    public function bestTopics(): Response
    {
        $topics = Topic::with('user','categories')
            ->withCount('topicresponses')
            ->orderBy('topicresponses_count','desc')
            ->paginate(10);
        return new Response($topics);
    }

    public function newTopics(): Response
    {
        $topics = Topic::with('user','categories')
            ->withCount('topicresponses')
            ->orderBy('created_at','desc')
            ->paginate(10);
        return new Response($topics);
    }

    public function myTopics(): Response
    {
        $topics = Topic::with('user','categories')
            ->where('user_id',Auth::id())
            ->withCount('topicresponses')
            ->orderBy('topicresponses_count','desc')
            ->paginate(10);
        return new Response($topics);
    }
}
