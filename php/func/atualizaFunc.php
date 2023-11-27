<?php
	//chama o arquivo de conexão com o bd
	include("../db.php");

	$info = $_POST['data'];

	$data = json_decode(stripslashes($info));

	$nome = $data->nome;
	$sobrenome = $data->sobrenome;
	$data_nasc = $data->data_nasc;
    $idade = $data->idade;
    $sexo = $data->sexo;
    $salario = $data->salario;
    $salarioFormat = floatval($salario);
    $telefone = $data->telefone;
    $email = $data->email;
    $cargo = $data->cargo;
    $setor = $data->setor;
    $subsetor = $data->subsetor;


	$id = $data->id;


    var_dump($cargo);
	//consulta sql
	$query = sprintf("UPDATE func SET nome = '%s', sobrenome = '%s', data_nasc = '%s', idade = '%d', salario = '%f', telefone = '%s', email = '%s', cargo = '%s', setor = '%s', subsetor = '%s' WHERE id=%d",
        mysqli_real_escape_string($conexao, $nome),
        mysqli_real_escape_string($conexao, $sobrenome),
        mysqli_real_escape_string($conexao, $data_nasc),
        mysqli_real_escape_string($conexao, $idade),
        mysqli_real_escape_string($conexao, $sexo),
        mysqli_real_escape_string($conexao, $salarioFormat),
        mysqli_real_escape_string($conexao, $telefone),
        mysqli_real_escape_string($conexao, $email),
        mysqli_real_escape_string($conexao, $cargo),
        mysqli_real_escape_string($conexao, $setor),
        mysqli_real_escape_string($conexao, $subsetor),
		mysqli_real_escape_string($conexao, $id));

	$rs = mysqli_query($conexao ,$query);

	echo json_encode(array(
		"success" => mysqli_errno($conexao) == 0,
		"funcs" => array(
			"id" => $id,
			"nome" => $nome,
			"sobrenome" => $sobrenome,
			"data_nasc" => $data_nasc,
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