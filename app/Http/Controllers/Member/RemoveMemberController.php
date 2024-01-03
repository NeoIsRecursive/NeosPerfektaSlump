<?php

namespace App\Http\Controllers\Member;

use App\Http\Controllers\Controller;
use App\Models\Group;
use App\Models\Member;
use Illuminate\Support\Facades\Auth;

class RemoveMemberController extends Controller
{
    public function __invoke(Group $group, Member $member)
    {
        if (Auth::id() === $group->user_id) {
            $member->delete();

            return back();
        }
        abort(404);
    }
}
