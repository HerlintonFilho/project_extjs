<?php
	include("../db.php");

	$start = $_REQUEST['start'];
	$limit = $_REQUEST['limit'];

	$queryString = "SELECT subsetor.id, subsetor.nome as subsetor_nome, setor.nome as setor_name FROM subsetor JOIN setor ON subsetor.id_setor = setor.id LIMIT $start,  $limit";

	$query = mysqli_query($conexao, $queryString) or die(mysqli_connect_error());

	$subsetores = array();
	while($subsetor = mysqli_fetch_assoc($query)) {
	    $subsetores[] = $subsetor;
	}

	$queryTotal = mysqli_query($conexao, 'SELECT count(*) as num FROM subsetor') or die(mysqli_connect_error());
	$row = mysqli_fetch_assoc($queryTotal);
	$total = $row['num'];

	//encoda para formato JSON
	echo json_encode(array(
		"success" => mysqli_connect_errno() == 0,
		"total" => $total,
		"data" => $subsetores
	));
?>