<?php

namespace App\Http\Controllers\Admin;

use App\FailedJob;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Artisan;

class FailedJobController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return new Response(FailedJob::all());
    }

    public function retry(int $id)
    {
        Artisan::call("queue:retry $id");
        return new Response(['status'=>1]);
    }

    public function retryAll()
    {
        Artisan::call("queue:retry all");
        return new Response(['status'=>1]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\FailedJob  $failedJob
     * @return \Illuminate\Http\Response
     */
    public function destroy(FailedJob $failedJob)
    {
        if($failedJob->delete()){
            return new Response(["status"=>1]);
        }
    }
}
