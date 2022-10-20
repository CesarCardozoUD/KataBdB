const rangoMaxKm = 20
var stock = new Map();
stock.set('Manzana', 1);
stock.set('Banano', 1);
stock.set('Pera', 3);

class AppInterface {
    realizarDom(pedido, rango){}
}

class Service extends AppInterface {
    realizarDom(pedido, rango){
        console.log("Domicilio recibido.")
    }
}


var serv = new Service();

class AppProxy extends AppInterface{

    verificarCobertura(rango){
        if(rango > rangoMaxKm){
            return false;
        }else{
            return true;
        }
    }

    verificarDisponibilidad(pedido){
        for(let [key, value] of pedido){
            if(key !== undefined && value !== undefined){
                if(stock.get(key) < value){
                    return false;
                }
            }
        }
        return true;
    }

    realizarDom(pedido, rango){
        if(this.verificarCobertura(rango)){
            if(this.verificarDisponibilidad(pedido)){
                serv.realizarDom(pedido, rango);
            }else{
                throw new Error("No hay existencias de los productos solicitados.");
            }
        }else{
            throw new Error("Su ubicación esta fuera de rango.");
        }
        //throw new Error("Method not implemented.");
    }
}
