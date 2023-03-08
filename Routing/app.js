const http =  require('http');
const {infoCursos} = require('./cursos');
const servidor = http.createServer((req,res)=>{
  //extraemos el metodo de la solicitud, con desestructuración
  const {method} = req;
    switch(method){
      case 'GET':
        return manejarSolicitudGET(req,res);
      case 'POST':
        return manejarSolicitudPOST(req,res);
      default:
        res.statusCode = 501;
        res.end(`El metodo usado no puede ser manejado por el servidor: ${method}`);

    }

});

//Funcion para manejar la solicitud GET
function manejarSolicitudGET(req,res){
  res.writeHead(200,{'Content-Type':'application/json'});
  const path = req.url;
  console.log(res.statusCode);//200 ok por defecto


  if(path === '/'){
    //res.statusCode = 200;
    return res.end('Bienvenidos a mi primer servidor y API creados con Node.js');
  }else if(path === '/cursos'){
    //res.statusCode = 200;
    return res.end(JSON.stringify(infoCursos));
  }else if(path === '/cursos/programacion'){
    //res.statusCode = 200;
    return res.end(JSON.stringify(infoCursos.programacion));
  }

  res.statusCode = 404;
  res.end('El recurso solicitado no existe');
}

//Funcion para manejar la solicitud POST
function manejarSolicitudPOST(req,res){
  const path = req.url;
  console.log(res.statusCode);

  if(path === 'cursos/programacion'){
    
    let cuerpo = '';
    req.on('data',contenido =>{
      cuerpo += contenido.toString();
    });

    req.on('end',()=>{
      console.log(cuerpo);
      console.log(typeof cuerpo);

      //Convertir a un objeto de javascript
      cuerpo = JSON.parse(cuerpo);
      console.log(typeof cuerpo);
      console.log(cuerpo.titulo);
      return res.end('El servidor recibio una solicitud POST para /cursos/programacion');
    });

    //return res.end('El servidor recibio una solicitud POST para /cursos/programacion');
  }

}

const PUERTO = 3000;
servidor.listen(PUERTO,()=>{
  console.log(`El servidor esta escuchando en el puerto ${PUERTO}`);
});