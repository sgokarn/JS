<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>{{ pageTitle }}</title>
</head>
<body>
    <header>
        <nav>
            <ul>
                <li><a href="/users/">USERS</a></li>
                <li><a href="/admin/add-users">ADD USERS</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <form action = "/admin/add-users" method ="POST">
            <input type ="text" name ="username">
            <button type ="Submit">Add User</button>
        </form>
    </main>
</body>
</html>