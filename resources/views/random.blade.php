    @include('components.head')
    <script type="module" src="{{ asset('scripts/index.js') }}"></script>
    <div class="drop-shadow w-full h-1 bg-white"></div>
    <div class="p-2 w-full bg-white grid grid-cols-1 lg:grid-cols-3 gap-4 mt-2">

        <div class="flex flex-col py-4 px-10 gap-2 bg-white drop-shadow rounded-lg">
            @auth
            @include('components.user-files-app')
            @endauth
            <label for="file" class="form-label" id="file2" tabindex="0">choose CSV file!</label>
            <input type="file" id="file" name="file" onchange="asker.readCsv(this)" class="form-control input">
            <label for="addName">Add temporary name to the list:</label>
            <div class="max-w-full flex gap-2">
                <input type="text" value="" placeholder="name" id="addName" class="input w-full">
                <button class="button hover:bg-pink-400 hover:text-white focus:bg-pink-400 focus:text-white" onclick="asker.addFromInput()">Add</button>
            </div>

            {{-- <button onclick="show()" id="showbtn" class="button">Groups</button> --}}
        </div>

        <main class="flex flex-col gap-2 bg-white drop-shadow py-4 px-10 rounded-lg">
            <div class="flex items-start justify-between gap-4">
                <div>
                    <p class="font-serif">Le random:</p>
                    <p id="svara" class="text-lg">&nbsp;</p>
                </div>
                <button onclick="asker.slump()" class="button hover:bg-green-400 focus:bg-green-400">Give question</button>
            </div>

            <hr>

            <div id="elevlista">
                <ul id="students" class="flex flex-col gap-1">
                    <li class="rounded-lg drop-shadow p-2">Your list of names will end up here! :D</li>
                </ul>
            </div>
        </main>

        <div id="grupper" class="bg-white drop-shadow py-4 px-10 rounded-lg">
            <input id="amount" placeholder="number of groups" type="number" class="input">
            <button onclick="grouper.createGroups(document.getElementById('amount').value)">create groups</button>
            <button onclick="grouper.copyGroups()">copy</button>
            <a id="download">download</a>
            <div id="groups"></div>
        </div>

    </div>

    <script src="{{ asset('scripts/tw-elements/index.min.js') }}"></script>
</body>

</html>
