@include('components.head')

<div class="absolute h-full max-h-screen w-full flex justify-center items-center top-0">
    <form action="/register" method="post" class="flex flex-col gap-4 w-full lg:w-1/4 max-w-screen px-8 py-4 drop-shadow-md bg-white rounded-lg mt-4 mx-auto">
        @csrf

        <h2 class="text-center text-lg">Welcome, here you can register</h2>

        @if ($errors->any())
        <div class="bg-red-400 px-4 py-2 rounded">
            <p class="text-center">{{ $errors->first() }}</p>
        </div>
        @endif
        <div class="flex flex-col gap-2">
            <label for="email">Name:</label>
            <input type="text" name="name" id="name" class="input">
        </div>
        <div class="flex flex-col gap-2">
            <label for="email">E-mail:</label>
            <input type="text" name="email" id="email" class="input">
        </div>
        <div class="flex flex-col gap-2">
            <label for="password">Password:</label>
            <input type="password" name="password" id="password" class="input">
        </div>
        <div class="flex flex-col gap-2">
            <label for="password">Confirm Password:</label>
            <input type="password" name="password_confirmation" id="password_confirmation" class="input">
        </div>

        <button class="bg-gray-800 text-white w-max mx-auto px-12 py-2 rounded-lg drop-shadow hover:drop-shadow-lg hover:bg-fuchsia-500 transition">Register</button>
    </form>
</div>
