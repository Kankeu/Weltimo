<?php

namespace App\Http\Controllers\Admin;

use App\Request as Demande;
use Illuminate\Http\Response;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class RequestController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function index()
    {
        if(Auth::user()->role==="admin"){
            $demandes = Demande::with('user')
                ->paginate(10);
            return new Response($demandes);
        }
    }

    public function destroy(Demande $demande)
    {
        //
    }

    public function sent()
    {
        $demandes = Demande::with('user')
            ->where('user_id', Auth::id())
            ->paginate(10);
        return new Response($demandes);
    }
}

