<?php

namespace App\Listeners;

use App\Events\NewMemberHasBeenCreated;
use App\Mail\NewMemberMail;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;


class NotifyNewMember
{
    public function handle(NewMemberHasBeenCreated $event)
    {
        Mail::to($event->newMember['email'])
            ->send(new NewMemberMail($event->newMember));
    }
}
