<?php

namespace App\Http\Controllers;

use App\Models\Group;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AddListController extends Controller
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
        $list = $request->validate([
            'list' => ['required', 'mimes:txt,csv']
        ]);

        $name = $list['list']->getClientOriginalName();

        $items = file_get_contents($list['list']);
        $items = preg_split('/\n/', preg_replace('/\r/', '', $items));

        $insertItems = [];

        foreach ($items as $item) {
            $insertItems[] = ['member_name' => $item];
        }


        $insert = Auth::user()->groups()->create(['group_name' => $name]);
        $insert->members()->createMany($insertItems);
    }
}
