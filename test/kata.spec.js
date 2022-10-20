//const {realizarDom} = require('../src/ProxyPattern/AppProxy')



// Pruebas unitarias Object Pool

describe('ObjectPool Pattern', () => {
    
    var pool = new DomiciliosPool()
    [dummyId_01, dummyObj_01] = pool.crearDomicilio();
    [dummyId_02, dummyObj_02] = pool.crearDomicilio();
    [dummyId_03, dummyObj_03] = pool.crearDomicilio();

    test('Creacion de Domicilios', () => {
        [dummyId_04, dummyObj_04] = pool.crearDomicilio();
        expect(dummyId_04).toBe('Dom4');
    })

    test('Envio de Domicilios', () => {
        expect(() => dummyObj_02.enviardomicilio(dummyId_02)).not.toThrow(Error);
    })

    test('Reusar domiciliario', () => {
        [dummyId_r, dummyObj_r] = pool.crearDomicilio();
        expect(dummyId_r).toBe('Dom2');
    })
})



// Pruebas unitarias Proxy

describe('Proxy Pattern', () => {
    
    const pedidoInStock = new Map(); 
        pedidoInStock.set('Manzana', 1); 
        pedidoInStock.set('Banano', 1); 
        pedidoInStock.set('Pera', 3);
    const pedidoOutOfStock = new Map(); 
        pedidoOutOfStock.set('Manzana', 1); 
        pedidoOutOfStock.set('Banano', 2); 
        pedidoOutOfStock.set('Pera', 3);
    const rangoKmIn = 10;
    const rangoKmOut = 100;

    test('Domicilio Fuera de Rango', () => {
        expect(() => realizarDom(pedidoInStock, rangoKmOut)).toThrow(Error);
    })

    test('Productos no Disponibles', () => {
        expect(() => realizarDom(pedidoOutOfStock, rangoKmIn)).toThrow(Error);
    })
})



// Pruebas unitarias State

describe('State Pattern', () => {
 
    const precio = 15000;

    test('Recargo Diurno Normal', () => {
        changeState('DiurnoNormal');
        expect(() => prepararDomicilio(precio)).toBe('Embalaje: Normal, Precio Domicilio: 15000, Recargos: 0');
    })
    
    test('Recargo Diurno con Lluvia', () => {
        changeState('DiurnoLluvioso');
        expect(() => prepararDomicilio(precio)).toBe('Embalaje: Impermeable, Precio Domicilio: 15000, Recargos: 0');
    })
    
    test('Recargo Nocturno Normal', () => {
        changeState('NocturnoNormal');
        expect(() => prepararDomicilio(precio)).toBe('Embalaje: Normal, Precio Domicilio: 15000, Recargos: 10000');
    })

    test('Recargo Nocturno con Lluvia', () => {
        changeState('NocturnoLluvioso');
        expect(() => prepararDomicilio(precio)).toBe('Embalaje: Impermeable, Precio Domicilio: 15000, Recargos: 10000');
    })
})
