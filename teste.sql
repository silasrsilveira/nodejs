/*Updates*/

UPDATE usuarios SET nome = "Pedro" WHERE nome = "Silas";

/*Deletar Table*/
DELETE FROM usuarios WHERE nome = "Ribeiro";

/* Listar Pessoal que tem"Nome", email" e  idade igual a 8*/
SELECT * FROM usuarios WHERE idade = 8;
SELECT * FROM usuarios WHERE nome = Ribeiro;

/*INSERIR dados*/
INSERT INTO usuarios(idade, email, nome) VALUES(
  51,
  "email@teste.com",
  "Paulo"
);


/criar tabela
CREATE TABLE  usuarios(
  nome VARCHAR(50),
  email VARCHAR(50),
  idade INT
);

/*COMANDOS

SHOW TABLES;
DESCRIBE usuarios;
SELECT * FROM usuarios; //* para listar todos os dados da tabela
