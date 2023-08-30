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

    it("Mostrar Estado del pais", () => {
        const ventas = new Ventas();
        expect(ventas.estadoPais("CA")).toBe("CA");
    });

    it("Mostrar impuesto", () => {
        let ventas = new Ventas();
        expect(ventas.mostrarImpuesto("CA")).toEqual(0.0825);
      });

    it("Calcular el precio neto", () => {
    let ventas = new Ventas();
    expect(ventas.calcularPrecioNeto(5, 25)).toEqual(125);
    });
});    
