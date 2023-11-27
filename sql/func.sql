-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 17-Nov-2023 às 15:55
-- Versão do servidor: 10.4.14-MariaDB
-- versão do PHP: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `project`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `func`
--

CREATE TABLE `func` (
  `id` int(11) NOT NULL,
  `nome` varchar(45) NOT NULL,
  `sobrenome` varchar(45) DEFAULT NULL,
  `data_nasc` varchar(15) NOT NULL,
  `idade` int(11) NOT NULL,
  `sexo` varchar(15) NOT NULL,
  `salario` float NOT NULL,
  `telefone` varchar(15) NOT NULL,
  `email` varchar(45) NOT NULL,
  `cargo` varchar(45) NOT NULL,
  `setor` varchar(30) NOT NULL,
  `subsetor` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `func`
--

INSERT INTO `func` (`id`, `nome`, `sobrenome`, `data_nasc`, `idade`, `sexo`, `salario`, `telefone`, `email`, `cargo`, `setor`, `subsetor`) VALUES
(2, 'Herlinton', 'Filho', '2004-07-07', 19, 'Masculino', 1320, '(86)994018822', 'herlinton@email.com', 'estagiario', 'TI', 'Desenvolvimento'),
(3, 'João', 'Paulo', '1974-12-02', 48, 'Masculino', 2500, '86988889999', 'paulo@email.com', 'analista', 'ti', 'redes'),
(4, 'Marcos', 'Sérgio', '1974-04-23', 49, 'Masculino', 20000000, '86900001111', 'marcos@email.com', 'Diretor', 'TI', 'Diretoria'),
(5, 'Junior', 'seabra', '1987-04-23', 36, 'Masculino', 25000, '86922221111', 'junior@email.com', 'Supervisor', 'TI', 'TI'),
(8, 'Pedro', 'Nascimento', '12/11/2023', 0, '', 2500, '86900001111', 'pedro@email.com', '', '', '');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `func`
--
ALTER TABLE `func`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `func`
--
ALTER TABLE `func`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
