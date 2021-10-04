const express = require("express")
const consolaController = require('../controllers/consolas')
const router = express.Router()


//Formulario de ingreso de datos (front-end) 
//router.get('/agregarVideojuego',consolaController.getAgregarVideojuego)
//Servicio para el procesamiento de los datos
router.post('/agregarConsola',consolaController.postAgregarConsola)
//Pagina de confirmacion (front-end)
//router.get('/confirmacionDatos',consolaController.getConfirmacionDatos)
//Visualización de los datos guardados
router.get('/obtenerConsolas',consolaController.getObtenerConsolas)
router.post('/borrarConsola',consolaController.postBorrarConsola)
router.post('/actualizarConsola',consolaController.postActualizarConsola)


module.exports = router