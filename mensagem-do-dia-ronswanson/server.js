const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3000;

// Configurar o EJS como template engine
app.set('view engine', 'ejs');

// Rota principal
app.get('/', async (req, res) => {
    try {
        // Faz a requisição para a API do Ron Swanson
        const response = await axios.get('https://ron-swanson-quotes.herokuapp.com/v2/quotes');
        // A API retorna um array com a frase, ex: ["Frase aqui"]
        const mensagem = response.data[0]; 

        // Renderiza a página index.ejs enviando a frase
        res.render('index', { mensagem });
    } catch (error) {
        console.error("Erro ao buscar frase:", error);
        res.render('index', { mensagem: "Não foi possível carregar a mensagem do dia." });
    }
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});