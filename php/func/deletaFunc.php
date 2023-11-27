<?php
	include("../db.php");

	$info = $_POST['data'];

	$data = json_decode(stripslashes($info));

	$id = $data->id;

	$query = sprintf("DELETE FROM func WHERE id=%d",
		mysqli_escape_string($conexao, $id));

	$rs = mysqli_query($conexao, $query);

	echo json_encode(array(
		"success" => mysqli_connect_errno() == 0
	));
?>