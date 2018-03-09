<?php

namespace App\Http\Controllers;

use App\Discussionstate;
use App\Events\NextStep;
use App\Notifications\NextStepEmail;
use App\Request as Demande;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;

class DiscussionstateController extends Controller
{
    public function index(int $id){
        return new Response(Discussionstate::with('user')->where('request_id',$id)->first());
    }

    public function store(Request $request, int $request_id)
    {
        $request->validate([
            "state"=>'required|integer',
        ]);
        $demande  = Demande::findOrFail($request_id);
        if(!is_null($demande)){
            $discussionstate = Discussionstate::where('request_id', $demande->id)->first();
            if(!is_null($discussionstate)){
                if($discussionstate->state<=4 && $discussionstate->confirmated<=4){
                    if($discussionstate->state !== $discussionstate->confirmated && $discussionstate->user_id !== Auth::id()){
                        $discussionstate->confirmated = $discussionstate->state;
                    }else{
                        $discussionstate->state = $discussionstate->confirmated + 1;
                        $discussionstate->user_id = Auth::id();
                    }
                    $discussionstate->save();
                }
            }else{
                $discussionstate = Discussionstate::create(['user_id'=>Auth::id(),'request_id'=>$demande->id,'state'=>$request->input('state')]);
            }
            $user = User::find(Auth::user()->role==="admin" ? $discussionstate->request->user->id : User::where('email', $_ENV['ADMIN'])->first()->id);
            broadcast(new NextStep($discussionstate, Auth::user(), $user))->toOthers();
            $user->notify(new NextStepEmail($discussionstate, Auth::user()));
            return new Response($discussionstate);
        }

        Discussionstate::create($request->all());
    }

}
