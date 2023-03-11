const express = require('express');


const {programacion} = require('../datos/cursos.js').infoCursos;

const routerProgramacion = express.Router();

//Middleware
routerProgramacion.use(express.json)

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

//post
routerProgramacion.post('/',(req,res)=>{
  let cursoNuevo = req.body;
  programacion.push(cursoNuevo);
  res.send(JSON.stringify(programacion))
});

//put
routerProgramacion.put('/:id',(req,res)=>{
  const cursoActualizado = req.body;
  const id = req.params.id;

  //obtener el indice del arreglo de cursos
  const indice =  programacion.findIndex(curso=>curso.id == id);
  if(indice>=0){
    programacion[indice]= cursoActualizado;
  }
  res.send(JSON.stringify(programacion));
});

routerProgramacion.patch('/:id',(req,res)=>{
  const infoActualizada = req.body;
  const id  =  req.params.id;

  const indice =  programacion.findIndex(curso=>curso.id == id );
  if(indice >=0){
    const cursoAModificar = programacion[indice];
    Object.assign(cursoAModificar,infoActualizada);
  }
  res.send(JSON.stringify(programacion));
});

//Delete
routerProgramacion.delete('/:id',(req,res)=>{
  const id = req.params.id;
  const indice = programacion.findIndex(curso=>curso.id==id)
  if(indice>=0){
    programacion.splice(indice,1);
  }
  res.send(JSON.stringify(programacion))
})

module.exports = routerProgramacion;
