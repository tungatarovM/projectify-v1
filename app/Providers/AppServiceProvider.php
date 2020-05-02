<?php

namespace App\Providers;

use App\Services\Project\Repository\ProjectRepositoryInterface;
use App\Services\Project\Repository\DbRepository as DbProjectRepository;
use App\Services\User\Repository\DbRepository;
use App\Services\User\Repository\UserRepositoryInterface;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(UserRepositoryInterface::class, DbRepository::class);
        $this->app->bind(ProjectRepositoryInterface::class, DbProjectRepository::class);
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
