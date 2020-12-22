let express = require('express');
let router = express.Router();

router.get('/',function(request, response){
    response.end('Rota OK');
})

module.exports = router;