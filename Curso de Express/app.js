const express = require('express');
//Igualamos la funcion de express a una aplicacion de express
const app = express();
//desestructuracion e importamos infocursos
const {infoCursos} = require('./datos/cursos.js');
//console.log(infoCursos);
//Routers
const routerProgramacion = require('./routers/programacion.js');
app.use('/api/cursos/programacion',routerProgramacion);

const routerMatematicas = require('./routers/matematicas.js');
app.use('/api/cursos/matematicas/',routerMatematicas)

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






//Matematicas


const PUERTO = process.env.PORT || 3000;
//para que nuestro servidor escuche
app.listen(PUERTO,()=>{
  console.log(`El sevidor esta escuchando en el puerto ${PUERTO}...`);
});