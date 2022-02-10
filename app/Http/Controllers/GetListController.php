<?php

namespace App\Http\Controllers;

use App\Models\Group;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class GetListController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Group $group)
    {
        if (Auth::id() === $group->user_id) {

            return view('manage-groups')->with(['members' => $group->members()->get()]);
        }
    }
}
