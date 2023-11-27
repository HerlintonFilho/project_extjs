<?php
	include("../db.php");

    header('Content-Type: text/html; charset=utf-8');

	$info = $_POST['data'];

	$data = json_decode(stripslashes($info));

	$id = $data->id;

	$query = sprintf("DELETE FROM cargo WHERE id=%d",
		mysqli_escape_string($conexao, $id));

	$rs = mysqli_query($conexao, $query);

	echo json_encode(array(
		"success" => mysqli_connect_errno() == 0
	));
?>