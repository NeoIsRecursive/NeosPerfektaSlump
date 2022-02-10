<div class="flex gap-4 flex-wrap">
    @foreach($lists as $list)
    <form action="groups/{{ $list->id }}/manage">
        <button class="bg-gray-200 hover:underline p-2 px-4 rounded-lg">
            {{ $list->group_name }}
        </button>
    </form>
    @endforeach
</div>
