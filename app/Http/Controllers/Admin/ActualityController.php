<?php

namespace App\Http\Controllers\Admin;

use App\Actuality;
use App\Image;
use App\Jobs\ActualityPublish;
use App\Jobs\ResizeImage;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;

class ActualityController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return new Response(Actuality::where("type","actuality")->all());
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
            'title' => 'required',
            'type' => 'required',
            'published_at' => 'date',
            'image' => 'image',
        ]);
        if(!is_null($request->input('published_at'))){
           $request['published_at'] = date_format(new \DateTime($request->input('published_at')),'Y-m-d H:i:s');
        }
        if($request->hasFile('image')){
            return $this->storeWithFile($request);
        }else{
            return $this->storeWithoutFile($request);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Actuality  $actuality
     * @return \Illuminate\Http\Response
     */
    public function show(Actuality $actuality)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Actuality  $actuality
     * @return \Illuminate\Http\Response
     */
    public function edit(Actuality $actuality)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Actuality  $actuality
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Actuality $actuality)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Actuality  $actuality
     * @return \Illuminate\Http\Response
     */
    public function destroy(Actuality $actuality)
    {
        if(!is_null($actuality)){
            $actuality->delete();
            return new Response(["status"=>1]);
        }
    }

    private function storeWithFile(Request $request)
    {
        $image = $request->file('image');
        $extension = $image->getClientOriginalExtension();
        $name = Auth::id().'.'.time().'.'.$extension;
        $path = '/img/actualities/'.$name;
        $global_path = $path;
        if($path = $image->move(public_path('/img/actualities/'), $name))
        {
            $data = $request->all();
            $data['user_id'] = Auth::id();
            unset($data["image"]);
            if($actuality = Actuality::create($data)){
                $actuality->image()->create(['path'=>$global_path,'user_id'=>Auth::id()]);
            }
            $this->dispatch(new ResizeImage($path, [0=>['w'=>660,'h'=>520]]));
            $actuality->load("image","user","liked");
            $actuality->likes_count = $actuality->likes()->where("likable_id",$actuality->id)->count();
            $actuality->comments_count = $actuality->comments()->count();
            if($actuality->published_at && !is_null($actuality->type)){
                $this->dispatch((new ActualityPublish($actuality->toJson(), Auth::user()))
                    ->delay(new \DateTime($actuality->published_at)));
            }else{
                $this->dispatch((new ActualityPublish($actuality->toJson(), Auth::user())));
            }
            return new Response($actuality);
        }
        return new Response(["status"=>0]);
    }

    private function storeWithoutFile(Request $request)
    {
        $data = $request->all();
        $data['user_id'] = Auth::id();
        unset($data['image']);
        if($actuality = Actuality::create($data)){
            $actuality->load('liked','user');
            $actuality->likes_count = $actuality->likes()->where("likable_id",$actuality->id)->count();
            $actuality->comments_count = $actuality->comments()->count();
            if($actuality->published_at && !is_null($actuality->type)){
                $this->dispatch((new ActualityPublish($actuality->toJson(), Auth::user()))
                    ->delay(new \DateTime($actuality->published_at)));
            }else{
                $this->dispatch((new ActualityPublish($actuality->toJson(), Auth::user())));
            }
            return new Response($actuality);
        }
        return new Response(["status"=>0]);
    }
}
