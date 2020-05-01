<?php


namespace App\Services\User;


use App\Services\User\Repository\UserRepositoryInterface;

class UserService
{
    public function __construct(UserRepositoryInterface $repository)
    {
        $this->users = $repository;
    }

    public function getColleagues($userId)
    {
        return $this->users->getColleagues($userId);
    }
}
