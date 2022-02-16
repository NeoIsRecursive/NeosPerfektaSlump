<?php

namespace Tests\Feature;

use App\Models\User;
use Hash;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class LoginTest extends TestCase
{
    use RefreshDatabase;

    public function test_login_view()
    {
        $this->get('login')->assertSeeText('E-mail');
    }

    public function test_login_user()
    {
        $user = User::create([
            'name' => 'test',
            'email' => 'test@gmail.com',
            'password' => Hash::make('123')
        ]);

        $response = $this
            ->followingRedirects()
            ->post('login', ['email' => $user->email, 'password' => '123']);
        $response->assertSeeText('Log out');
    }

    public function test_login_user_without_password()
    {
        $response = $this
            ->from('login')
            ->followingRedirects()
            ->post('login', ['email' => 'test@gmail.com']);
        $response->assertSeeText('The password field is required.');
    }


    public function test_login_user_without_email()
    {
        $response = $this
            ->from('login')
            ->followingRedirects()
            ->post('login', ['password' => 'test@gmail.com']);
        $response->assertSeeText('The email field is required.');
    }

    public function test_login_user_with_wrong_password()
    {
        $response = $this
            ->from('login')
            ->followingRedirects()
            ->post('login', ['email' => 'test@gmail.com', 'password' => '321']);
        $response->assertSeeText('Woops, something went wrong. Please try again.');
    }

    public function test_login_user_with_wrong_credentials()
    {
        $response = $this
            ->from('login')
            ->followingRedirects()
            ->post('login', ['email' => 'tes@gmail.com', 'password' => '321']);
        $response->assertSeeText('Woops, something went wrong. Please try again.');
    }
}
