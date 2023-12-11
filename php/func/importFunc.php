<?php
include("../db.php");
require '../../vendor/autoload.php';

if ($_FILES['file']['error'] == UPLOAD_ERR_OK && is_uploaded_file($_FILES['file']['tmp_name'])) {
    $inputFileName = $_FILES['file']['tmp_name'];
    
    try {
        $spreadsheet = \PhpOffice\PhpSpreadsheet\IOFactory::load($inputFileName);
        $worksheet = $spreadsheet->getActiveSheet();

        $startrow = 2;
        
        foreach ($worksheet->getRowIterator($startrow) as $row) {
            $cellIterator = $row->getCellIterator();
            $cellIterator->setIterateOnlyExistingCells(false);
            
            $data = [];
            foreach ($cellIterator as $cell) {
                $data[] = $cell->getValue();
            }
            
            $nome = mysqli_real_escape_string($conexao, $data[1]); 
            $sobrenome = mysqli_real_escape_string($conexao, $data[2]);
            $data_nasc = mysqli_real_escape_string($conexao, $data[3]);
            $dataObj = DateTime::createFromFormat("d/m/Y", $data_nasc);
            $dataFormat = $dataObj->format("Y-m-d");
            $idade = mysqli_real_escape_string($conexao, $data[4]);;
            $sexo = mysqli_real_escape_string($conexao, $data[5]);;
            $salario = mysqli_real_escape_string($conexao, $data[6]);;
            $salarioFormat = floatval($salario);
            $telefone = mysqli_real_escape_string($conexao, $data[7]);;
            $email = mysqli_real_escape_string($conexao, $data[8]);;
            $cargo = mysqli_real_escape_string($conexao, $data[9]);;
            $setor = mysqli_real_escape_string($conexao, $data[10]);;
            $subsetor = mysqli_real_escape_string($conexao, $data[11]);;

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
        }

        echo json_encode(array(
            "success" => true,
            "message" => "Dados importados com sucesso."
        ));
    } catch (Exception $e) {
        echo json_encode(array(
            "success" => false,
            "message" => "Erro ao importar dados: " . $e->getMessage()
        ));
    }
} else {
    echo json_encode(array(
        "success" => false,
        "message" => "Erro no upload do arquivo."
    ));
}
?>
