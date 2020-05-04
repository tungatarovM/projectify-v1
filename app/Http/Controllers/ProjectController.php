<?php


namespace App\Http\Controllers;

use App\Entities\Project;
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

    public function store(Request $request)
    {
        $attributes = $this->validateData($request);

        $newProject = $this->service->create($attributes);

        return (new Resource($newProject))->response();
    }

    public function destroy(Project $project)
    {
        $this->service->delete($project);
    }

    private function validateData(Request $request): array
    {
        return $request->validate([
            'name' => 'required|string|max:30',
            'description' => 'required|string|max:255'
        ]);
    }

}
