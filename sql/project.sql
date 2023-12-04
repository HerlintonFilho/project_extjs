-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 04-Dez-2023 às 15:32
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
-- Estrutura da tabela `cargo`
--

CREATE TABLE `cargo` (
  `id` int(11) NOT NULL,
  `description` varchar(45) DEFAULT NULL,
  `status_cargo` varchar(15) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `cargo`
--

INSERT INTO `cargo` (`id`, `description`, `status_cargo`) VALUES
(1, 'Analista', 'Ativo'),
(2, 'Supervisor', 'Ativo'),
(17, 'Estagiario', 'Ativo'),
(18, 'Tecnico', 'Ativo'),
(22, 'Aprendiz', 'Ativo'),
(23, 'Cobrador', 'Inativo');

-- --------------------------------------------------------

--
-- Estrutura da tabela `func`
--

CREATE TABLE `func` (
  `id` int(11) NOT NULL,
  `nome` varchar(45) NOT NULL,
  `sobrenome` varchar(45) DEFAULT NULL,
  `data_nasc` date NOT NULL,
  `idade` int(11) NOT NULL,
  `sexo` varchar(15) NOT NULL,
  `salario` float NOT NULL,
  `telefone` varchar(15) NOT NULL,
  `email` varchar(45) NOT NULL,
  `cargo` varchar(45) NOT NULL,
  `setor` varchar(45) NOT NULL,
  `subsetor` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `func`
--

INSERT INTO `func` (`id`, `nome`, `sobrenome`, `data_nasc`, `idade`, `sexo`, `salario`, `telefone`, `email`, `cargo`, `setor`, `subsetor`) VALUES
(47, 'Herlinton', 'Filho', '2004-07-07', 19, 'Masculino', 1320, '86994018822', 'herlinton@email.com', 'Estagiario', 'Tecnologia da Informau00e7u00e', 'Anu00e1lise'),
(48, 'Maria', 'Luiza', '2006-04-25', 17, 'Feminino', 650, '86944445555', 'luiza@email.com', 'Supervisor', 'Marketing', 'Suporte'),
(55, 'Luis', 'Felipe', '2005-07-07', 18, 'Masculino', 1500, '86911112222', 'luis@email.com', 'Estagiario', 'Setor Pessoal', 'Recrutamento'),
(56, 'Pedro', 'Bastos', '1990-04-12', 33, 'Masculino', 2500, '86911112222', 'pedro@email.com', 'Analista', 'Comercial', 'Compras'),
(57, 'Lucas', 'Couto', '1993-11-25', 30, 'Masculino', 5000, '86911112222', 'lucas@email.com', 'Supervisor', 'Comercial', 'Compras'),
(58, 'Isabel', 'Cristina', '2000-01-12', 23, 'Feminino', 3000, '86944445555', 'isabel@email.com', 'Analista', 'Marketing', 'Design'),
(59, 'João', 'Silva', '1990-05-15', 32, 'Masculino', 5000, '123456789', 'joao.silva@email.com', 'Analista', 'Tecnologia da Informação', 'Analise'),
(60, 'Maria', 'Santos', '1985-08-20', 37, 'Feminino', 6000, '987654321', 'maria.santos@email.com', 'Supervisor', 'Marketing', 'Design'),
(61, 'Carlos', 'Oliveira', '2000-02-10', 22, 'Masculino', 2500, '555555555', 'carlos.oliveira@email.com', 'Estagiario', 'Centro de Manutenção', 'Planejamento'),
(79, 'Pablo', 'Henrique', '2006-10-12', 17, 'Masculino', 650, '(86)99401-8822', 'pablo@email.com', 'Supervisor', 'Marketing', 'Design');

-- --------------------------------------------------------

--
-- Estrutura da tabela `setor`
--

CREATE TABLE `setor` (
  `id` int(11) NOT NULL,
  `nome` varchar(45) CHARACTER SET utf8mb4 DEFAULT NULL,
  `abreviacao` varchar(45) CHARACTER SET utf8mb4 DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `setor`
--

INSERT INTO `setor` (`id`, `nome`, `abreviacao`) VALUES
(1, 'Tecnologia da Informação', 'TI'),
(3, 'Marketing', 'MKT'),
(4, 'Centro de Manutenção', 'CM'),
(5, 'Setor Pessoal', 'DP'),
(7, 'Comercial', 'COM');

-- --------------------------------------------------------

--
-- Estrutura da tabela `subsetor`
--

CREATE TABLE `subsetor` (
  `id` int(11) NOT NULL,
  `nome` varchar(255) NOT NULL,
  `id_setor` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `subsetor`
--

INSERT INTO `subsetor` (`id`, `nome`, `id_setor`) VALUES
(1, 'Compras', 7),
(2, 'Design', 3),
(3, 'Recrutamento', 5),
(4, 'Analise', 1),
(5, 'Planejamento', 4),
(6, 'Custos e Orçamentos', 4);

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `cargo`
--
ALTER TABLE `cargo`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `func`
--
ALTER TABLE `func`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `setor`
--
ALTER TABLE `setor`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `subsetor`
--
ALTER TABLE `subsetor`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_setor` (`id_setor`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `cargo`
--
ALTER TABLE `cargo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT de tabela `func`
--
ALTER TABLE `func`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=88;

--
-- AUTO_INCREMENT de tabela `setor`
--
ALTER TABLE `setor`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de tabela `subsetor`
--
ALTER TABLE `subsetor`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `subsetor`
--
ALTER TABLE `subsetor`
  ADD CONSTRAINT `subsetor_ibfk_1` FOREIGN KEY (`id_setor`) REFERENCES `setor` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
