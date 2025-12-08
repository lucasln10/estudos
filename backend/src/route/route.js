const express = require('express');
const controller = require('../controller/produtoController');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('API is running');
});

router.get('/produtos', controller.allProdutos);

module.exports = router;