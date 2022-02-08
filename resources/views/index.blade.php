@if ($errors->any())
<p>
    <u>{{ $errors->first() }}</u>
</p>
@endif

<form action="/login" method="post">
    @csrf
    <label for="email"></label>
    <input type="text" name="email" id="email">

    <label for="password"></label>
    <input type="password" name="password" id="password">

    <button>log in</button>
</form>
