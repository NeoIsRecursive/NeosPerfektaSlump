<!DOCTYPE html>
<html lang="SE">

<head>
    <title>Neos perfekta slump</title>
    <link rel="stylesheet" type="text/css" href="{{ asset('css/style.css') }}">
    <link rel="icon" type="image/x-icon" href="{{ asset('images/favicon.ico') }}">
    <meta charset="UTF-8">
</head>

<body>
    <nav class="w-full bg-white z-10 flex items-center justify-between relative drop-shadow">
        <h1 class="p-2 text-xl font-mono">Neos perfekta slump</h1>
        <div class="flex gap-4 p-2">
            <a href="{{ route('app') }}" class="p-2">App</a>
            @auth
            <a href="dashboard" class="p-2">Manage</a>
            <a href="logout" class="p-2">Log out</a>
            @else
            <a href="login" class="p-2">Log in</a>
            @endauth
        </div>
    </nav>
