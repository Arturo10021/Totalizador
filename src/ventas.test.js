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

    it("Mostrar el precio total con el Porcentaje de descuento que corresponde a 1000", () => {
        let ventas = new Ventas();
        let neto = ventas.calcularPrecioNeto(10, 200);
        expect(ventas.cantidadDescuento(neto, ventas.calcularImpuesto(neto, ventas.mostrarImpuesto("TX")))).toEqual(2061.25);
    });

    it("Mostrar Precio total = Precio Neto + Impuesto - Descuento", () => {
        let ventas = new Ventas();
        expect(ventas.cantidadDescuento(ventas.calcularPrecioNeto(5, 25), ventas.calcularImpuesto(125, 0.0825))).toEqual(135.3125);
    });
    
});    
