function saludar(nombre){
  return `Hola, ${nombre}`;
}
//console.log(module.exports);
//module.exports.fsaludar = saludar;
//console.log(module.exports);
//Creamos otra fucnion de saludar
function saludarHola(){
  return 'Hola Mundo';
}

//module.exports.fsaludar = saludar;
//module.exports.fsaludoHola = saludarHola;

//Para exportar varias funciones tambien se puede hacer de la siguiente manera
module.exports = {
  fsaludar:saludar,
  fsaludarHola:saludarHola
}