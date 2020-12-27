// Objeto de retorno padrão da API
module.exports = function Retorno(Status, Mensagem, data) {
  const retorno = {
    status: Status,
    mensagem: Mensagem,
    data,
  };

  return JSON.stringify(retorno);
};
