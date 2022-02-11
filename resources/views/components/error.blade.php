@if ($errors->any())
    <div class="bg-red-400 px-4 py-2 rounded">
        <p class="text-center">{{ $errors->first() }}</p>
    </div>
@endif
