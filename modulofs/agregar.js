const fs = require('fs');
//Agregar contenido al final de un archivo
fs.appendFile('index.html','<p>Hola</p>',(err)=>{
    if(err){
        throw err;
    }
    console.log('Archivo actualizado.');
});