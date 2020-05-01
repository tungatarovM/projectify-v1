<?php

namespace App\Entities;

use Carbon\Carbon;
use Illuminate\Auth\Notifications\VerifyEmail;
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
        'firstname', 'lastname', 'email', 'password', 'role', 'avatar', 'email_verified_at',
    ];

    protected $hidden = [
        'password', 'remember_token',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    protected $attributes = [
        'avatar' => self::DEFAULT_AVATAR,
    ];

    public static function register($firstname, $lastname, $email, $password): self
    {
        return self::create([
            'firstname' => $firstname,
            'lastname' => $lastname,
            'email' => $email,
            'password' => PasswordHash::make($password),
            'role' => self::ROLE_MANAGER,
        ]);
    }

    public static function add($firstname, $lastname, $email, $password, $role = 'developer'): self
    {
        return self::create([
            'firstname' => $firstname,
            'lastname' => $lastname,
            'email' => $email,
            'password' => PasswordHash::make($password),
            'role' => $role,
            'email_verified_at' => Carbon::now(),
        ]);
    }

    public function managingProjects()
    {
        if ($this->role !== self::ROLE_MANAGER) {
            return null;
        }
        return $this->hasMany(Project::class, 'manager_id');
    }

    public function projects()
    {
        return $this->belongsToMany(Project::class, 'user_project');
    }

    public function createProject($name, $description)
    {
        return $this->managingProjects()->create([
            'name' => $name,
            'description' => $description,
        ]);
    }

    public function getFullName(): string
    {
        return $this->lastname . ' ' . $this->firstname;
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
