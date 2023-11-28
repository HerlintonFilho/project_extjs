<?php
	//chama o arquivo de conexão com o bd
	include("../db.php");

	$info = $_POST['data'];
    header('Content-Type: text/html; charset=utf-8');

	$data = json_decode(stripslashes($info));

	$nome = $data->nome;
	$abreviacao = $data->abreviacao;

	$id = $data->id;

	//consulta sql
	$query = sprintf("UPDATE setor SET nome = '%s', abreviacao = '%s' WHERE id=%d",
        mysqli_real_escape_string($conexao, $nome),
        mysqli_real_escape_string($conexao, $abreviacao),
        $id);

	$rs = mysqli_query($conexao ,$query);

	echo json_encode(array(
		"success" => mysqli_errno($conexao) == 0,
		"funcs" => array(
			"id" => $id,
			"nome" => $nome,
			"abreviacao" => $abreviacao
		)
	));
?>