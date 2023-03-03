const EventEmitter = require('events');
const emisorProductos = new EventEmitter();

//cuando oacurra el evento compra
//se asocia el evento compra a la funcion flecha, todo gracias al metodo on
emisorProductos.on('compra',(total,numProductos)=>{
    console.log(`se realizo una compra por $${total}`);
    console.log(`Numero de productos ${numProductos}`);

});

//quiero emitir un evento llamado compra
emisorProductos.emit('compra',500,3);
