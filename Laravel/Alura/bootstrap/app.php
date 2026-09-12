<?php

use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__.'/../routes/web.php',
        api: __DIR__.'/../routes/api.php',
        commands: __DIR__.'/../routes/console.php',
        health: '/up',
    )
    // SE ESTIVER AQUI: remova todo o bloco ->withProviders([...])
    ->withMiddleware(function (Middleware $middleware) {
    $middleware->alias([
        // O caminho DEVE ser App\Http\Middleware e não App\Http\Controllers
        'autenticador' => \App\Http\Middleware\Autenticador::class,
    ]);
})
    ->withExceptions(function (Exceptions $exceptions) {
        //
    })->create();
