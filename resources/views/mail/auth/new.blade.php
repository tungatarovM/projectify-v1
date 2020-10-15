@component('mail::message')

# Добро пожаловать в {{ config('app.name') }}!
Ваша роль {{ $role }}
Ваш логин: {{ $login }}
Ваш пароль: {{ $password }}

## Просим вас, поменять пароль сразу после входа!

@component('mail::button', ['url' => 'http://localhost:8000/login'])
Войти
@endcomponent

Спасибо,<br>
{{ config('app.name') }}
@endcomponent
