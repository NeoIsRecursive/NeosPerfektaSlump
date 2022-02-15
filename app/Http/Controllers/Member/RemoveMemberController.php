<?php

namespace App\Http\Controllers\Member;

use App\Models\Member;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Group;
use Illuminate\Support\Facades\Auth;

class RemoveMemberController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Group $group, Member $member)
    {
        if (Auth::id() === $group->user_id) {
            $member->delete();
            return back();
        }
        abort(404);
    }
}
