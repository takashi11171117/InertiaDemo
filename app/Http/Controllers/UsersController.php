<?php

namespace App\Http\Controllers;

use App\User;
use Inertia\Inertia;
use Illuminate\Support\Facades\Request;

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
}