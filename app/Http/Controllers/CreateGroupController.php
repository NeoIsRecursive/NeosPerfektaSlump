<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CreateGroupController extends Controller
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
            'list' => ['required', 'mimes:txt,csv'],
            'name' => ['nullable', 'string', 'max:50']
        ]);

        $name = isset($list['name']) ? $list['name'] : $list['list']->getClientOriginalName();

        $items = file_get_contents($list['list']);
        $items = preg_split('/\n/', preg_replace('/\r/', '', $items));

        $insertItems = [];

        foreach ($items as $item) {
            if ($item !== '') {
                $insertItems[] = ['member_name' => $item];
            }
        }

        $insert = Auth::user()->groups()->create(['group_name' => $name]);
        $insert->members()->createMany($insertItems);

        return redirect('manager');
    }
}
