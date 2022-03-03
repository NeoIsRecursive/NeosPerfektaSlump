<div class="flex flex-col gap-2">
    @if(count($lists) < 1)
        <p class="mb-4 font-bold">No groups found, add a new one in the <a href="/manager" class="hover:underline text-sky-400">Manager</a>?</p>
    @else
    <label class="font-bold whitespace-nowrap">Your groups:</label>
    <select class="input w-full text-ellipsis">
        <option value="none">
            none
        </option>
        @foreach($lists as $list)
            <option value={{ $list->id }}>
                {{ $list->group_name }}
            </option>
        @endforeach
    </select>
    @endif
</div>
<script>
    document.querySelector("select").addEventListener("change", (x) => {
        if(x.target.value != 'none')
            return getGroup(x.target.value)
        asker.changeList([]);
    });
</script>
