<div class="drop-shadow-lg bg-white p-4 rounded">

    <h2 class="font-bold text-lg mb-4">Upload new group</h2>

    @include('components.error')

    <form action="manager/add-group" method="post" enctype="multipart/form-data" class="flex flex-col gap-2">

        @csrf
            <label for="file" class="form-label">Choose list to upload:</label>
                <input type="file" id="file" name="list" accept="csv" class="form-control input">
            <label for="name">Name the group:</label>
        <input type="text" name="name" id="name" class="input">
        <button class="bg-gray-800 text-white w-max mx-auto px-12 py-2 rounded-lg drop-shadow hover:drop-shadow-lg hover:bg-fuchsia-500 transition">upload</button>
    </form>

    <script src="{{ asset('scripts/tw-elements/index.min.js') }}"></script>
    <script>

        document.getElementById('file').addEventListener('change', (event) => {
            if(event.target.files[0] == undefined)
                return document.getElementById('name').placeholder = '';
            document.getElementById('name').placeholder = event.target.files[0].name;
        })

    </script>
</div>
