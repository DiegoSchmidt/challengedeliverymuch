const recipesServices = require('../services/recipesService');
const url = require('url');


module.exports = {

    find(request, response){
        
        let query = url.parse(request.url, true).query;

        console.log(JSON.stringify(query));

        recipesServices.get(query.i)
        .then(res =>{
            response.send(res);
        })
        .catch(err =>{
            response.send(err);
        })
    }

}