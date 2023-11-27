<?php

	include("../db.php");

	$info = $_POST['data'];

	$data = json_decode(stripslashes($info));

	var_dump($data);

	$subsetor_nome = $data->subsetor_nome;
	$setor_name = $data->setor_name;
    $id_setor = mysqli_query($conexao, "SELECT id FROM setor WHERE nome = '$setor_name'");
	$row = mysqli_fetch_assoc($id_setor);
	$idsetor = $row['id'];
	var_dump($id_setor);
	var_dump($idsetor);


	$query = sprintf("INSERT INTO subsetor (nome, id_setor) values ('%s', '%d')",
		mysqli_real_escape_string($conexao, $subsetor_nome),
		mysqli_real_escape_string($conexao, $idsetor));

	$rs = mysqli_query($conexao, $query);

	echo json_encode(array(
		"success" => mysqli_errno($conexao) == 0,
		"data" => array(
			"id" => mysqli_insert_id($conexao),
			"nome" => $subsetor_nome,
			"id_setor" => $idsetor
		)
	));
?>