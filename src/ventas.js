export class Ventas {
    cantidadItems(cantidad) {
        return cantidad;
    }

    precioPorItem(precio) {
        return precio;
    }

    estadoPais(estado) {
        return estado;
    }

    mostrarImpuesto(estado) {
        let impuesto = 0;
        if (estado=="CA")
          impuesto = 0.0825
        if (estado=="NV")
          impuesto = 0.0800
        if (estado=="UT")
          impuesto = 0.0665
        if (estado=="TX")
          impuesto = 0.0625
        if (estado=="AL")
          impuesto = 0.0400
        return impuesto;
    }

    calcularPrecioNeto(cantidad, precio) {
        return cantidad * precio;
    }

    calcularImpuesto(precioNeto, impuesto) {
        return precioNeto * impuesto;
    }

    totalNetoImpuesto(precioNeto, impuesto) {
        return precioNeto + impuesto;
    }

    cantidadDescuento(precioNeto, impuesto) {
        let total = precioNeto + impuesto;
        let descuento = 0;
        if (total >= 1000 && total <= 2999)
            descuento = total * 0.03;
        if (total >= 3000 && total <= 6999)
            descuento = total * 0.05;
        if (total >= 7000 && total <= 9999)
            descuento = total * 0.07;
        if (total >= 10000 && total <= 29999)   
            descuento = total * 0.1;
        if (total >= 30000)
            descuento = total * 0.15;
        return descuento;
    }

    porcentajeDescuento(precioNeto, impuesto) {
        let total = precioNeto + impuesto;
        let descuento = 0;
        if (total >= 1000 && total <= 2999)
            descuento = 0.03;
        if (total >= 3000 && total <= 6999)
            descuento = 0.05;
        if (total >= 7000 && total <= 9999)
            descuento = 0.07;
        if (total >= 10000 && total <= 29999)
            descuento = 0.1;
        if (total >= 30000)
            descuento = 0.15;
        return descuento;
    }

    precioTotal(precioNeto, impuesto, descuento) {
        return precioNeto + impuesto - descuento;
    }

}

export default Ventas;