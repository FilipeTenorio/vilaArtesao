const express = require('express');
const produtoRouter = express.Router();
const produtoControllers = require('../controllers/produtoController');

produtoRouter.route('/produtos')
    .get((req, res) => {
        produtoControllers.getProdutos(req, res);
    });

produtoRouter.route('/produtos/categoria')
    .get((req, res) => {
        produtoControllers.getProdutosByCategoria(req, res);
    });

produtoRouter.route('/produtos/:id')
    .get((req, res) => {
        produtoControllers.getProdutoById(req, res);
    });

produtoRouter.route('/produtos/filtrar')
    .get((req, res) => {
        produtoControllers.filtrarProdutos(req, res);
    });

module.exports = produtoRouter;
