<?php

use App\Http\Controllers\ProductiveController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/site', [ProductiveController::class, 'index']);

//Route::get('/series', [ProductiveController::class, 'index']);
/*Route::get('/series/criar', [SeriesController::class, 'create']);

Route::get('/series', [Controller::class, 'listarSeries']);*/