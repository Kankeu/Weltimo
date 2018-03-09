<?php

namespace App\Http\Controllers;

use App\Events\UserOnlineEvent;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Facades\Socialite;

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
            $user->hasPassword = !is_null($user->password);
            //broadcast(new UserOnlineEvent($user))->toOthers();
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
            //broadcast(new UserOnlineEvent($user))->toOthers();
            $user->hasPassword = !is_null($user->password);
            return new Response($user);
        }else{
            return new Response(["status"=>0,"Authentificate with remember token failed"]);
        }
    }

    /**
     * Redirect the user to the GitHub authentication page.
     *
     * @return \Illuminate\Http\Response
     */
    public function redirectToProvider(string $provider)
    {
        $providers = ['facebook','google','github'];
        if(in_array($provider, $providers)){
            return Socialite::driver($provider)->redirect();
        }
    }

    /**
     * Obtain the user information from GitHub.
     *
     * @return \Illuminate\Http\Response
     */
    public function handleProviderCallback(string $provider)
    {
        $providers = ['facebook','google','github'];
        if(in_array($provider, $providers)){
            $user = Socialite::driver($provider)->user();
            $userTologed = User::withCount('followers','following')
                ->where('email',$user->getEmail())
                ->first();
            if(!is_null($userTologed)){
                Auth::login($userTologed);
                return redirect('/');
            }
            $userCreated = User::create(['email'=>$user->getEmail(),'name'=>explode(" ",$user->getName())[1],'forename'=>explode(" ",$user->getName())[0],'avatar'=>$user->getAvatar()]);
            Auth::login($userCreated);

            $userCreated = User::withCount('followers','following')
                ->find(Auth::id());
            return redirect('/');
        }
    }

}
