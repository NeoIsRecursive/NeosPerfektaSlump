    @include('components.head')
    <div class="drop-shadow w-full h-1 bg-white"></div>
    <div class="p-2 w-full bg-white grid grid-cols-1 lg:grid-cols-3 gap-4 mt-2">

        <div class="flex flex-col py-4 px-10 gap-2 bg-white drop-shadow rounded-lg">
            @auth
            @include('components.user-files-app')
            @endauth
            <label for="file" class="form-label" id="file2" tabindex="0">choose CSV file!</label>
            <input type="file" id="file" name="file" onchange="readCsv(this)" class="form-control input">
            <label for="addName">Add temporary name to the list:</label>
            <div class="max-w-full flex gap-2">
                <input type="text" value="" placeholder="name" id="addName" class="input w-full">
                <button class="button hover:bg-orange-400 w-fit" onclick="">Add</button>
            </div>

            {{-- <button onclick="show()" id="showbtn" class="button">Groups</button> --}}
        </div>

        <main class="bg-white drop-shadow py-4 px-10 rounded-lg">
            <div id="slumpKnapp" class="flex items-center justify-between gap-4">
                <p class="text-lg">Le random: <span id="svara" >No students yet</span></p>
                <button onclick="slump()" class="button hover:bg-green-400">Give question</button>
            </div>
            <div id="elevlista" class="card">
                <ul id="students">
                    <li>The list of your students names will end up here! :D</li>
                </ul>
            </div>
        </main>

        <div id="grupper" class="bg-white drop-shadow py-4 px-10 rounded-lg">
            <input id="amount" placeholder="number of groups" type="number" class="input">
            <button onclick="createGroups(document.getElementById('amount').value)">create groups</button>
            <button onclick="copyGroups()">copy</button>
            <a id="download">download</a>
            <div id="groups"></div>
        </div>

    </div>
    <script src="{{ asset('scripts/get/getGroup.js') }}"></script>
    <script src="{{ asset('scripts/questions.js') }}"></script>
    <script src="{{ asset('scripts/drawItems.js') }}"></script>
    <script src="{{ asset('scripts/read.js') }}"></script>
    <script src="{{ asset('scripts/groups.js') }}"></script>
    <script src="{{ asset('scripts/fileSave.js') }}"></script>
    <script src="{{ asset('scripts/tw-elements/index.min.js') }}"></script>
</body>

</html>
