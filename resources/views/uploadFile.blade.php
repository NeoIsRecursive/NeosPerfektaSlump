@if ($errors->any())
<p>
    <u>{{ $errors->first() }}</u>
</p>
@endif

<form action="addList" method="post" enctype="multipart/form-data">

    @csrf

    <input type="file" name="list" accept="csv">

    <button>upload</button>
</form>
