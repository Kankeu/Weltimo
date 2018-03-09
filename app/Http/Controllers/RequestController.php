<?php

namespace App\Http\Controllers;

use App\Events\RequestCreated;
use App\Notifications\RequestCreatedEmail;
use App\Request as Demande;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;

class RequestController extends Controller
{

    public function index()
    {
        $demandes = Demande::with('user')
            ->where('user_id', Auth::id())
            ->paginate(10);
        return new Response($demandes);
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
        $request->validate(['offer'=>'required|string','town'=>'required|string']);
        $demande = Demande::create(['offer'=>$request->input('offer'),'user_id'=>Auth::id(),'town'=>$request->input('town')]);
        $admin = User::where('email', $_ENV['ADMIN'])->first();
        broadcast(new RequestCreated($demande, Auth::user(), $admin))->toOthers();
        $admin->notify(new RequestCreatedEmail($demande, Auth::user()));
        return new Response($demande);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function show(Demande $demande)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function edit(Request $request)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, int $id)
    {
        $demande = Demande::find($id);
        if(!is_null($demande)){
            $request->validate(['offer'=>'required|string']);
            $demande->offer = $request->input('offer');
            $demande->save();
            return new Response($demande);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function destroy(int $id)
    {
        $demande = Demande::find($id);
        if(!is_null($demande)){
            $demande->delete();
            return new Response(['status'=>1]);
        }
    }

}
