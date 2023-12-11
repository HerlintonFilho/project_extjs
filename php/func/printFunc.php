<?php

require '../../vendor/autoload.php';

require_once('tcpdf/tcpdf.php');

// Crie uma instância do TCPDF
$pdf = new TCPDF();

// Defina o título do documento
$pdf->SetTitle('Relatório de Funcionários');

// Adicione uma página ao documento
$pdf->AddPage();

// Obtenha os dados da requisição POST (enviados pelo JavaScript)
$postData = json_decode($_POST['data'], true);

// Crie uma tabela HTML no formato TCPDF
$html = '<table border="1">';
$html .= '<tr><th>ID</th><th>Nome</th><th>Sobrenome</th><th>Data de Nascimento</th><th>Idade</th><th>Sexo</th><th>Salário</th><th>Telefone</th><th>Email</th><th>Cargo</th><th>Setor</th><th>Subsetor</th></tr>';

foreach ($postData as $record) {
    $html .= '<tr>';
    $html .= '<td>' . $record['id'] . '</td>';
    $html .= '<td>' . $record['nome'] . '</td>';
    $html .= '<td>' . $record['sobrenome'] . '</td>';
    $html .= '<td>' . $record['data_nasc'] . '</td>';
    $html .= '<td>' . $record['idade'] . '</td>';
    $html .= '<td>' . $record['sexo'] . '</td>';
    $html .= '<td>' . $record['salario'] . '</td>';
    $html .= '<td>' . $record['telefone'] . '</td>';
    $html .= '<td>' . $record['email'] . '</td>';
    $html .= '<td>' . $record['cargo'] . '</td>';
    $html .= '<td>' . $record['setor'] . '</td>';
    $html .= '<td>' . $record['subsetor'] . '</td>';
    $html .= '</tr>';
}

$html .= '</table>';

// Adicione a tabela ao PDF
$pdf->writeHTML($html, true, false, true, false, '');

// Saída do PDF para o navegador
$pdf->Output('funcionarios.pdf', 'I');
?>
