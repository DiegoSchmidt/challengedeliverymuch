/*
    Processo de gerenciamento de rotas de receitas
*/

let express = require('express');
let router = express.Router();

let recipesController = require('../controllers/recipesController');

router.get(
    '/',
    recipesController.find
)

module.exports = router;