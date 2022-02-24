/*const precioOriginal = 100;
const descuento = 15;
const precioConDescuento = (precioOriginal * (100-descuento))/100;
console.log(precioConDescuento);
*/

function descuentos(precioOriginal, descuento){
    return (precioOriginal * (100-descuento))/100;
}

function priceDiscount(){
    const precio = document.getElementById("inputPrice");
    const costo = precio.value;
    const descuento = document.getElementById("inputDescuento");
    const rebaja = descuento.value;
    const precioFinal = descuentos(costo, rebaja);
    const parrafo = document.getElementById("Result");
    parrafo.innerText = "El precio con descuento son: $" + precioFinal; 
}
