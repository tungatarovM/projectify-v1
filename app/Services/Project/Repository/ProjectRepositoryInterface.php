<?php

namespace App\Services\Project\Repository;

use App\Entities\Project;

interface ProjectRepositoryInterface
{
    public function get($id): Project;
}
