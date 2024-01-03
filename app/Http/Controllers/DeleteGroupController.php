<?php

namespace App\Http\Controllers;

use App\Models\Group;
use Auth;

class DeleteGroupController extends Controller
{
    public function __invoke(Group $group)
    {
        //
        if (Auth::id() === $group->user_id) {
            $members = $group->members()->delete();
            $group->delete();
            $deletedStr = 'Deleted group "'.$group->group_name.'" along with its '.$members.' members';

            return redirect('manager')->with('deleted', $deletedStr);
        }
        abort(403);
    }
}
