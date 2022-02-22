@include('components.head')
<div class="bg-white p-4 z-20">
    <h2 class="text-lg"><span class="font-semibold">Group manager:</span> you are currently managing "{{ $group->group_name }}"</h2>
</div>
<main class="grid grid-cols-1 lg:w-1/2 mx-auto my-4">
    <div class="flex flex-col gap-1 drop-shadow-md bg-white rounded-lg px-10 lg:px-20 mx-4 py-2">
        <h3>"{{ $group->group_name }}"</h2>
            <hr>
        @foreach($members as $member)
        <div tabindex="0" class="flex justify-between items-center group gap-12 p-2 px-4 bg-white focus:bg-slate-300 rounded focus:drop-shadow hover:bg-slate-300 hover:drop-shadow transition">
            <p> {{ $member->member_name }} </p>
            <form method="post" action="/manager/groups/{{ $group->id }}/manage/remove-member/{{ $member->id }}">
                @csrf
                @method('delete')
                <button class="text-xs p-1 invisible group-focus:visible focus:visible group-hover:visible transition-all">&#10060;</button>
            </form>
        </div>
        @endforeach
        <hr>
        <form action="/manager/groups/{{ $group->id }}/manage/add-member" method="post" class="flex flex-col gap-2 items-start">
            @csrf
            @method('patch')
            <label for="new-member-name">New member name:</label>
            @include('components.error')
            <div class="w-full flex gap-2">
                <input type="text" name="new-member-name" id="new-member-name" class="input">
                <button class="bg-gray-800 text-white px-12 py-2 rounded-lg drop-shadow hover:drop-shadow-lg hover:bg-fuchsia-500 transition">Add</button>
            </div>

        </form>


    </div>
</main>
