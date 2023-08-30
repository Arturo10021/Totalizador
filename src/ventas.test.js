import {Ventas} from './ventas.js';

describe('Ventas', () => {
    it("mostrar cantidad de items", () => {
        const ventas = new Ventas();
        expect(ventas.cantidadItems(50)).toBe(50);
    });
});    
