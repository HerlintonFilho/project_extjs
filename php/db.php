<?php
 
$servidor = "127.0.0.1";

$user = "root";

$senha = "";

$db = "project";

$conexao = mysqli_connect($servidor,$user,$senha,$db) or die (mysqli_connect_error());
$conexao -> set_charset('utf8');
?>