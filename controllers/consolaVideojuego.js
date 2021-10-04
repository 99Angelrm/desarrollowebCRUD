const path = require('path')
const ConsolaVJ = require('../utils/database').models.consolaVideojuego



exports.postAgregarConsolaVideojuego = (req,res)=>{
    console.log(req.body) //<={id: number,nombre:text}
    ConsolaVJ.create(req.body)
        .then(convj=>{
            console.log("Registro Existoso")
            res.json({estado: "aceptado"})
        })
        .catch(err=>{
            console.log(err)
            res.json({estado: "error"})
        })
    
}



exports.getObtenerConsolaVideojuego = (req,res)=>{
    ConsolaVJ.findAll()
        .then(consvj =>{
            console.log(consvj)
            res.json(consvj)
        })
        .catch(err=>console.log(err))
} 

exports.postBorrarConsolaVideojuego = (req,res)=>{
    console.log(req.body)
    ConsolaVJ.destroy({
       where:{
           idCV: req.body.idCV
       } 
    })
    .then(() =>{
        console.log("eliminada")
        res.json({estado: "aceptada"})
    })
    .catch(err=>{
        console.log(err)
        res.json({estado: "error"})
    })
}

exports.postActualizarConsolaVideojuego = (req,res)=>{
    console.log(req.body)
    ConsolaVJ.update({
        lanzamiento:req.body.lanzamiento
    },{
      where:{
          idCV: req.body.idCV
      }  
    })
    .then(() =>{
        console.log("actualizada")
        res.json({estado: "aceptada"})
    })
    .catch(err=>{
        console.log(err)
        res.json({estado: "error"})
    })
}
 