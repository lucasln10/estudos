const db = require('../../db/conection/db');

const createProduto = async (name, preco, quantidade) => {
    
}

const getAllProdutos = async () => {
    try {
        const all = 'SELECT * FROM produtos';
        const allProsutos = await db.query(all);
        return allProsutos;
    } catch (error) {
        console.error('erro ao buscar produtos', error)
    }
}

module.exports = {
    createProduto,
    getAllProdutos
}