<?php

namespace App\Http\Controllers;

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
            return new Response(Auth::user());
        }
        return new Response(["status"=>0,"message"=>"Not authentificated. Email or password invalid"]);
    }

    public function loginWithToken(Request $request): Response
    {
        return new Response(Auth::user() ?? ["status"=>0,"Authentificate with remember token failed"]);
    }
}
