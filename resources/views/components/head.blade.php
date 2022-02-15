<!DOCTYPE html>
<html lang="SE">

<head>
    <title>Neos perfekta slump</title>
    <link rel="stylesheet" type="text/css" href="{{ asset('css/style.css') }}">
    <link rel="icon" type="image/x-icon" href="{{ asset('images/favicon.ico') }}">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta charset="UTF-8">
</head>

<body>
    <nav class="w-full bg-white z-10 flex md:flex-row flex-col md:items-center justify-between relative pt-1 px-4">
        <div class="flex justify-between items-center">
            <h1 class="p-2 text-xl font-mono">Neos perfekta slump</h1>
            <button id="navopen" class="button md:hidden z-100">=</button>
        </div>
        <div class="hidden z-0 md:flex md:flex-row flex-col gap-4 p-2 text-center absolute top-12 left-0 h-screen w-screen md:h-fit md:w-fit bg-white md:static" >
            <a href="/slump" class="text-lg p-2 px-6 bg-white rounded-lg {{ (request()->is('slump*')) ? 'drop-shadow-md' : '' }} hover:drop-shadow-lg hover:bg-gray-800 hover:text-white focus:bg-gray-800 focus:text-white focus:outline-none transition-all">Slump</a>
            @auth
            <a href="/manager" class="text-lg p-2 px-6 bg-white rounded-lg {{ (request()->is('manager*')) ? 'drop-shadow-md' : '' }} hover:drop-shadow-lg hover:bg-gray-800 hover:text-white focus:bg-gray-800 focus:text-white focus:outline-none transition-all">Manager</a>
            <a href="/logout" class="text-lg p-2 px-6 bg-white rounded-lg hover:drop-shadow-lg hover:bg-red-500 hover:text-white focus:bg-red-500 focus:text-white focus:outline-none transition-all">Log out</a>
            @else
            <a href="/login" class="text-lg p-2 px-6 bg-white rounded-lg hover:drop-shadow-lg hover:bg-green-500 hover:text-white focus:bg-green-500 focus:text-white focus:outline-none transition-all">Log in</a>
            @endauth
        </div>
        <script>
            document.getElementById('navopen').addEventListener('click', () => {
                const node = document.querySelector('nav div:last-of-type');
                node.classList.toggle('flex');
                node.classList.toggle('hidden');
            });
        </script>
    </nav>
