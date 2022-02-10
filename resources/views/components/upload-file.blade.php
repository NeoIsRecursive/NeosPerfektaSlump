<div>
    @if ($errors->any())
    <p>
        <u>{{ $errors->first() }}</u>
    </p>
    @endif

    <form action="addGroup" method="post" enctype="multipart/form-data" class="flex flex-col">

        @csrf
            <label for="file" class="form-label">Choose list to upload:</label>
                <input type="file" id="file" name="list" accept="csv" class="form-control input ">
            <label for="name">Name the group:</label>
        <input type="text" name="name" id="name" class="input">
        <button>upload</button>
    </form>

    <script src="https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js"></script>
    <script>

        document.getElementById('file').addEventListener('change', (event) => {
            if(event.target.files[0] == undefined)
                return document.getElementById('name').placeholder = '';
            document.getElementById('name').placeholder = event.target.files[0].name;
        })

    </script>
</div>
