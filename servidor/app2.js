const http = require('http');
const servidor =  http.createServer((req,res)=>{
    console.log('===> req (solicitud)');
    console.log();
});