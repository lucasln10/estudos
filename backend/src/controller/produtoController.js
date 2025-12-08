const service = require('../service/produtoService');

const allProdutos = async (req, res) => {
    try {
        const produtos = await service.getAllProdutos();
        res.status(200).json(produtos);
    } catch (err) {
        res.status(500).json({ error: 'Erro ao buscar produtos' });
    }
}

module.exports = {
    allProdutos
};