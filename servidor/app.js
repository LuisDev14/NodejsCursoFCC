const http = require('http');
//usamos el metodo createServer de http
//req ->solicitud, res->respuesta, son objetos
const servidor =  http.createServer((req,res)=>{
    //console.log('SOlicitud nueva');
    res.end('Hola mundo');
});
const puerto = 3000;

servidor.listen(puerto,()=>{
    console.log(`El servidor esta escuchando en http://localhost:${puerto}...`);
});