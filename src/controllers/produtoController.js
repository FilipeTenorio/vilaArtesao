const ProdutoModel = require('../models/produtoModel');
const ArtesaoModel = require('../models/artesaoModel');

module.exports = {
    // Recuperar todos os produtos
    getProdutos: (req, res) => {
        ProdutoModel.find({})
            .populate('artesao', 'nome') 
            .then((result) => {
                res.status(200).json(result);
            })
            .catch(() => {
                res.status(500).json({ message: "Não foi possível recuperar os produtos." });
            });
    },

    
    getProdutosByCategoria: (req, res) => {
        const categoria = req.query.categoria;
        ProdutoModel.find({ categoria: categoria })
            .populate('artesao', 'nome')  
            .then((result) => {
                res.status(200).json(result);
            })
            .catch(() => {
                res.status(500).json({ message: `Não foi possível recuperar os produtos da categoria ${categoria}.` });
            });
    },

    // Recuperar um produto pelo ID, incluindo informações sobre o(s) artesão(ões)
    getProdutoById: (req, res) => {
        const { id } = req.params;
        ProdutoModel.findById(id)
            .populate('artesao', 'nome biografia') 
            .then((result) => {
                if (result) {
                    res.status(200).json(result);
                } else {
                    res.status(404).json({ message: "Produto não encontrado." });
                }
            })
            .catch(() => {
                res.status(500).json({ message: "Não foi possível recuperar o produto." });
            });
    },

    // Filtrar produtos por faixa de preço ou outros critérios
    filtrarProdutos: (req, res) => {
        const { categoria, min, max } = req.query;
        
        const filtro = {};
        if (categoria) {
            filtro.categoria = categoria;
        }
        if (min || max) {
            filtro.preco = {};
            if (min) filtro.preco.$gte = min;
            if (max) filtro.preco.$lte = max;
        }

        ProdutoModel.find(filtro)
            .populate('artesao', 'nome')  // Popula o nome dos artesãos relacionados
            .then((result) => {
                res.status(200).json(result);
            })
            .catch(() => {
                res.status(500).json({ message: "Não foi possível aplicar o filtro nos produtos." });
            });
    }
};
