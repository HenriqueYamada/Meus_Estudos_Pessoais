<?php

namespace App\Http\Controllers;

use App\Http\Controllers\EpisodesController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\SeasonsController;
use App\Http\Controllers\SeriesController;
use App\Http\Controllers\UsersController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function index() {
        return view('login.index');
    }

    public function store(Request $request) {
        if (!Auth::attempt($request->all())) {
            return redirect()->back()->withErrors(['Usuário ou senha incorretos']);
        }
    }

    public function destroy() {
        Auth::logout();
        return to_route('login');
    }
}
