//const {realizarDom} = require('../src/ProxyPattern/AppProxy')

describe('ObjectPool Pattern', () => {
    
    test('Dummy Test 1', () => {
        expect(true).toBe(true);
    })

})


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


// describe('State Pattern', () => {
    
//     test('Domicilio Fuera de Rango', () => {
//         expect(() => realizarDom(pedidoInStock, rangoKmOut)).toThrow(Error);
//     })

//     test('Productos no Disponibles', () => {
//         expect(() => realizarDom(pedidoOutOfStock, rangoKmIn)).toThrow(Error);
//     })
// })
