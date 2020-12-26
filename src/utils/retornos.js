module.exports = function Retorno(Status, Mensagem, data){

    let retorno = {
        "status": Status,        
        "mensagem": Mensagem,
        "data" : data       
    }

    return JSON.stringify(retorno);

}