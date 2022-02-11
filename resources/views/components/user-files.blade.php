<div class="drop-shadow-lg bg-white p-4 rounded">
    <h2 class="mb-4 font-bold text-lg">Manage your groups:</h2>
    <div class="flex gap-4 flex-wrap">
        @foreach($lists as $list)
        <form action="manager/groups/{{ $list->id }}/manage">
            <button class="bg-gray-200 hover:underline p-2 px-4 rounded-lg">
                {{ $list->group_name }}
            </button>
        </form>
        @endforeach
    </div>
</div>
