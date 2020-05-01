<?php

namespace App\Http\Controllers;

use App\Repositories\User\DbRepository;
use App\Services\User\UserService;
use Illuminate\Http\Request;

class UserController extends Controller
{
    private $service;

    public function __construct(UserService $service)
    {
        $this->middleware('auth');
        $this->service = $service;
    }

    public function index(Request $request)
    {
        $user = $request->user();
        return $this->service->getColleagues($user->id);
    }
}
