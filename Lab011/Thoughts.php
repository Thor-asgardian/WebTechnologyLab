<!DOCTYPE html>
<html>
<head>
    <title>Thoughts</title>
    <style>
        body { background: #eee; }
        label { display: block; font-size: 25px; }
        button { padding: 10px; }
    </style>
</head>
<body>
    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        file_put_contents("info.txt", $_POST["info"]);
    }
    ?>
    <form method="POST">
        <label>Information:</label>
        <textarea rows="20" cols="80" name="info"></textarea>
        <div>
            <button type="submit">Submit</button>
            <button type="reset">Reset</button>
        </div>
        <div class="saved">
            <h1>Saved Information</h1>
            <?php
            if (file_exists('info.txt')) {
                echo nl2br(file_get_contents('info.txt'));
            }
            ?>
        </div>
    </form>
</body>
</html>
