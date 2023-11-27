<?php
	include("../db.php");

	$info = $_POST['data'];
	$data = json_decode(stripslashes($info));

	$nome = $data->nome;
	$sobrenome = $data->sobrenome;
	$data_nasc = $data->data_nasc;
    $dataObj = DateTime::createFromFormat("d/m/Y", $data_nasc);
    $dataFormat = $dataObj->format("Y-m-d");
    $idade = $data->idade;
    $sexo = $data->sexo;
    $salario = $data->salario;
    $salarioFormat = floatval($salario);
    $telefone = $data->telefone;
    $email = $data->email;
    $cargo = $data->cargo;
    $setor = $data->setor;
    $subsetor = $data->subsetor;
    
    echo $dataFormat;

	//consulta sql
	$query = sprintf("INSERT INTO func (nome, sobrenome, data_nasc, idade, sexo, salario, telefone, email, cargo, setor, subsetor) values ('%s', '%s', '%s', '%d', '%s', '%f', '%s', '%s', '%s', '%s', '%s')",
		mysqli_real_escape_string($conexao, $nome),
		mysqli_real_escape_string($conexao, $sobrenome),
		mysqli_real_escape_string($conexao, $dataFormat),
        mysqli_real_escape_string($conexao, $idade),
        mysqli_real_escape_string($conexao, $sexo),
        mysqli_real_escape_string($conexao, $salarioFormat),
        mysqli_real_escape_string($conexao, $telefone),
        mysqli_real_escape_string($conexao, $email),
        mysqli_real_escape_string($conexao, $cargo),
        mysqli_real_escape_string($conexao, $setor),
        mysqli_real_escape_string($conexao, $subsetor));

	$rs = mysqli_query($conexao, $query);

	echo json_encode(array(
		"success" => mysqli_errno($conexao) == 0,
		"data" => array(
			"id" => mysqli_insert_id($conexao),
			"nome" => $nome,
			"sobrenome" => $sobrenome,
			"data_nasc" => $dataFormat,
            "idade" => $idade,
            "sexo" => $sexo,
            "salario" => $salarioFormat,
            "telefone" => $telefone,
            "email" => $email,
            "cargo" => $cargo,
            "setor" => $setor,
            "subsetor" => $subsetor
		)
	));
?>