<?php

namespace App\Http\Controllers\Member;

use App\Http\Controllers\Controller;
use App\Models\Group;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AddMemberController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Group $group, Request $request)
    {
        if (Auth::id() === $group->user_id) {
            $request->validate(['new-member-name' => ['required', 'string']]);
            $group->members()->create(['member_name' => $request->input('new-member-name')]);
            return back();
        }

        return back()->withErrors(['something went wrong']);
    }
}
