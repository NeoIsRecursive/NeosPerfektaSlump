<?php

namespace App\Http\Controllers;

use App\Models\Group;

class DeleteGroupController extends Controller
{
    public function __invoke(Group $group)
    {
        //
        if (auth()->user()->id === $group->user_id) {
            $members = $group->members()->delete();
            $group->delete();
            $deletedStr = 'Deleted group "' . $group->group_name . '" along with its ' . $members . ' members';

            return redirect('manager')->with('deleted', $deletedStr);
        }
        abort(403);
    }
}
