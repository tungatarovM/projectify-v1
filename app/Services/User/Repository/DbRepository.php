<?php

namespace App\Services\User\Repository;

use App\Entities\User;

class DbRepository implements UserRepositoryInterface
{
    public function getColleagues($userId)
    {
        $colleagues = collect([]);

        $user = User::findOrFail($userId);
        $projects = $user->project;
        foreach ($projects as $project) {
            $colleagues = $colleagues->merge($project->team);
        }

        $ids = $colleagues->unique()->map(function ($colleague) {
            return $colleague->id;
        })->all();

        return User::whereIn('id', $ids)->get();
    }

    public function getAllPersonnel($managerId)
    {
        $personnel = collect([]);

        $manager = User::findOrFail($managerId);
        $projects = $manager->managingProjects;

        foreach ($projects as $project) {
            $team = $project->team()->get()->all();
            $personnel = $personnel->merge($team);
        }

        $ids = $personnel->unique()->sortByDesc('created_at')->map(function ($member) {
            return $member->id;
        })->all();
        return User::whereIn('id', $ids)->get();
    }
}
