const http = require('http');
const servidor = http.createServer((req,res)=>{
    res.end('Hola mundo, FreeCodeCamp');
});
const PUERTO = 3000;
servidor.listen(3000,()=>{
    console.log(`El servidor esta escuchando en el puerto ${PUERTO}`);
});