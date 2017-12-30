<?php

namespace App\Http\Controllers;

use App\Jobs\ResizeImage;
use App\Leveltest;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\URL;

class InscriptionController extends Controller
{

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $request->all();
        $data['password'] = Hash::make($data['password']);
        $user = User::create($data);
        Auth::login($user);
        return new Response($user);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, User $user)
    {
        if(User::where('id', Auth::user()->id)->update($request->all())){
            return Response(Leveltest::with(["answers"=>function($query){
                $query->inRandomOrder();
                }])
                ->whereNull("leveltest_id")
                ->where("level",$request->input('level'))
                ->get());
        }
    }

    public function upload(Request $request)
    {
        $avatar = $request->file('avatar');
        $extension = $avatar->getClientOriginalExtension();
        $name = Auth::id().'.'.time().'.'.$extension;
        $path = 'img/users/'.$name;
        $global_path = URL::asset($path);
        if($path = $avatar->move(public_path('img/users/'), $name))
        {
            Auth::user()->avatar = $global_path;
            Auth::user()->confirmated = 1;
            Auth::user()->save();
            $this->dispatch(new ResizeImage($path, [0=>['w'=>480,'h'=>360]]));
            return new Response(["status"=>1]);
        }
    }

}
