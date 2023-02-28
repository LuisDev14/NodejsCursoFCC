function mostrarTema(tema){
    console.log(`Estoy aprendiendo ${tema}`);
}
console.log('Antes del setImmediate()');
setImmediate(mostrarTema,'Node.js');
console.log('Despues del setImmediate()');