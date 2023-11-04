<?php
$connect = mysqli_connect('localhost', 'root', '', 'hackout');
if (!empty($_POST['save'])) {
    $UserName = $_POST['un'];
    $password = $_POST['pw'];
    $query = "select * from registration where UserName = '$UserName' and password = '$password'";
    $result = mysqli_query($connect, $query);
    $count = mysqli_num_rows($result);
    if ($count > 0) {
        echo "Success";
    } else {
        echo "Failed";
    }
}
