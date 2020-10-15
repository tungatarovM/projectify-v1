<?php

namespace App\Services\User\Repository;

interface UserRepositoryInterface
{
    public function getAllPersonnel($managerId);

    public function getColleagues($userId);
}
