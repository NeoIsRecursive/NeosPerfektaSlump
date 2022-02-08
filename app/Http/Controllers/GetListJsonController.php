<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class GetListJsonController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
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
        return json_encode($names->zip($ids));
    }
}
