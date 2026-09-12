<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
// Importando o Controller da API com um apelido para evitar conflito
use App\Http\Controllers\Api\SeriesController as ApiSeriesController;
use App\Models\Series;
use App\Models\Episode;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware('auth:sanctum')->group(function () {
    Route::apiResource('/series', ApiSeriesController::class);
    Route::get('/series/{series}/seasons', function (Series $series) {
        return $series->seasons;
    });

    Route::get('/series/{series}/episodes', function (Series $series) {
        return $series->episodes;    
    });

    Route::patch('/episodes/{episode}', function (Episode $episode, Request $request) {
        $episode->watched = $request->watched;
        $episode->save();
        return $episode;
    });
});

Route::post('/login', function (Request $request) {
    $credentials = $request->only(['email', 'password']);
    if (Auth::attempt($credentials) === false) {
        return response()->json('Unauthorized', 401);
    }

    $user = Auth::user();
    $user->tokens()->delete();
    $token = $user->createToken('token', ['is_admin']);

    return response()->json($token->plainTextToken);
});