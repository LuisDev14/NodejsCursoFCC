const fs = require('fs');
fs.writeFile('index.html','Contenido nuevo',(err)=>{
    if(err){
        throw err;
    }
    console.log('Contenido remplazado exitosamente');
});