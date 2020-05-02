<?php

namespace App\Services\Project\Repository;

use App\Entities\Project;

class DbRepository implements ProjectRepositoryInterface
{
    public function get($id): Project
    {
        return Project::findOrFail($id);
    }
}
