<div class="drop-shadow-lg bg-white p-4 rounded">
    <h2 class="mb-4 font-bold text-lg">Manage your groups:</h2>
    <div class="flex gap-4 flex-wrap">
        @if (count($lists) < 1)
            <p>no groups found, add a new one!</p>
        @endif
        @foreach($lists as $list)
        <form action="manager/groups/{{ $list->id }}/manage" style="">
            <button class="button hover:bg-green-400 focus:bg-green-400" >
                {{ $list->group_name }}
            </button>
        </form>
        @endforeach
    </div>
</div>
