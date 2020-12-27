/*
    Processo de gerenciamento de rotas de receitas
*/

const express = require('express');

const router = express.Router();

const recipesController = require('../controllers/recipesController');

// Novos metodos ou rotas especificas relacionadas a receitas podem ser adicionadas aqui
router.get(
  '/',
  recipesController.find,
);

module.exports = router;
