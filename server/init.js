const express = require('express');
let parser = require('body-parser');
let http = require('http');
let app = express();

//Busca arquivo de configurações
let appConfig = require('../configs/appConfig');

//Levanta servidor HTTP na porta especificada no arquivo
let server = http.createServer(app).listen(process.env.PORT || appConfig.app.portListener);

server.on('listening', function(){
    console.log('Server running on port ',server.address().port);
})

server.on('error', function(error){
    console.log(error);
})

app.use(parser.json());

app.use(function(req, res, next) { //Habilita Cross Origin da aplicação
    res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
    res.header("Access-Control-Allow-Origin", req.headers.origin ? req.headers.origin : '*');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Id, filetype, Authorization, codigoImovel, nome");
    res.header("Access-Control-Allow-Credentials", true);
    next();
  });
  
module.exports = app;