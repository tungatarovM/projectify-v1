<?php

namespace App\Entities;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Hash as PasswordHash;

class User extends Authenticatable implements MustVerifyEmail
{
    use Notifiable;

    const ROLE_ADMIN = 'admin';
    const ROLE_MANAGER = 'manager';
    const ROLE_DEVELOPER = 'developer';
    const ROLE_SUBMITTER = 'submitter';

    private const DEFAULT_AVATAR = 'public/avatars/default.png';

    protected $fillable = [
        'firstname', 'lastname', 'email', 'password', 'role', 'avatar',
    ];

    protected $hidden = [
        'password', 'remember_token',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public static function register($firstname, $lastname, $email, $password): self
    {
        return self::create([
            'firstname' => $firstname,
            'lastname' => $lastname,
            'email' => $email,
            'password' => PasswordHash::make($password),
            'role' => self::ROLE_MANAGER,
            'avatar' => self::DEFAULT_AVATAR,
        ]);
    }

    public static function add($firstname, $lastname, $email, $password, $role): self
    {
        return self::create([
            'firstname' => $firstname,
            'lastname' => $lastname,
            'email' => $email,
            'password' => PasswordHash::make($password),
            'role' => $role,
            'avatar' => self::DEFAULT_AVATAR,
        ]);
    }

    public function isAdmin(): bool
    {
        return $this->role === self::ROLE_ADMIN;
    }

    public function isManager(): bool
    {
        return $this->role === self::ROLE_MANAGER;
    }

    public function isSubmitter(): bool
    {
        return $this->role === self::ROLE_SUBMITTER;
    }

    public function isDeveloper(): bool
    {
        return $this->role === self::ROLE_DEVELOPER;
    }
}
