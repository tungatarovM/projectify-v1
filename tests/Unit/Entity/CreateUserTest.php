<?php

namespace Tests\Unit\Entity;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use App\Entities\User;

class CreateUserTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function manager_can_register(): void
    {
        $user = User::register(
            $firstName = 'first',
            $lastName = 'last',
            $email = 'email@gmail.com',
            $password = 'password1'
        );

        self::assertNotEmpty($user);

        self::assertEquals($firstName, $user->firstname);
        self::assertEquals($lastName, $user->lastname);
        self::assertEquals($email, $user->email);

        self::assertEmpty($user->email_verified_at);
        self::assertNotEquals($password, $user->password);

        self::assertTrue($user->isManager());
        self::assertFalse($user->isAdmin());
        self::assertFalse($user->isDeveloper());
        self::assertFalse($user->isSubmitter());
    }

    /** @test */
    public function developer_can_be_created(): void
    {
        $submitter = User::add(
            $first = 'first',
            $last = 'last',
            $email = 'email',
            $password = 'password1',
            $role = User::ROLE_SUBMITTER
        );

        self::assertEquals($first, $submitter->firstname);
        self::assertEquals($last, $submitter->lastname);
        self::assertEquals($email, $submitter->email);
        self::assertNotEquals($password, $submitter->password);

        self::assertEmpty($submitter->email_verified_at);

        self::assertTrue($submitter->isSubmitter());
        self::assertFalse($submitter->isAdmin());
        self::assertFalse($submitter->isManager());
        self::assertFalse($submitter->isDeveloper());
    }

    /** @test */
    public function submitter_can_be_created(): void
    {
        $developer = User::add(
            $first = 'first',
            $last = 'last',
            $email = 'email',
            $password = 'password1',
            $role = USER::ROLE_DEVELOPER
        );

        self::assertEquals($first, $developer->firstname);
        self::assertEquals($last, $developer->lastname);
        self::assertEquals($email, $developer->email);
        self::assertNotEquals($password, $developer->password);

        self::assertEmpty($developer->email_verified_at);

        self::assertTrue($developer->isDeveloper());
        self::assertFalse($developer->isAdmin());
        self::assertFalse($developer->isManager());
        self::assertFalse($developer->isSubmitter());
    }
}
