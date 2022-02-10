<div class="drop-shadow-lg bg-white p-4 rounded">

    <h2 class="font-bold text-lg mb-4">Upload new group</h2>

    @if ($errors->any())
    <div class="bg-red-400 px-4 py-2 rounded">
        <p class="text-center">{{ $errors->first() }}</p>
    </div>
    @endif

    <form action="addGroup" method="post" enctype="multipart/form-data" class="flex flex-col">

        @csrf
            <label for="file" class="form-label">Choose list to upload:</label>
                <input type="file" id="file" name="list" accept="csv" class="form-control input">
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
