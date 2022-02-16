<?php

namespace Tests\Feature;

use App\Models\User;
use Auth;
use Hash;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use PHPUnit\TextUI\XmlConfiguration\Groups;
use Tests\TestCase;

class GroupTest extends TestCase
{

    use RefreshDatabase;

    public function test_manager_view()
    {
        $user = User::create([
            'name' => 'test',
            'email' => 'test@gmail.com',
            'password' => Hash::make('123')
        ]);



        $response = $this->actingAs($user)->get('manager');

        $response->assertStatus(200);
    }

    public function test_group_manager_view()
    {
        $user = User::create([
            'name' => 'test',
            'email' => 'test@gmail.com',
            'password' => Hash::make('123')
        ]);

        $group = $user->groups()->create(['group_name' => 'test']);

        $this->actingAs($user)
            ->get('manager/groups/' . $group->id . '/manage')
            ->assertSeeText($group->group_name);
    }
}
