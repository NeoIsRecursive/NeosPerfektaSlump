@include('components.head')
<div class="bg-white p-4">
    <h2 class="text-lg font-semibold">Group manager/</h2>
    @if (session()->get('deleted') !== null)
        <p class="bg-green-400 px-4 py-2 rounded w-fit">{{session()->get('deleted')}}</p>
    @endif
</div>
<main class="grid grid-cols-1 lg:grid-cols-2 gap-4 bg-white p-4 z-0">
    @include('components.user-files')
    @include('components.upload-file')
</main>
