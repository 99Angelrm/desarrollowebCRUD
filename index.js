//Importando la biblioteca express
const express = require('express')
const path = require('path') // Windows \  Mac o Linux /
//Cargar el objeto de conexiónn a la base
const sequelize = require('./utils/database')

//Importar rutas
const vjRoutes = require('./routes/videojuegos')
const consolaRoutes = require('./routes/consolas')
const consolavjRoutes = require('./routes/consolaVideojuego')
//Crear una aplicación web
const app = express();

//Establecer un middleware que configure donde se encuentran los
//recursos públicos

app.use(express.json())
app.use(express.urlencoded({extended:true}))

//Vinculamos la aplicación con los recursos de videojuegos
app.use('/videojuegos',vjRoutes);
app.use('/consolas',consolaRoutes);
app.use('/consolasVideojuegos',consolavjRoutes)

//sequelize.sync({force:true})
sequelize.sync()
    .then(
        app.listen(8081,()=>{
            console.log("Servidor online en el puerto 8081")
        })
    )
    .catch(err=>console.log(err))


