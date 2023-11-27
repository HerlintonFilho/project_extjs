<?php
 
//nome do servidor (127.0.0.1)
$servidor = "127.0.0.1";
 
//usuário do banco de dados
$user = "root";
 
//senha do banco de dados
$senha = "";
 
//nome da base de dados
$db = "project";
 
//executa a conexão com o banco, caso contrário mostra o erro ocorrido
$conexao = mysqli_connect($servidor,$user,$senha,$db) or die (mysqli_connect_error());
$conexao -> set_charset('utf8');
 
//seleciona a base de dados daquela conexão, caso contrário mostra o erro ocorrido
//$banco = mysqli_select_db($db, $conexao) or die(mysql_error());
 
?>