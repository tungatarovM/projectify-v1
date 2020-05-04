<?php

namespace App\Services\User;

use App\Entities\User;
use App\Events\NewMemberHasBeenCreated;
use App\Services\User\Repository\UserRepositoryInterface;
use App\Helpers\User\Helper;
use Illuminate\Contracts\Events\Dispatcher;

class Service
{
    private $users;
    private $dispatcher;
    private $helper;

    public function __construct(
        UserRepositoryInterface $repository,
        Dispatcher $dispatcher,
        Helper $helper
    )
    {
        $this->users = $repository;
        $this->dispatcher = $dispatcher;
        $this->helper = $helper;
    }

    public function createUser($attributes): User
    {
        $user = User::add(
            $attributes['firstname'],
            $attributes['lastname'],
            $attributes['email'],
            $password = $this->helper->generateRandomPassword(),
            $attributes['role']
        );

        $attributes['password'] = $password;
//        $this->dispatcher->dispatch(new NewMemberHasBeenCreated($attributes));

        return $user;
    }

    public function changeRoleOf($personnel, $role)
    {
        return collect($personnel)->map(function ($id) use ($role) {
            $member = User::findOrFail($id);
            $member->changeRole($role);
            return $member;
        });
    }

    public function delete(User $user)
    {
        return $user->delete();
    }

    /**
     * Возвращает участников из всех проектов созданных менеджером
     * @param $managerId
     * @return mixed
     */
    public function getAllPersonnel($managerId)
    {
        return $this->users->getAllPersonnel($managerId);
    }

    /**
     * Возвращает коллег пользователя для роли Разработчик, Тестировщик
     * @param $userId
     * @return mixed
     */
    public function getColleagues($userId)
    {
        return $this->users->getColleagues($userId);
    }
}
