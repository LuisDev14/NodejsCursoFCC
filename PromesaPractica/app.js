const statusPedido = ()=>{
    return Math.random() < 0.8;
};
const miPedidoDePiza = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(statusPedido()){
            resolve('¡Pedido exitoso! Su Pizza esta en camino.');
        }else{
            reject('Ocurrio un error. Por favor intente nuevamente');
        }
    },3000);
});

miPedidoDePiza.then((mensajeDeConfirmacion)=>{
    console.log(mensajeDeConfirmacion);
}).catch((mensajeDeError)=>{
    console.log(mensajeDeError);
});
