<?php


namespace App\Services\Project;

use App\Services\Project\Repository\ProjectRepositoryInterface;
use App\Entities\Project;
use Illuminate\Support\Facades\Auth;

class Service
{
    private $projects;

    public function __construct(ProjectRepositoryInterface $repository)
    {
        $this->projects = $repository;
    }

    public function create($attributes): Project
    {
        $user = Auth::user();
        return $user->createProject($attributes['name'], $attributes['description']);
    }

    public function delete(Project $project): void
    {
        $project->delete();
    }

    public function assignUserTo($projectId, $user): void
    {
        $project = $this->projects->get($projectId);

        $project->addMembers($user);
    }
}
