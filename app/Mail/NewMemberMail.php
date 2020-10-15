<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class NewMemberMail extends Mailable
{
    use Queueable, SerializesModels;

    public $login;
    public $password;
    public $role;

    public function __construct($newMember)
    {
        $this->login = $newMember['email'];
        $this->password = $newMember['password'];
        $this->role = $newMember['role'];
    }

    public function build()
    {
        return $this->markdown('mail.auth.new');
    }
}
