<?php

namespace App\Http\Controllers;

use App\Events\UserOnlineEvent;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function login(Request $request): Response
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required|min:6',
        ]);
        if (Auth::attempt($request->all(), true)) {
            $user = User::withCount('followers','following')
                ->find(Auth::user()->id);
            Auth::setUser($user);
            broadcast(new UserOnlineEvent($user))->toOthers();
            return new Response($user);
        }
        return new Response(["status"=>0,"message"=>"Not authentificated. Email or password invalid"]);
    }

    public function loginWithToken(): Response
    {
        if(Auth::user()){
            $user = User::withCount('followers','following')
                ->find(Auth::user()->id);
            Auth::setUser($user);
            broadcast(new UserOnlineEvent($user))->toOthers();
            return new Response($user);
        }else{
            return new Response(["status"=>0,"Authentificate with remember token failed"]);
        }
    }
}
