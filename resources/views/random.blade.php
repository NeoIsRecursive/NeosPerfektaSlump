    @include('components.head')
    <div class="drop-shadow w-full h-1 bg-white"></div>
    <div class="p-2 w-full bg-white grid grid-cols-1 lg:grid-cols-3">

        <div class="flex flex-col mx-10 gap-2">
            @auth
            @include('components.user-files-app')
            @endauth
            <label for="file" class="form-label" id="file2" tabindex="0">choose CSV file!</label>
            <input type="file" id="file" name="file" onchange="readCsv(this)" class="form-control input">
            <label for="addName">Add temporary name to the list:</label>
            <input type="text" value="" placeholder="name" id="addName" class="input">
            {{-- <button onclick="show()" id="showbtn" class="button">Groups</button> --}}
        </div>

        <main class="cont" id="container">
            <div id="slumpKnapp" class="card">
                <button onclick="slump()">Give question</button>
                <p id="svara">No students yet</p>
            </div>
            <div id="elevlista" class="card">
                <ul id="students">
                    <li>The list of your students names will end up here! :D</li>
                </ul>
            </div>
        </main>

        <div id="grupper" class="card">
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
