<?php


namespace App\Services\Project;

use App\Services\Project\Repository\ProjectRepositoryInterface;

class Service
{
    private $projects;

    public function __construct(ProjectRepositoryInterface $repository)
    {
        $this->projects = $repository;
    }

    public function assignUserTo($projectId, $user): void
    {
        $project = $this->projects->get($projectId);

        $project->addMembers($user);
    }
}
