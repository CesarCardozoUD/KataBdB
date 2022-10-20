const recargoNocturno = 10000;
var recargos = 0;
var tipoEmbalaje = 'Normal';

class State{
    cambiarEstado(estado){};
    prepararDomicilio(precio){};
}

class DiurnoNormal extends State{
    prepararDomicilio(precio){
        tipoEmbalaje = 'Normal';
        recargos = 0;
        return 'Embalaje: '+tipoEmbalaje+', Precio Domicilio: '+precio+', Recargos: '+recargos;
    }
}

class DiurnoLluviso extends State{
    prepararDomicilio(precio){
        tipoEmbalaje = 'Impermeable';
        recargos = 0;
        return 'Embalaje: '+tipoEmbalaje+', Precio Domicilio: '+precio+', Recargos: '+recargos;
    }
}

class NocturnoNormal extends State{
    prepararDomicilio(precio){
        tipoEmbalaje = 'Normal';
        recargos = recargoNocturno;
        return 'Embalaje: '+tipoEmbalaje+', Precio Domicilio: '+precio+', Recargos: '+recargos;
    }
}

class NocturnoLluvioso extends State{
    prepararDomicilio(precio){
        tipoEmbalaje = 'Impermeable';
        recargos = recargoNocturno;
        return 'Embalaje: '+tipoEmbalaje+', Precio Domicilio: '+precio+', Recargos: '+recargos;
    }
}

var contexto = new State()

class AppDomicilios{
    changeState(clima){
        switch (clima) {
            case 'DiurnoNormal':
                contexto = new DiurnoNormal();
                break;
            case 'DiurnoLluvioso':
                contexto = new DiurnoLluviso();
                break;
            case 'NocturnoNormal':
                contexto = new NocturnoNormal();
                break;
            case 'NocturnoLluvioso':
                contexto = new NocturnoLluvioso();
                break;
            default:
                contexto = new DiurnoNormal();
                break;
        }
    }

    constructor(){
        this.changeState('default');
    }

    prepararDomicilio(precio){
        return contexto.prepararDomicilio(precio);
    }

}