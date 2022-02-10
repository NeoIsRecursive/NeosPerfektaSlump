<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AppController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke()
    {
        if (!Auth::user()) {
            return view('random');
        }
        return view('random')->with(['lists' => Auth::user()->groups()->get(['group_name', 'id'])]);
    }
}
