const fs = require('fs');
console.log('Antes de leer el archivo');
//Leer un archivo
const archivo = fs.readFileSync('index.html','utf-8');
console.log(archivo);

console.log('Despues de leer el archivo');
//Cambiar el nombre de un archivo
fs.renameSync('index.html','main.html');

console.log('Despues de cambiar el nombre');

//Agregar contenido al final de un archivo
fs.appendFileSync('index.html','<p>Hola</p>');

console.log('Despues de agregar contenido al archivo');

//Remplazar todo del contenido de un archivo
fs.writeFileSync('index.html','Contenido nuevo');

console.log('Despues de remplazar el contendido del archivo');
//eliminar un archivo
fs.unlinkSync('main.html'); 

console.log('Despues de eliminar el contendo del archivo');