@include('components.head')
<div class="bg-white p-4">
    <h2 class="text-lg font-semibold">Group manager:</h2>
</div>
<main class="grid grid-cols-1 lg:grid-cols-2 gap-4 bg-white p-4 z-0">
    @include('components.user-files')
    @include('components.upload-file')
</main>
