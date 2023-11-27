<?php
	include("../db.php");

	$start = $_REQUEST['start'];
	$limit = $_REQUEST['limit'];

	$queryString = "SELECT * FROM setor LIMIT $start,  $limit";

	$query = mysqli_query($conexao, $queryString) or die(mysqli_connect_error());

	$setores = array();
	while($setor = mysqli_fetch_assoc($query)) {
	    $setores[] = $setor;
	}

	$queryTotal = mysqli_query($conexao, 'SELECT count(*) as num FROM setor') or die(mysqli_connect_error());
	$row = mysqli_fetch_assoc($queryTotal);
	$total = $row['num'];

	//encoda para formato JSON
	echo json_encode(array(
		"success" => mysqli_connect_errno() == 0,
		"total" => $total,
		"data" => $setores
	));
?>