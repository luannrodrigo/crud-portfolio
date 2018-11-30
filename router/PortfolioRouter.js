const express = require('express');
const router = express.Router();
const PortfolioModel = require('../model/portfolio/PortfolioModel');
const RespostaClass = require('../model/RespostaClass')

// Definindo Verbos
// Definindo Verbo get para listar todos os itens do banco de dados
router.get('/', function (req, res, next) {
    PortfolioModel.getTodos(function (err, result) {
        let resposta = new RespostaClass();

        // Tratando erros
        if (err) {
            resposta.err = true;
            resposta.msg = 'Ocorreu um erro, pf contato o administrador';
            console.log(`Erro ${err}`);
        } else {
            resposta.dados = result;
        }
        res.json(resposta);
    });
});

// Definindo o verbo para lista tudo que esta no banco por id
router.get('/:id?', function (req, res, next){
    PortfolioModel.getId(req.params.id, function(err, result){
        let resposta = new RespostaClass();

        // Tratando erros
        if(err){
            resposta.err = true;
            resposta.msg = 'Ocorreu um erro, pf contato o administrador';
            console.log(`Erro ${err}`);
        }else{
            resposta.dados = result;
        }
        res.json(resposta);
    });
});

// Definindo verbo para adicionar no banco de dados
router.post('/?', function(req, res, next){
    PortfolioModel.adicionar(req.body, function(err, result){
        let resposta = new RespostaClass();
        // Tratando erros
        if (err) {
            resposta.err = true;
            resposta.msg = "Ocorreu um erro";
            console.log(`Erro: ${err}`);
        }else{
            if(result.affectedRows > 0){
                resposta.msg = "Cadastro realizado com sucesso";
            }else{
                resposta.err = true;
                resposta.msg = "Ocorreu um erro ao inserir no banco, pf contate o administrador";
            }
            console.log(`Erro: ${err}`);
        }
        res.json(resposta);
    });
});

// Verbo para deletar
router.delete('/:id', function(req, res, next){
    PortfolioModel.deletar(req.params.id, function(err, result){
        let resposta = new RespostaClass();
        // tratando erros
        if(err){
            resposta.err = true;
            resposta.msg = "Ocorreu um erro";
            console.log(`Erro: ${err}`);
        }else{
            if(result.affectedRows > 0){
                resposta.msg = "Exclusão realizada com sucesso";
            }else{
                resposta.err = true;
                resposta.msg = "Ocorreu um erro ao deletar";
            }
            console.log(`Erro: ${err}`);
        }
        res.json(resposta);
    });
});

// Verbo para atualizar
router.put('/', function(req, res, next){
    PortfolioModel.editar(req.body, function(err, result){
        let resposta = new RespostaClass();
        // Tratando erros
        if(err){
            resposta.err = true;
            resposta.msg = "Ocorreu um erro";
            console.log(`Erro: ${err}`);
        }else{
            if (result.affectedRows > 0) {
                resposta.msg = "Atualização realizada com sucesso";
            }else{
                resposta.err = true;
                resposta.msg = "Ocorreu um erro";
            }
            console.log(`Erro: ${err}`);
        }
        res.json(resposta);
    });
});

module.exports = router;
