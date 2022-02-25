<!DOCTYPE html>
<html lang="SE">

<head>
    <title>Neos perfekta slump</title>
    {{-- <link rel="stylesheet" type="text/css" href="{{ asset('css/style.css') }}"> --}}
    {{-- <link rel="icon" type="image/x-icon" href="{{ asset('images/favicon.ico') }}"> --}}
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta charset="UTF-8">
    @client
    @if(request()->is('slump'))
    @vite
    @else
    @tag('css')
    @endif
</head>

<body>
    <nav class="w-full bg-white z-10 flex md:flex-row flex-col md:items-center relative justify-between pt-1 px-4">
        <div class="flex justify-between items-center">
            <h1 class="p-2 text-2xl font-mono font-bold">Neos perfekta slump</h1>
            <button id="navopen" class="flex flex-col gap-1 md:hidden z-100 w-10 transition">
                <div class="w-full h-2 bg-black rounded-md transition"></div>
                <div class="w-full h-2 bg-black rounded-md transition"></div>
                <div class="w-full h-2 bg-black rounded-md transition"></div>
            </button>
        </div>
        <div id="menu" class="absolute z-100 flex md:flex-row flex-col gap-4 p-2 text-center -left-full md:left-0 md:static top-full w-screen md:w-fit bg-white transition-all" >
            <a href="/slump" class="text-lg p-2 px-6 bg-white rounded-lg {{ (request()->is('slump*')) ? 'drop-shadow-md' : '' }} hover:drop-shadow-lg hover:bg-gray-800 hover:text-white focus:bg-gray-800 focus:text-white focus:outline-none transition-all">Slump</a>
            @auth
            <a href="/manager" class="text-lg p-2 px-6 bg-white rounded-lg {{ (request()->is('manager*')) ? 'drop-shadow-md' : '' }} hover:drop-shadow-lg hover:bg-gray-800 hover:text-white focus:bg-gray-800 focus:text-white focus:outline-none transition-all">Manager</a>
            <a href="/logout" class="text-lg p-2 px-6 bg-white rounded-lg hover:drop-shadow-lg hover:bg-red-500 hover:text-white focus:bg-red-500 focus:text-white focus:outline-none transition-all">Log out</a>
            @else
            <a href="/login" class="text-lg p-2 px-6 bg-white rounded-lg hover:drop-shadow-lg hover:bg-green-500 hover:text-white focus:bg-green-500 focus:text-white focus:outline-none transition-all">Log in</a>
            @endauth
        </div>
        <script>
            document.getElementById('navopen').addEventListener('click', (x) => {
                const node = document.getElementById('menu');
                node.classList.toggle('-left-full');
                node.classList.toggle('left-0');

                x.currentTarget.querySelector('div:first-child').classList.toggle('rotate-45')
                x.currentTarget.querySelector('div:first-child').classList.toggle('translate-y-3')
                x.currentTarget.querySelector('div:first-child').classList.toggle('bg-red-500')

                x.currentTarget.querySelector('div:nth-of-type(2)').classList.toggle('w-0')
                // x.currentTarget.querySelector('div:nth-of-type(2)').classList.toggle('opacity-0')

                x.currentTarget.querySelector('div:last-child').classList.toggle('-rotate-45')
                x.currentTarget.querySelector('div:last-child').classList.toggle('-translate-y-3')
                x.currentTarget.querySelector('div:last-child').classList.toggle('bg-red-500')

            });
        </script>
    </nav>
