<?php


namespace App\Http\Controllers;

use App\Services\Project\Service;
use App\Http\Resources\Project as Resource;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    private $service;
    private $userService;

    public function __construct(Service $service, Service $userService)
    {
        $this->service = $service;
        $this->userService = $userService;
    }

    public function index(Request $request)
    {
        return Resource::collection($request->user()->getMyProjects());
    }

}
