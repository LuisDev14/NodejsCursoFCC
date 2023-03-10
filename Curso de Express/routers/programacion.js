const express = require('express');


const {programacion} = require('../datos/cursos.js').infoCursos;

const routerProgramacion = express.Router();
//Programacion
routerProgramacion.get('/',(req,res)=>{
  res.send(JSON.stringify(programacion));
});

//Filtrar datos por lenguaje con parametros url. PARAMETROS DE RUTA
routerProgramacion.get('/:lenguaje',(req,res)=>{
  const lenguaje =  req.params.lenguaje;
  const resultados = programacion.filter(curso=> curso.lenguaje===lenguaje);
  
  if(resultados.length === 0){
    return res.status(404).send(`No se encontraron cursos de ${lenguaje}`);
  }

  console.log(req.query.ordenar);
  res.send(JSON.stringify(resultados));
});

//Filtrar cursos de programcion por lenguaje y nivel. PARAMETROS DE RUTA
routerProgramacion.get('/:lenguaje/:nivel',(req,res)=>{
  const lenguaje = req.params.lenguaje;
  const nivel = req.params.nivel;
  //filtramos
  const resultados = programacion.filter(curso=>curso.lenguaje===lenguaje && curso.nivel===nivel);
  if(resultados.length === 0){
    return res.status(404).send(`No se encontraron cursos de ${lenguaje} y nivel ${nivel}`);
  }

  res.send(JSON.stringify(resultados));
});

module.exports = routerProgramacion;
