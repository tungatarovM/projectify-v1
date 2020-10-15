<?php

namespace App\Events;

use App\Entities\User;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class NewMemberHasBeenCreated
{
    use Dispatchable, SerializesModels;

    public $newMember;

    public function __construct(array $newMember)
    {
        $this->newMember = $newMember;
    }
}
