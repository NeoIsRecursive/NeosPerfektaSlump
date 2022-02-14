<div>
    @if(count($lists) < 1)
        <p class="mb-4 font-bold">No groups found, add a new one in the <a href="/manager" class="hover:underline text-sky-400">Manager</a>?</p>
    @else
    <p class="mb-4 font-bold">your groups:</p>
    <div class="flex gap-4 flex-wrap">
        @foreach($lists as $list)
            <button class="button" onclick="getGroup({{ $list->id }})">
                {{ $list->group_name }}
            </button>
        @endforeach
    </div>
    @endif
</div>
