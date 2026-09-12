<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Repositories\EloquentSeriesRepository;
use App\Repositories\SeriesRepository;

class SeriesRepositoryProvider extends ServiceProvider
{
    public function register()
    {
        $this->app->bind(SeriesRepository::class, EloquentSeriesRepository::class);
    }
}
