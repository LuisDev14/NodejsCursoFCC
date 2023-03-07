const http = require('http');

const servidor =  http.createServer((req,res)=>{
    console.log('===> req (solicitud)');
    /*
    console.log(req.url);
    console.log(req.method);
    console.log(req.headers);
    console.log(res);*/
    console.log(res.statusCode);//200 ok
    //res.statusCode = 404;
    //console.log(res.statusCode);//404 not found
    //Configurar la cabecera
    res.setHeader('content-type','application/json');
    console.log(res.getHeaders());
    
    //ñconsole.log(req);

    //res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hola mundo!');
 

});
const puerto = 3000;

servidor.listen(puerto,()=>{
    console.log(`El servidor esta escuchando en el puerto ${puerto}...`);
});