<div>
    @if ($errors->any())
    <p>
        <u>{{ $errors->first() }}</u>
    </p>
    @endif

    <form action="addList" method="post" enctype="multipart/form-data" class="flex flex-col">

        @csrf
        <input type="file" name="list" accept="csv">

        <label for="name">group name</label>
        <input type="text" name="name" id="name">
        <button>upload</button>
    </form>
</div>
