/*
    Com um arquivo de rotas centralizado, a manutenção da API torna-se mais fácil.
    Dessa forma é possível separar as responsabilidade de cada rota e 
    fazer com que o código fique mais limpo e mais fácil de ser lido,
    mesmo que a complexidade da API aumente.
*/

const express = require('express');
let app = express();

let recipesRoute = require('./recipesRoute');

app.use('/recipes', recipesRoute);

module.exports = app;