    @include('components.head')

    <div class="p-2 w-full bg-white grid grid-cols-3">

        <div>
            @if(auth())
            @include('components.user-files-app')
            @else
            <button onclick="changeInput()" id="changeInput">🪛</button>
            <input style="display:none;" type="file" id="file" name="file" onchange="readCsv(this)">
            <label for="file" class="slumpcont button" id="file2" tabindex="0">choose CSV file!</label>
            @endif
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
</body>

</html>
