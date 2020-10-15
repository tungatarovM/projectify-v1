<?php


namespace App\Helpers\User;


use Illuminate\Support\Str;

class Helper
{
    public function generateRandomPassword(): string
    {
        return Str::random(8);
    }
}
