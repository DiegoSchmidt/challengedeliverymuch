//Inicializa o servidor da aplicação
const serverInit = require('./src/server/init');

//Inicializa as rotas da aplicação
let routes = require('./src/routes/init');
serverInit.use('/', routes);

//Rota raiz da aplicação
serverInit.get('/', function(request, response){
    response.end('API Challange Delivery Much');
})
