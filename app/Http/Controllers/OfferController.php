<?php

namespace App\Http\Controllers;

use App\Actuality;
use Illuminate\Http\Response;

class OfferController extends Controller
{
    public function index()
    {
        $offers = Actuality::with("image")
            ->where("type","offer")
            ->where("published_at","<=",NOW())
            ->get();
        return new Response($offers);
    }
}
