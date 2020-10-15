<?php

namespace App\Http\Middleware;

use Auth;
use Closure;
use Symfony\Component\HttpKernel\Exception\AccessDeniedHttpException;

class RoleSubmitter
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if (!Auth::user()->isSubmitter()) {
            throw new AccessDeniedHttpException(
                'Вам отказано в доступe'
            );
        }
        return $next($request);
    }
}
