@include('components.head')
<div class="bg-white p-4 drop-shadow-lg z-0">
    <h2 class="text-lg">Group manager: you are currently managing "{{ $groupName }}"</h2>
</div>
<main class="grid grid-cols-2 mt-4">
    <div class="flex flex-col gap-1 drop-shadow-md bg-white rounded-lg px-20 mx-4">
        <h3>"{{ $groupName }}"</h2>
        @foreach($members as $member)
        <div class="flex justify-between gap-12 p-2 px-4 bg-white">
            <p> {{ $member->member_name }} </p>
            <form method="get" action="/members/{{ $member->id }}/remove">
                <button class="text-xs">&#10060;</button>
            </form>
        </div>
        @endforeach
    </div>
</main>
