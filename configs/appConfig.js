
//Para ganhos de performance na inicialização da API, criado um arquivo que retorna uma configuração
//Poderia ser criado um arquivo JSON, por exemplo, porém seria necessário um acesso a disco para buscar a informação.
let config = {

    "app" : {        
        "portListener" : 3000,
        "APIRecipePuppy" : "http://www.recipepuppy.com/api"
    }
}

module.exports = config;