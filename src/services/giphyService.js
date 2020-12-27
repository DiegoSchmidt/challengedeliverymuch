const fetch = require('node-fetch');
const retorno = require('../utils/retornos');

// Busca informações de configurações do arquivo .env
const api = process.env.APP_APIGiphy;
const apiKey = process.env.APP_APIGiphyKey;

module.exports = {

  search(text) {
    return new Promise((resolve, reject) => {
      // Comunica com api de gifs
      fetch(`${api}/search?q=${text}&api_key=${apiKey}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((res) => {
          if (res.ok) { // res.status >= 200 && res.status < 300
            resolve(res.json()); // Se o retorno for valido retorna o JSON com as informações da API
          } else {
            reject(retorno(res.status, 'Falha ao buscar gif', res));
          }
        })
        .catch((err) => {
          reject(retorno(999, 'Erro ao buscar gif', err));
        });
    });
  },

};
