<?php
    header('Content-Type: text/html; charset=utf-8');
    header('Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    header('Content-Disposition: attachment;filename="cargos_report.xls"');
    header('Cache-Control: max-age=0');
    include('../../vendor/autoload.php');
    use PhpOffice\PhpSpreadsheet\Spreadsheet;
    $postData = json_decode(file_get_contents('php://input'), true);

    $spreadsheet = new Spreadsheet();
    $sheet =  $spreadsheet -> getActiveSheet();

    $sheet->setCellValue('A1', 'ID');
    $sheet->setCellValue('B1', 'Descrição');
    $sheet->setCellValue('C1', 'Status');


    if (is_array($postData)) {
        var_dump($postData);
        foreach ($postData['data'] as $key => $row) {
            $sheet->setCellValue('A' . ($key + 2), is_numeric($row['id']) ? $row['id'] : '');
            $sheet->setCellValue('B' . ($key + 2), isset($row['description']) ? $row['description'] : '');
            $sheet->setCellValue('C' . ($key + 2), isset($row['status_cargo']) ? $row['status_cargo'] : '');
        }

        $writer = new PhpOffice\PhpSpreadsheet\Writer\Xls($spreadsheet);
        $writer->save('php://output');
    } else {
        echo "Dados inválidos recebidos.";
    }

    
?>