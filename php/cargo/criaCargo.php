<?php
	include("../db.php");

	$info = $_POST['data'];

	$data = json_decode(stripslashes($info));

	$description = $data->description;
	$status_cargo = $data->status_cargo;


	$query = sprintf("INSERT INTO cargo (description, status_cargo) values ('%s', '%s')",
		mysqli_real_escape_string($conexao, $description),
		mysqli_real_escape_string($conexao, $status_cargo));

	$rs = mysqli_query($conexao, $query);

	echo json_encode(array(
		"success" => mysqli_errno($conexao) == 0,
		"data" => array(
			"id" => mysqli_insert_id($conexao),
			"description" => $description,
			"status_cargo" => $status_cargo
		)
	));
?>