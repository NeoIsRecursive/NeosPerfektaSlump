<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;

class ManagerController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke()
    {
        $groups = Auth::user()->groups()->get(['group_name', 'id']);
        return view('manager')->with(['lists' => $groups]);
    }
}
