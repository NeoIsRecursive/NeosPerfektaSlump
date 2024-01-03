<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class GetGroupJsonController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        //
        $id = $request->validate(['id' => 'required', 'integer']);
        $id = $id['id'];

        $group = Auth::user()->members()->where('group_id', $id)->get(['member_name', 'members.id as id']);
        $names = $group->pluck('member_name');
        $ids = $group->pluck('id');

        return response($names->zip($ids))->header('Content-Type', 'text/json');
    }
}
