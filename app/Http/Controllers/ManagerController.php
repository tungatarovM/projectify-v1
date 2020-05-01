<?php

namespace App\Http\Controllers;

use App\Entities\User;
use App\Http\Resources\User as Resource;
use App\Services\User\ManagerService;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;


class ManagerController extends Controller
{
    private $service;

    public function __construct(ManagerService $service)
    {
        $this->middleware(['auth', 'role.manager']);
        $this->service = $service;
    }

    public function index(Request $request)
    {
        return Resource::collection(
            $this->service->getAllPersonnel($request->user()->id)
        );
    }

    public function store(Request $request)
    {
        $attributes = $this->validateData($request);

        return $this->service->createUser($attributes);
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
