/*
const saludox = require('./saludos.js');
console.log(saludox.fsaludar('FreeCodeCamp'));
console.log(saludox.fsaludarHola());
*/
//console.log(saludo.saludar("FreeCodeCamp"));   

//-Importar solo partes necesarias del modulo saludos.js, con desestructuracion

const { fsaludar,fsaludarHola } = require('./saludos');
console.log(fsaludarHola());
console.log(fsaludar('FreeCodeCamp'));
