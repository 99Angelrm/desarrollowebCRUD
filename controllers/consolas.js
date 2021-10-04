const path = require('path')
const Consola = require('../utils/database').models.consola



exports.postAgregarConsola = (req,res)=>{
    console.log(req.body) //<={id: number,nombre:text}
    Consola.create(req.body)
        .then(con=>{
            console.log("Registro Existoso")
            res.json({estado: "aceptado"})
        })
        .catch(err=>{
            console.log(err)
            res.json({estado: "error"})
        })
    
}



exports.getObtenerConsolas = (req,res)=>{
    Consola.findAll()
        .then(cons =>{
            console.log(cons)
            res.json(cons)
        })
        .catch(err=>console.log(err))
} 

exports.postBorrarConsola = (req,res)=>{
    console.log(req.body)
    Consola.destroy({
       where:{
           id: req.body.id
       } 
    })
    .then(() =>{
        console.log("Consola eliminada")
        res.json({estado: "aceptada"})
    })
    .catch(err=>{
        console.log(err)
        res.json({estado: "error"})
    })
}

exports.postActualizarConsola = (req,res)=>{
    console.log(req.body)
    Consola.update({
        nombre:req.body.nombre
    },{
      where:{
          id: req.body.id
      }  
    })
    .then(() =>{
        console.log("Consola actualizada")
        res.json({estado: "aceptada"})
    })
    .catch(err=>{
        console.log(err)
        res.json({estado: "error"})
    })
}
