@include('components.head')
@isset($members)
<div class="flex flex-col gap-2 drop-shadow-md w-max bg-white px-20">
    @foreach($members as $member)
    <div class="flex justify-between gap-12 p-2 px-4 bg-white">
        <p> {{ $member->member_name }} </p>
        <form method="get" action="/members/{{ $member->id }}/remove">
            <button class="text-xs">&#10060;</button>
        </form>
    </div>
    @endforeach
</div>
@else
 <p>swag</p>
@endisset
