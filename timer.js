function mostrarTema(tema){
    console.log(`Estoy aprendiendo ${tema}`);
}
setTimeout(mostrarTema,1000,'Node.js');

function sumar(a,b){
    console.log(a+b);
}
setTimeout(sumar,5000,5,8);