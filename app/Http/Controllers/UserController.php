<?php

namespace App\Http\Controllers;

use App\Jobs\DeleteImage;
use App\Jobs\ResizeImage;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
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
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(int $id)
    {
        $user = User::with('followed')
            ->withCount('followers','following')
            ->find($id);
        return new Response($user);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, int $id)
    {
        $request->validate([
            'name' => 'required_without:password|',
            'forename' => 'required_without:password|',
            'email' => 'required_without:password|email',
            'title' => 'max:50',
            'biography' => 'max:300',
            'lPassword' => 'required_without:name|min:6',
            'password' => 'required_without:name|min:6',
        ]);
        if(!is_null($request->input('lPassword')) && Hash::check($request->input('lPassword'),User::where('id',Auth::id())->first()->password)){

            if(User::where('id',Auth::id())->update(["password"=>hash::make($request->input('password'))])){
                return new Response(['status'=>1]);
            }
        }
        if(User::where('id',Auth::id())->update($request->all())){
            $user = User::withCount('followers','following')
                ->find(Auth::id());
            Auth::setUser($user);
            return new Response($user);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user)
    {
        if(!is_null($user)){
            if($user->delete()){
                $id = Auth::id();
                $pathUsers = public_path("/img/users/$id.*");
                $this->dispatch(new DeleteImage($pathUsers));
                $pathArticles = public_path("/img/articles/$id.*");
                $this->dispatch(new DeleteImage($pathArticles));
                Auth::logout();
                return new Response(["status"=>1]);
            }
        }
    }

    public function avatar(Request $request)
    {
        $avatar = $request->file('avatar');
        if(Auth::user()->avatar !== "/img/default/avatar.jpg"){
            $this->dispatch(new DeleteImage(public_path(Auth::user()->avatar)));
        }
        return $this->upload($avatar,"avatar", [0=>['w'=>480,'h'=>360]]);
    }

    public function cover(Request $request)
    {
        $cover = $request->file('cover');
        if(Auth::user()->cover !== "/img/default/cover.jpg"){
            $this->dispatch(new DeleteImage(public_path(Auth::user()->cover)));
        }
        return $this->upload($cover,"cover", [0=>['w'=>890,'h'=>300]]);
    }

    public function upload($image,$key,$dimensions)
    {
        $extension = $image->getClientOriginalExtension();
        $name = Auth::id().'.'.time().'.'.$extension;
        $path = '/img/users/'.$name;
        $global_path = $path;
        if($path = $image->move(public_path('/img/users/'), $name))
        {
            Auth::user()->$key = $global_path;
            Auth::user()->save();
            $this->dispatch(new ResizeImage($path, $dimensions));
            return new Response(["status"=>1]);
        }
    }
}
