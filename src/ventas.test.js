import {Ventas} from './ventas.js';

describe('Ventas', () => {
    it("mostrar cantidad de items", () => {
        const ventas = new Ventas();
        expect(ventas.cantidadItems(50)).toBe(50);
    });

    it("Mostrar el precio por item", () => {
        const ventas = new Ventas();
        expect(ventas.precioPorItem(100)).toBe(100);
    });
});    
