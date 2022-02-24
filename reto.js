/*alturaTriangulo(5,5,8);

function alturaTriangulo(ladoD,ladoI,base){
    if (ladoD == ladoI && ladoI != base){
        var altura = Math.sqrt((ladoD*ladoD)-(0.5*base*0.5*base));
        console.log(altura);
        return altura;
    } else {
        console.log("El triangulo no es isoceles");
    }
}*/

/*const precioOriginal = 100;
const descuento = 15;
const precioConDescuento = (precioOriginal * (100-descuento))/100;
console.log(precioConDescuento);
*/

function descuentos(precioOriginal, descuento){
    return (precioOriginal * (100-descuento))/100;
}

function cupones(cupon){
    const cuponesPorcentaje = ["MELI100", "MELI50", "HAPPY"];
    switch(cupon){
        case cuponesPorcentaje[0]: return 20;
        case cuponesPorcentaje[1]: return 15;
        case cuponesPorcentaje[2]: return 10;
        default : return 0;
    }
}

function priceDiscount(){
    const precio = document.getElementById("inputPrice");
    const costo = precio.value;
    const descuento = document.getElementById("inputDescuento");
    const rebaja = descuento.value;

    const cupon = document.getElementById("inputCupon");
    const cuponDescuento = cupon.value;
    const descuentoCupon = cupones(cuponDescuento);
    
    const precioFinal = descuentos(costo, rebaja);
    const precioFinalCupon = descuentos(precioFinal, descuentoCupon);

    const parrafo = document.getElementById("Result");
    parrafo.innerText = "El precio con descuento son: $" + precioFinalCupon; 
}
