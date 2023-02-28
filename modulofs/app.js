const fs = require('fs');
fs.readFile('./index.html','utf-8',(err,contenido)=>{
    if(err){
        //console.log(err);
        throw err;
    }
    console.log(contenido);
    //console.log('Mensaje...');
});
