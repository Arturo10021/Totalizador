import Ventas from './ventas.js';

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
        expect(ventas.calcularImpuesto(125, ventas.mostrarImpuesto("CA"))).toEqual(10.3125);
    });

    it("Mostrar el monto de descuento que corresponde a 1000", () => {
        let ventas = new Ventas();
        expect(ventas.cantidadDescuento(ventas.calcularPrecioNeto(5, 200), ventas.calcularImpuesto(1000, ventas.mostrarImpuesto("TX")))).toEqual(31.875);
    });

    it("Mostrar Precio total = Precio Neto + Impuesto - Descuento", () => {
        let ventas = new Ventas();
        const neto = ventas.calcularPrecioNeto(5, 200);
        const impuesto = ventas.calcularImpuesto(1000, ventas.mostrarImpuesto("TX"));
        const descuento = ventas.cantidadDescuento(neto, impuesto);
        expect(ventas.precioTotal(neto, impuesto, descuento)).toEqual(1030.625);
    });
    
    it("Porcentaje descontado", () => {
        let ventas = new Ventas();
        expect(ventas.porcentajeDescuento(ventas.calcularPrecioNeto(5, 250), ventas.calcularImpuesto(1250, ventas.mostrarImpuesto("TX")))).toEqual(0.03);
    });
});    
