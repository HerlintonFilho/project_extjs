<?php
include('../../vendor/autoload.php');
use PhpOffice\PhpSpreadsheet\Spreadsheet;

$queryString = $_SERVER['QUERY_STRING'];
parse_str($queryString, $queryParams);
$dataSend = isset($queryParams['data']) ? urldecode($queryParams['data']) : '';

$postData = json_decode($dataSend, true);

$spreadsheet = new Spreadsheet();
$sheet = $spreadsheet->getActiveSheet();
$lastColumn = 'C';
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
$sheet->setCellValue('B1', 'Descrição');
$sheet->setCellValue('C1', 'Status');

if (is_array($postData)) {
    foreach ($postData as $key => $row) {
        $sheet->setCellValue('A' . ($key + 2), is_numeric($row['id']) ? intval($row['id']) : '');
        $sheet->setCellValue('B' . ($key + 2), isset($row['description']) ? $row['description'] : '');
        $sheet->setCellValue('C' . ($key + 2), isset($row['status_cargo']) ? $row['status_cargo'] : '');
    }

    $writer = new PhpOffice\PhpSpreadsheet\Writer\Xlsx($spreadsheet);

    header('Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    header('Content-Disposition: attachment;filename="cargos_report.xlsx"');
    header('Cache-Control: max-age=0');

    $writer->save('php://output');
} else {
    echo "Dados inválidos recebidos.";
}
?>
