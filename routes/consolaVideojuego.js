const express = require("express")
const consolaVJController = require('../controllers/consolaVideojuego')
const router = express.Router()


//Formulario de ingreso de datos (front-end) 
//router.get('/agregarVideojuego',consolaController.getAgregarVideojuego)
//Servicio para el procesamiento de los datos
router.post('/agregarConsolaVideojuego',consolaVJController.postAgregarConsolaVideojuego)
//Pagina de confirmacion (front-end)
//router.get('/confirmacionDatos',consolaController.getConfirmacionDatos)
//Visualización de los datos guardados
router.get('/obtenerConsolaVideojuego',consolaVJController.getObtenerConsolaVideojuego)
router.post('/borrarConsolaVideojuego',consolaVJController.postBorrarConsolaVideojuego)

router.post('/actualizarConsolaVideojuego',consolaVJController.postActualizarConsolaVideojuego)


module.exports = router