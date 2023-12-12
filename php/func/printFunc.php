<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Relatório de Funcionários</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
            background-color: #f5f5f5;
        }

        .container {
            border: 2px solid #ccc;
            margin: 20px auto;
            padding: 20px;
            max-width: 1200px;
            background-color: #fff;
            position: relative;
        }

        .title {
            text-align: center;
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 20px;
        }

        .datetime {
            position: absolute;
            top: 10px;
            right: 10px;
            font-size: 14px;
            text-align: right;
        }

        .logo {
            position: absolute;
            top: 10px;
            left: 10px;
            max-width: 100px;
        }

        hr {
            margin-top: 20px;
            margin-bottom: 20px;
            border: 0;
            border-top: 1px solid #ccc;
        }

        table {
            width: 100%;
            border-collapse: collapse;
        }

        table, th, td {
            border: 1px solid #ccc;
        }

        th, td {
            padding: 10px;
            text-align: left;
        }
    </style>
</head>
<body>

<div class="container">
    <div class="datetime">
        <?php
        $currentDateTime = new DateTime();
        echo $currentDateTime->format('Y-m-d H:i:s');
        ?>
    </div>
    <img class="logo" src="localhost/extjs-crudmvc/resources/images/logo_vanguarda.png" alt="Logo" height="50" width="50">
    <div class="title">Relatório de Funcionários</div>
    <hr>
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Sobrenome</th>
                <th>Data de Nascimento</th>
                <th>Idade</th>
                <th>Sexo</th>
                <th>Salário</th>
                <th>Telefone</th>
                <th>Email</th>
                <th>Cargo</th>
                <th>Setor</th>
                <th>Subsetor</th>
            </tr>
        </thead>
        <tbody>
            <?php
            header("Access-Control-Allow-Origin: *");
            header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
            header("Access-Control-Allow-Headers: Content-Type");
            header("Content-Type: text/html");
            
            include('../db.php');

            function obterDadosDoBanco($start, $limit) {
                global $conexao;

                $queryString = "SELECT * FROM func LIMIT $start, $limit";
                $query = mysqli_query($conexao, $queryString) or die(mysqli_connect_error());


                $funcs = array();
                while ($func = mysqli_fetch_assoc($query)) {
                    $funcs[] = $func;
                }

                return $funcs;

                echo $funcs;
            }

            $start = isset($_REQUEST['start']) ? intval($_REQUEST['start']) : 0;
            $limit = isset($_REQUEST['limit']) ? intval($_REQUEST['limit']) : 10;

            $funcs = obterDadosDoBanco($start, $limit);

            foreach ($funcs as $func) {
                echo '<tr>';
                echo '<td>' . $func['id'] . '</td>';
                echo '<td>' . $func['nome'] . '</td>';
                echo '<td>' . $func['sobrenome'] . '</td>';
                $data = new DateTime($func['data_nasc']);
                $dataFormatada = $data->format("d/m/Y");
                echo '<td>' . $dataFormatada . '</td>';
                echo '<td>' . $func['idade'] . '</td>';
                echo '<td>' . $func['sexo'] . '</td>';
                echo '<td>' . $func['salario'] . '</td>';
                echo '<td>' . $func['telefone'] . '</td>';
                echo '<td>' . $func['email'] . '</td>';
                echo '<td>' . $func['cargo'] . '</td>';
                echo '<td>' . $func['setor'] . '</td>';
                echo '<td>' . $func['subsetor'] . '</td>';
                echo '</tr>';
            }
            ?>
        </tbody>
    </table>
</div>

</body>
</html>
