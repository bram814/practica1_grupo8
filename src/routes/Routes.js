const {Router} = require('express');
const router = Router();

// req : request
// res : responseve
router.get('/', (req, res) => {

    res.status(200).json({
        name : "Análisis y Diseño 1",
        website : "Nombre - Carnet - Práctica 1 - Grupo 8"
    });
});


module.exports = router;