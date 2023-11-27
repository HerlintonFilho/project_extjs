<?php
	include("../db.php");


	$start = $_REQUEST['start'];
	$limit = $_REQUEST['limit'];

	$queryString = "SELECT * FROM func LIMIT $start,  $limit";

	$query = mysqli_query($conexao, $queryString) or die(mysqli_connect_error());

	$funcs = array();
	while($func = mysqli_fetch_assoc($query)) {
	    $funcs[] = $func;
	}

	$queryTotal = mysqli_query($conexao, 'SELECT count(*) as num FROM func') or die(mysqli_connect_error());
	$row = mysqli_fetch_assoc($queryTotal);
	$total = $row['num'];

	//encoda para formato JSON
	echo json_encode(array(
		"success" => mysqli_connect_errno() == 0,
		"total" => $total,
		"data" => $funcs
	));
?>