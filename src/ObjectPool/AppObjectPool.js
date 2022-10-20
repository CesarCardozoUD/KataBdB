var domiciliariosDisponibles = new Map();
var domiciliariosOcupados = new Map();
var counterIdAux = 1;

class Domiciliario{
    async enviarDomicilio(domId){
        await new Promise(r => setTimeout(r, 5000));
        try{
            var dom = domiciliariosOcupados.get(domId);
            domiciliariosOcupados.delete(domId);
            domiciliariosDisponibles.set(domId, dom);
            return 'El domiciliario a enviado el Domicilio y ya esta Disponible'
        }catch{
            throw new Error('Error al liberar Domiciliario');
        }
    }

    validate(domKey){
        return domiciliariosOcupados.get(domKey) == undefined;
    }
}

class DomiciliosPool{
    crearDomicilio(){
        if(domiciliariosDisponibles.size > 0){
            const [firstKey] = domiciliariosDisponibles.keys();
            var dom = domiciliariosDisponibles.get(firstKey);
            domiciliariosDisponibles.delete(firstKey);
            if(dom.validate()){
                domiciliariosOcupados.set(firstKey, dom);
                return [firstKey, dom];
            }else{
                domiciliariosDisponibles.set(firstKey, dom);
                domiciliariosOcupados.delete(firstKey);
                throw new Error('Falló Validación del Domiciliario.')
            }
        }else{
            var newDom = new Domiciliario();
            var newDomKey = 'Dom'+counterIdAux;
            domiciliariosOcupados.set('Dom'+counterIdAux, newDom);
            counterIdAux++;
            return [newDomKey, newDom];
        }
    }
}