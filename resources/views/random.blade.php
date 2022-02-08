<!DOCTYPE html>
<html lang="SE">

<head>
    <title>Neos perfekta slump</title>
    <link rel="stylesheet" type="text/css" href="styles/newstyle.css">
    <link rel="icon" type="image/x-icon" href="images/favicon.ico">
    <meta charset="UTF-8">
</head>

<body>
    <div class="container">
        <button onclick="changeInput()" id="changeInput">🪛</button>
        <header>
            <h1 class="button">Neos perfekta slump</h1>
            <input style="display:none;" type="file" id="file" name="file" onchange="readCsv(this)">
            <label for="file" class="slumpcont button" id="file2" tabindex="0">choose CSV file!</label>
            <input type="text" value="" placeholder="name" id="addName" class="button">
            <button onclick="show()" id="showbtn" class="button">Groups</button>
        </header>

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
            <input id="amount" placeholder="number of groups" type="number">
            <button onclick="createGroups(document.getElementById('amount').value)">create groups</button>
            <button onclick="copyGroups()">copy</button>
            <a id="download">download</a>
            <div id="groups"></div>
        </div>

    </div>
    <script src="{{ asset('scripts/questions.js') }}"></script>
    <script src="{{ asset('scripts/drawItems.js') }}"></script>
    <script src="{{ asset('scripts/read.js') }}"></script>
    <script src="{{ asset('scripts/getGroup.js') }}"></script>
    <script src="{{ asset('scripts/groups.js') }}"></script>
    <script src="{{ asset('scripts/fileSave.js') }}"></script>
</body>

</html>
