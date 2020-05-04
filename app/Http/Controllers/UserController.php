<?php

namespace App\Http\Controllers;

use App\Services\User\Service;
use App\Http\Resources\User as Resource;
use Illuminate\Http\Request;

class UserController extends Controller
{
    private $service;

    public function __construct(Service $service)
    {
        $this->middleware('auth');
        $this->service = $service;
    }

    public function index(Request $request)
    {
        $user = $request->user();
        return $this->service->getColleagues($user->id);
    }

    public function current(Request $request)
    {
        return (new Resource($request->user()))->response();
    }
}
