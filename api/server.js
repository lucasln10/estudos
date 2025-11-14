const axios = require('axios');
const express = require('express');

const app = express();
 
const url = "https://pokeapi.co/api/v2/pokemon";
const meteo = () => {
    const resposta = axios.get(url);
    return resposta.data;
}

app.get('/', async (req, res) => {
    try {
        const dados = await meteo();
        res.json(dados.map( pokemons => pokemons.name ));
    } catch (e) {
        throw new Error(e);
    }
});

app.listen('8000', () => {
    console.log('Servidor rodando na porta http://localhost:8000');
});