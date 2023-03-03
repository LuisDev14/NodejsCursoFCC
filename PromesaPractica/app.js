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
const manejarPedido = (mensajeDeConfirmacion)=>{
    console.log(mensajeDeConfirmacion);
};
const rechazarPedido = (mensajeDeError)=>{
    console.log(mensajeDeError);
}

miPedidoDePiza.then(manejarPedido,rechazarPedido);
