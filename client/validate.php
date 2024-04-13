<?php
session_start();

$user = $_POST['user'];
$password = $_POST['password'];

if ($user === "admin" && $password === "admin") {
    $_SESSION['user']="admin";
    echo 'true';
    exit;
} else {
    echo "pass";
}

?>