<div>
    <p class="mb-4 font-bold">your groups:</p>
    <div class="flex gap-4 flex-wrap">
        @foreach($lists as $list)
            <button class="bg-gray-200 hover:underline p-2 px-4 rounded-lg" onclick="getGroup({{ $list->id }})">
                {{ $list->group_name }}
            </button>
        @endforeach
    </div>
</div>
