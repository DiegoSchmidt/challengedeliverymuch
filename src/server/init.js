const express = require('express');
const parser = require('body-parser');
const dotenv = require('dotenv');
const http = require('http');

const app = express();

// Busca arquivo de configurações
dotenv.config();

// Levanta servidor HTTP na porta especificada no arquivo
const server = http.createServer(app).listen(process.env.APP_portListener);

server.on('listening', () => {
  // eslint-disable-next-line no-console
  console.log('Server running on port ', server.address().port);
});

server.on('error', (error) => {
  // eslint-disable-next-line no-console
  console.log(error);
});

app.use(parser.json());

app.use((req, res, next) => { // Habilita Cross Origin da aplicação
  res.setHeader('Access-Control-Allow-Methods', 'POST, PUT, OPTIONS, DELETE, GET');
  res.header('Access-Control-Allow-Origin', req.headers.origin ? req.headers.origin : '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Id, filetype, Authorization, codigoImovel, nome');
  res.header('Access-Control-Allow-Credentials', true);
  next();
});

module.exports = app;
