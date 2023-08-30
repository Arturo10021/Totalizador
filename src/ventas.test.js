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

    it("Calcular la cantidad del impuesto", () => {
        let ventas = new Ventas();
        expect(ventas.calcularImpuesto(125, 0.0825)).toEqual(10.3125);
    });

    it("mostrar precio final con descuento para total menor o igual a 1000(3%)", () => {
        let ventas = new Ventas();
        expect(ventas.precioFinal(1000, 0.03)).toEqual(970);
    });
});    
