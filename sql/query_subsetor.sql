-- Active: 1700741623571@@127.0.0.1@3306@project
SELECT subsetor.id, subsetor.nome as subsetor_nome, setor.nome as setor_name FROM subsetor JOIN setor ON subsetor.id_setor = setor.id
