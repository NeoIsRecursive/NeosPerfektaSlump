@foreach($lists as $list)
<button onclick="getGroup({{ $list['id'] }})">{{ $list['group_name'] }}</button>
@endforeach

<a href="{{route('uploadFile')}}">upload file</a>
