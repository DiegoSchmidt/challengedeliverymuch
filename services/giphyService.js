const fetch = require('node-fetch');
const retorno = require('../utils/retornos');
const config = require('../configs/appConfig');

let api = config.app.APIGiphy;
let apiKey = config.app.APIGiphyKey;

module.exports = {

    search(text){
        return new Promise((resolve, reject) => {

            fetch(`${api}/search?q=${text}&api_key=${apiKey}`,{
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                }
            })        
            .then((res) => {
                if (res.ok){
                    resolve(res.json());
                }else{
                    reject(retorno(res.status, "Falha ao buscar gif", res));
                }
            })            
            .catch((err) => {
                console.log(err);
                reject(retorno(999, "Erro ao buscar gif", err));
            });

        });
    }

}