<?php
	//chama o arquivo de conexão com o bd
	include("../db.php");

	$info = $_POST['data'];
    header('Content-Type: text/html; charset=utf-8');

	$data = json_decode(stripslashes($info));

	$description = $data->description;
	$status_cargo = $data->status_cargo;

	$id = $data->id;

	//consulta sql
	$query = sprintf("UPDATE cargo SET description = '%s', status_cargo = '%s' WHERE id=%d",
        mysqli_real_escape_string($conexao, $description),
        mysqli_real_escape_string($conexao, $status_cargo),
		$id);

	$rs = mysqli_query($conexao ,$query);

	echo json_encode(array(
		"success" => mysqli_errno($conexao) == 0,
		"funcs" => array(
			"id" => $id,
			"description" => $description,
			"status_cargo" => $status_cargo
		)
	));
?>