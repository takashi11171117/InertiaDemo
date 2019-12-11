<?php

namespace App\Http\Controllers;

use App\User;
use Inertia\Inertia;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Redirect;

class UsersController extends Controller
{
    public function index()
    {
        return Inertia::render('Users/Index', [
            'filters' => Request::all('search', 'role', 'trashed'),
            'users' => User::orderBy('name')->get()
                                          ->transform(function ($user) {
                                              return [
                                                  'id' => $user->id,
                                                  'name' => $user->name,
                                                  'email' => $user->email,
                                                  'owner' => $user->owner,
                                                  'deleted_at' => $user->deleted_at,
                                              ];
                                          }),
        ]);
    }

    public function edit(User $user)
    {
        return Inertia::render('Users/Edit', [
            'user' => [
                'id' => $user->id,
                'first_name' => $user->first_name,
                'last_name' => $user->last_name,
                'email' => $user->email,
                'owner' => $user->owner,
                'deleted_at' => $user->deleted_at,
            ],
        ]);
    }

    public function update(User $user)
    {
        if (App::environment('demo') && $user->isDemoUser()) {
            return Redirect::back()->with('error', 'Updating the demo user is not allowed.');
        }
        Request::validate([
            'first_name' => ['required', 'max:50'],
            'last_name' => ['required', 'max:50'],
            'email' => ['required', 'max:50', 'email', Rule::unique('users')->ignore($user->id)],
            'password' => ['nullable'],
            'owner' => ['required', 'boolean'],
        ]);
        $user->update(Request::only('first_name', 'last_name', 'email', 'owner'));
        if (Request::get('password')) {
            $user->update(['password' => Request::get('password')]);
        }
        return Redirect::back()->with('success', 'User updated.');
    }
}