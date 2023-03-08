const express = require('express');
//Igualamos la funcion de express a una aplicacion de express
const app = express();
//desestructuracion e importamos infocursos
const {infoCursos} = require('./cursos.js');
//console.log(infoCursos);

//Routing, definimos el metodo y el camino
//como segundo argumento pasamos una funcion flecha
//por lo que tomamos la req(solicitud) y la res(respuesta)
app.get('/',(req,res)=>{
  res.send('Mi primer servidor con Express. Cursos 💻.');
});

app.get('/api/cursos',(req,res)=>{
  //res.send(infoCursos);
  res.send(JSON.stringify(infoCursos));
});

app.get('/api/cursos/programacion',(req,res)=>{
  res.send(JSON.stringify(infoCursos.programacion));
});

//Filtrar datos por lenguaje con parametros url. PARAMETROS DE RUTA
app.get('/api/cursos/programacion/:lenguaje',(req,res)=>{
  const lenguaje =  req.params.lenguaje;
  const resultados = infoCursos.programacion.filter(curso=> curso.lenguaje===lenguaje);
  
  if(resultados.length === 0){
    return res.status(404).send(`No se encontraron cursos de ${lenguaje}`);
  }

  console.log(req.query.ordenar);
  res.send(JSON.stringify(resultados));
});

//Filtrar cursos de programcion por lenguaje y nivel. PARAMETROS DE RUTA
app.get('/api/cursos/programacion/:lenguaje/:nivel',(req,res)=>{
  const lenguaje = req.params.lenguaje;
  const nivel = req.params.nivel;
  //filtramos
  const resultados = infoCursos.programacion.filter(curso=>curso.lenguaje===lenguaje && curso.nivel===nivel);
  if(resultados.length === 0){
    return res.status(404).send(`No se encontraron cursos de ${lenguaje} y nivel ${nivel}`);
  }

  res.send(JSON.stringify(resultados));

});




//Matematicas
app.get('/api/cursos/matematicas',(req,res)=>{
  res.send(JSON.stringify(infoCursos.matematicas));
})

app.get('/api/cursos/matematicas/:tema',(req,res)=>{
  const tema = req.params.tema;
  const resultados = infoCursos.matematicas.filter(curso=>curso.tema===tema);
  if(resultados.length===0){
    return res.status(404).send(`No se encontraron cursos de ${tema}`);
  }
  res.send(JSON.stringify(resultados));
});

const PUERTO = process.env.PORT || 3000;
//para que nuestro servidor escuche
app.listen(PUERTO,()=>{
  console.log(`El sevidor esta escuchando en el puerto ${PUERTO}...`);
});