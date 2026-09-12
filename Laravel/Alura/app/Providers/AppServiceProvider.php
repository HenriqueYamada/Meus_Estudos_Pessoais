<?php

namespace App\Providers;

use App\Repositories\SeriesRepository;
use App\Repositories\EloquentSeriesRepository;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        // Esta linha diz ao Laravel: quando pedirem a Interface, entregue a classe Eloquent
        $this->app->bind(SeriesRepository::class, EloquentSeriesRepository::class);
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}