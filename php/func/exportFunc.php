<?php
include('../../vendor/autoload.php');
use PhpOffice\PhpSpreadsheet\Spreadsheet;

$queryString = $_SERVER['QUERY_STRING'];
parse_str($queryString, $queryParams);
$dataSend = isset($queryParams['data']) ? urldecode($queryParams['data']) : '';

$postData = json_decode($dataSend, true);

$spreadsheet = new Spreadsheet();
$sheet = $spreadsheet->getActiveSheet();

$lastColumn = 'L';
$lastRow = count($postData) + 1;

$styleArray = [
    'borders' => [
        'allBorders' => [
            'borderStyle' => \PhpOffice\PhpSpreadsheet\Style\Border::BORDER_THIN,
            'color' => ['rgb' => '000000'],
        ],
    ],
];

$sheet->getStyle('A1:' . $lastColumn . $lastRow)->applyFromArray($styleArray);


$sheet->setCellValue('A1', 'ID');
$sheet->setCellValue('B1', 'Nome');
$sheet->setCellValue('C1', 'Sobrenome');
$sheet->setCellValue('D1', 'Data de Nascimento');
$sheet->setCellValue('E1', 'Idade');
$sheet->setCellValue('F1', 'Sexo');
$sheet->setCellValue('G1', 'Salario');
$sheet->setCellValue('H1', 'Telefone');
$sheet->setCellValue('I1', 'Email');
$sheet->setCellValue('J1', 'Cargo');
$sheet->setCellValue('K1', 'Setor');
$sheet->setCellValue('L1', 'Subsetor');

if (is_array($postData)) {
    foreach ($postData as $key => $row) {
        $sheet->setCellValue('A' . ($key + 2), is_numeric($row['id']) ? intval($row['id']) : '');
        $sheet->setCellValue('B' . ($key + 2), isset($row['nome']) ? $row['nome'] : '');
        $sheet->setCellValue('C' . ($key + 2), isset($row['sobrenome']) ? $row['sobrenome'] : '');
        $sheet->setCellValue('D' . ($key + 2), isset($row['data_nasc']) ? $row['data_nasc'] : '');
        $sheet->setCellValue('E' . ($key + 2), is_numeric($row['idade']) ? intval($row['idade']) : '');
        $sheet->setCellValue('F' . ($key + 2), isset($row['sexo']) ? $row['sexo'] : '');
        $sheet->setCellValue('G' . ($key + 2), isset($row['salario']) ? $row['salario'] : '');
        $sheet->setCellValue('H' . ($key + 2), isset($row['telefone']) ? $row['telefone'] : '');
        $sheet->setCellValue('I' . ($key + 2), isset($row['email']) ? $row['email'] : '');
        $sheet->setCellValue('J' . ($key + 2), isset($row['cargo']) ? $row['cargo'] : '');
        $sheet->setCellValue('K' . ($key + 2), isset($row['setor']) ? $row['setor'] : '');
        $sheet->setCellValue('L' . ($key + 2), isset($row['subsetor']) ? $row['subsetor'] : '');
    }

    $writer = new PhpOffice\PhpSpreadsheet\Writer\Xlsx($spreadsheet);

    header('Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    header('Content-Disposition: attachment;filename="func_report.xlsx"');
    header('Cache-Control: max-age=0');

    $writer->save('php://output');
} else {
    echo "Dados inválidos recebidos.";
}
?>
