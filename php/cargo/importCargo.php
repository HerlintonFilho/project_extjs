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
            
            $description = mysqli_real_escape_string($conexao, $data[1]); 
            $status_cargo = mysqli_real_escape_string($conexao, $data[2]);

            $query = sprintf("INSERT INTO cargo (description, status_cargo) values ('%s', '%s')",
                $description,
                $status_cargo);

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
