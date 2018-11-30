-- Criando um banco de dados
create database db_portfolio20;
use db_portfolio20;

-- Criando uma table
create table portfolio(
	id int not null auto_increment, 
	nomeProj varchar(250) not null, 
	descricao varchar(250) not null, 
	detalhes varchar(250) not null, 
	primary key(id)
)default charset = utf8;

-- populando o banco
insert into portfolio(nomeProj, descricao, detalhes) values(
    'Realoca','Desenvolvimento de WebSites', 'Tecnologias: Nodejs, Express, Mysql'
);
insert into portfolio(nomeProj, descricao, detalhes) values(
    'Realoca','Desenvolvimento de WebSites', 'Tecnologias: Nodejs, Express, Mysql'
);