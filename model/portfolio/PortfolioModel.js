// Requerendo os parametros de conexão de banco de dados.
const db = require("../../database/dbConnection");

module.exports = class PortfolioModel {
    // metodo para recuperar todos os portiifolio do banco
    static getTodos(callback) {
        return db.query("select * from portfolio", callback);
    }
    // metodo para recuperar portfolio por id
    static getId(id, callback) {
        return db.query("select * from portfolio where id = ?", [id], callback);
    }
    // metodo para adicionar um portfolio
    static adicionar(portfolio, callback) {
        return db.query("insert into portfolio(nomeProj, descricao, detalhes) values (?, ?, ?)", [portfolio.nomeProj, portfolio.descricao, portfolio.detalhes], callback);
    }
    // metodo para excluir um portfolio
    static deletar(id, callback) {
        return db.query("delete from portfolio where id = ?", [id], callback);
    }
    // metodo para editar um portfolio
    static editar(portfolio, callback) {
        return db.query("update portfolio set nomeProj = ?, descricao = ?, detalhes = ? where id = ?", [portfolio.nomeProj, portfolio.descricao, portfolio.detalhes, portfolio.id], callback);
    }
}