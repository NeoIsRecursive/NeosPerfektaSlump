<?php

namespace App\Http\Controllers;

use App\Models\User;
use Auth;
use Hash;
use Illuminate\Http\Request;

class RegisterController extends Controller
{

    public function __invoke(Request $request)
    {
        $request->validate([
            'name' => ['required'],
            'email' => ['required', 'email:rfc,dns', 'unique:users,email'],
            'password' => ['required', 'min:10', 'confirmed'],
        ]);

        $user = User::create([
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'password' => Hash::make($request->input('password'))
        ]);

        Auth::loginUsingId($user->id);

        return redirect('manager')->with('deleted', 'Registered succesfully');
    }
}
