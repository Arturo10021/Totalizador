import Ventas from './ventas.js';

const cantidadItems = document.querySelector("#cantidad-Items");
const precioPorItem = document.querySelector("#precioPor-Item");
const estadoPais = document.querySelector("#estado-Pais");
const form =document.querySelector("#totalizar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const ventas = new Ventas();
    const cantidad = Number.parseInt(cantidadItems.value);
    const precio = Number.parseInt(precioPorItem.value);
    const estado = estadoPais.value;
    const neto = ventas.calcularPrecioNeto(cantidad, precio);
    const impuesto = ventas.calcularImpuesto(neto, ventas.mostrarImpuesto(estado));
    const descuento = ventas.cantidadDescuento(neto, impuesto);
    const total = ventas.totalNetoImpuesto(neto, impuesto);
    const porcentaje = ventas.porcentajeDescuento(neto, impuesto);
    div.innerHTML = "<p> Cantidad de items: " + ventas.cantidadItems(cantidad) + "</p>";
    div.innerHTML += "<p> Precio por item: " + ventas.precioPorItem(precio) + " $</p>";
    div.innerHTML += "<p> Estado del pais: " + ventas.estadoPais(estado) + "</p>";
    div.innerHTML += "<p> Impuesto: " + ventas.mostrarImpuesto(estado)*100 + " %</p>";
    div.innerHTML += "<p> Precio neto: " + neto + " $</p>";
    div.innerHTML += "<p> Cantidad del impuesto: " + impuesto + " $</p>";
    div.innerHTML += "<p> Precio total: " + total + " $</p>";
    div.innerHTML += "<p> Descuento: " + descuento + "</p>";
    div.innerHTML += "<p> Porcentaje de descuento: " + porcentaje + "</p>";
    div.innerHTML += "<p> Precio total: " + total + "</p>";
});