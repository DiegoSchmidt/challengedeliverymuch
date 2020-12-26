const url = require('url');
const recipesServices = require('../services/recipesService');
const giphyService = require('../services/giphyService');
const retorno = require('../utils/retornos');

exports.find = async (request, response) => {
  const queryURL = url.parse(request.url, true).query;

  if (!queryURL || !queryURL.i.length) {
    response.status(400).send(retorno(400, 'Parametro(s) invalido(s)', ''));
    return;
  }

  if (queryURL.i.split(',').length > 3) {
    response.status(400).send(retorno(400, 'Parametro(s) invalido(s). Use no maximo 3 ingredientes', ''));
    return;
  }

  try {
    const res = await recipesServices.get(queryURL.i);

    const jsonFormat = await Promise.all(res.results.map(async (element) => {
      const jsonItem = {
        title: element.title,
        ingredients: element.ingredients.split(',').map((item) => item.trim()).sort(),
        link: element.href,
      };

      const giphyReturn = await giphyService.search(element.title);

      if (giphyReturn) {
        jsonItem.gif = `https://media.giphy.com/media/${giphyReturn.data[0].id}/giphy.gif`; // Seleciona o primeiro item retornado pela API
      }

      return jsonItem;
    }));

    /* eslint-disable array-callback-return */
    /* eslint-disable no-unused-expressions */
    /* eslint-disable no-nested-ternary */
    const jsonFormatSorted = jsonFormat.sort((a, b) => {
      (a.title > b.title ? 1 : b.title > a.title ? -1 : 0);
    });

    const jsonRetorno = {
      keywords: queryURL.i.split(',').map((item) => item.trim()).sort(),
      recipes: jsonFormatSorted,
    };
    response.send(jsonRetorno);
  } catch (error) {
    response.send(error);
  }
};
