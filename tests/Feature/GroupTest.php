<?php

namespace Tests\Feature;

use App\Models\User;
use Auth;
use Hash;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use Illuminate\Foundation\Testing\DatabaseTransactions;

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

    public function test_group_manager_group_view()
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

    public function test_create_group_with_file_as_auth_user()
    {
        $user = User::create([
            'name' => 'test',
            'email' => 'test@gmail.com',
            'password' => Hash::make('123')
        ]);

        $filePath = __DIR__ . '/../../misc/example.csv';
        $arrToGetFilename = explode('/', $filePath);
        $fileName = end($arrToGetFilename);
        $content = file_get_contents($filePath);
        $numberOfMembers = count(array_filter(explode("\n", $content), function ($x) {
            return $x !== "";
        }));

        $this->actingAs($user)
            ->followingRedirects()
            ->postJson('/manager/add-group', [
                'list' => new \Illuminate\Http\UploadedFile($filePath, $fileName, null, null, true),
            ]);

        $this->assertDatabaseHas('groups', ['group_name' => $fileName]);
        $this->assertDatabaseCount('members', $numberOfMembers);
    }

    public function test_create_group_with_file_as_guest_user()
    {
        $filePath = __DIR__ . '/../../misc/hej.txt';
        $arrToGetFilename = explode('/', $filePath);
        $fileName = end($arrToGetFilename);

        $this->followingRedirects()
            ->postJson('/manager/add-group', [
                'list' => new \Illuminate\Http\UploadedFile($filePath, $fileName, null, null, true),
            ]);

        $this->assertDatabaseMissing('groups', ['group_name' => $fileName]);
    }

    public function test_delete_group_as_auth_user()
    {
        $user = User::create([
            'name' => 'test',
            'email' => 'test@gmail.com',
            'password' => Hash::make('123')
        ]);

        $filePath = __DIR__ . '/../../misc/example.csv';
        $arrToGetFilename = explode('/', $filePath);
        $fileName = end($arrToGetFilename);
        $content = file_get_contents($filePath);
        $numberOfMembers = count(array_filter(explode("\n", $content), function ($x) {
            return $x !== "";
        }));

        $this->actingAs($user)
            ->followingRedirects()
            ->postJson('/manager/add-group', [
                'list' => new \Illuminate\Http\UploadedFile($filePath, $fileName, null, null, true),
            ]);

        $this->assertDatabaseHas('groups', ['group_name' => $fileName]);
        $this->assertDatabaseCount('members', $numberOfMembers);

        $this->actingAs($user)->delete('/manager/groups/1');
        $this->assertDatabaseCount('groups', 0);
        $this->assertDatabaseCount('members', 0);
    }

    public function test_delete_group_as_wrong_user()
    {
        $userWhoUploadedList = User::create([
            'name' => 'test',
            'email' => 'test@gmail.com',
            'password' => Hash::make('123')
        ]);

        $wrongUser = User::create([
            'name' => 'wrong',
            'email' => 'wrong@gmail.com',
            'password' => Hash::make('123')
        ]);

        $filePath = __DIR__ . '/../../misc/example.csv';
        $arrToGetFilename = explode('/', $filePath);
        $fileName = end($arrToGetFilename);
        $content = file_get_contents($filePath);
        $numberOfMembers = count(array_filter(explode("\n", $content), function ($x) {
            return $x !== "";
        }));

        $this->actingAs($userWhoUploadedList)
            ->followingRedirects()
            ->postJson('/manager/add-group', [
                'list' => new \Illuminate\Http\UploadedFile($filePath, $fileName, null, null, true),
            ]);

        $this->actingAs($wrongUser)->delete('/manager/groups/1');
        $this->assertDatabaseHas('groups', ['group_name' => $fileName]);
        $this->assertDatabaseCount('members', $numberOfMembers);
    }

    public function test_delete_group_as_guest_user()
    {
        $this->delete('/manager/groups/1')->assertRedirect('/login');
    }
}
