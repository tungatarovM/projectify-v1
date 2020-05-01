<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    protected $fillable = ['name', 'description'];

    protected $attributes = [];

    public function manager()
    {
        return $this->belongsTo(User::class, 'manager_id');
    }

    public function team()
    {
        return $this->belongsToMany(User::class, 'user_project');
    }

    public function addMembers($users)
    {
        return $this->team()->syncWithoutDetaching($users);
    }
}
