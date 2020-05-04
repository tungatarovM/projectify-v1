<?php

namespace App\Http\Controllers;

use App\Entities\User;
use App\Http\Resources\User as Resource;
use App\Services\Project\Service as ProjectService;
use App\Services\User\Service;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;


class ManagerController extends Controller
{
    private $service;
    private $projectService;

    public function __construct(Service $service, ProjectService $projectService)
    {
        $this->middleware(['auth', 'role.manager']);
        $this->service = $service;
        $this->projectService = $projectService;
    }

    public function index(Request $request)
    {
        return Resource::collection(
            $this->service->getAllPersonnel($request->user()->id)
        );
    }


    public function view(Request $request)
    {
        return (new Resource($request->user()))
            ->response();
    }

    public function store(Request $request)
    {
        $attributes = $this->validateData($request);
        $projectId = $request['project'];

        $user = $this->service->createUser($attributes);
        $this->projectService->assignUserTo($projectId, $user);

        return (new Resource($user));
    }

    public function change(Request $request)
    {
        $data = $request->validate([
            'role' => ['required', Rule::in([User::ROLE_DEVELOPER, User::ROLE_SUBMITTER])],
        ]);

        $personnel = $request['personnel'];
        $role = $data['role'];

        $updatedPersonnel = $this->service->changeRoleOf($personnel, $role);

        return Resource::collection($updatedPersonnel);
    }

    public function destroy(User $user)
    {
        $this->service->delete($user);
    }

    private function validateData(Request $request)
    {
        return $this->validate($request, [
            'firstname' => 'required|string|max:30',
            'lastname' => 'required|string|max:30',
            'email' => 'required|string|email|max:255|unique:users',
            'role' => ['required', Rule::in([User::ROLE_DEVELOPER, User::ROLE_SUBMITTER])],
        ]);
    }
}
