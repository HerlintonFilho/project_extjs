<?php
	include("../db.php");

	$info = $_POST['data'];

	$data = json_decode(stripslashes($info));

	$nome = $data->nome;
	$abreviacao = $data->abreviacao;


	$query = sprintf("INSERT INTO setor (nome, abreviacao) values ('%s', '%s')",
		mysqli_real_escape_string($conexao, $nome),
		mysqli_real_escape_string($conexao, $abreviacao));

	$rs = mysqli_query($conexao, $query);

	echo json_encode(array(
		"success" => mysqli_errno($conexao) == 0,
		"data" => array(
			"id" => mysqli_insert_id($conexao),
			"nome" => $nome,
			"abreviacao" => $abreviacao
		)
	));
?>