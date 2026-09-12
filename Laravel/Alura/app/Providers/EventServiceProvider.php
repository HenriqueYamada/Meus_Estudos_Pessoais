<?php

namespace App\Providers;

use App\Events\SeriesCreated as SeriesCreatedEvent;
use App\Listeners\EmailUsersAboutSeriesCreated;
use App\Listeners\LogSeriesCreated;
use App\Repositories\SeriesRepository;
use App\Repositories\EloquentSeriesRepository;
use Illuminate\Auth\Listeners\SendEmailVerificationNotification;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;

class EventServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */

    protected $listen = [
        Registered::class => [
            SendEmailVerificationNotification::class,
        ],

        SeriesCreatedEvent::class => [
            EmailUsersAboutSeriesCreated::class,
            LogSeriesCreated::class,
        ],
    ];
}
