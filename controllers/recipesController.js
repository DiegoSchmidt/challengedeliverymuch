const recipesServices = require('../services/recipesService');
const giphyService = require("../services/giphyService");
const url = require('url');


module.exports = {

    find(request, response){
        
        let query = url.parse(request.url, true).query;

        recipesServices.get(query.i)
        .then(res =>{

            console.log(res);

            let jsonRetorno = {
                keywords : query.i.split(",").map((item)=>item.trim()),
                recipes  : []
            }

            res.results.forEach(element => {

                let jsonItem = {
                    title : element.title,
                    ingredients : element.ingredients.split(",").map((item)=>item.trim()),
                    link : element.href
                    // gif
                };


                giphyService.search(element.title)


                jsonRetorno.recipes.push(jsonItem);
            });

            response.send(jsonRetorno);
        })
        .catch(err =>{
            response.send(err);
        })
    }

}