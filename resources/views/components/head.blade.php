<!DOCTYPE html>
<html lang="SE">

<head>
    <title>Neos perfekta slump</title>
    <link rel="stylesheet" type="text/css" href="{{ asset('css/style.css') }}">
    <link rel="icon" type="image/x-icon" href="{{ asset('images/favicon.ico') }}">
    <meta charset="UTF-8">
</head>

<body>
    <nav class="w-full bg-white z-10 flex items-center justify-between relative pt-1 px-4">
        <h1 class="p-2 text-xl font-mono">Neos perfekta slump</h1>
        <div class="flex gap-4 p-2">
            <a href="{{ route('app') }}" class="text-lg p-2 px-6 bg-white rounded-lg {{ (request()->is('app*')) ? 'drop-shadow-md' : '' }} hover:drop-shadow-lg hover:bg-gray-800 hover:text-white focus:bg-gray-800 focus:text-white focus:outline-none transition-all">Das slump</a>
            @auth
            <a href="/manager" class="text-lg p-2 px-6 bg-white rounded-lg {{ (request()->is('manager*')) ? 'drop-shadow-md' : '' }} hover:drop-shadow-lg hover:bg-gray-800 hover:text-white focus:bg-gray-800 focus:text-white focus:outline-none transition-all">Manager</a>
            <a href="/logout" class="text-lg p-2 px-6 bg-white rounded-lg hover:drop-shadow-lg hover:bg-red-500 hover:text-white focus:bg-red-500 focus:text-white focus:outline-none transition-all">Log out</a>
            @else
            <a href="/login" class="text-lg p-2 px-6 bg-white rounded-lg hover:drop-shadow-lg hover:bg-green-500 hover:text-white focus:bg-green-500 focus:text-white focus:outline-none transition-all">Log in</a>
            @endauth
        </div>
    </nav>
