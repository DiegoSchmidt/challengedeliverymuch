const fetch = require('node-fetch');
const retorno = require('../utils/retornos');
const config = require('../configs/appConfig');

const api = config.app.APIRecipePuppy;

module.exports = {

    get(ingredients){

        return new Promise((resolve, reject) => {

            fetch(`${api}/?i=${ingredients}`,{
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                }
            })        
            .then((res) => {
                if (res.ok){
                    resolve(res.json());
                }else{
                    reject(retorno(res.status, "Falha ao buscar receitas", res));
                }
            })            
            .catch((err) => {
                console.log(err);
                reject(retorno(999, "Erro ao buscar receitas", err));
            });

        });

    }


}