/*var lista = [1,2,5,3,4,5,48,1,2,5,4,3,2,1,4,7,1,2];
const lista1count= {};
lista.map(function (elemento){
    if (lista1count[elemento]){
        lista1count[elemento] += 1;
    } else {
        lista1count[elemento] = 1;
    }
});

const listaArray = Object.entries(lista1count).sort(
        function(valorAcumulado, valorActual){
            return valorAcumulado[1] - valorActual[1];
        }
);

const moda = listaArray[listaArray.length - 1]
console.log(moda); */

function calcularModa(lista){
    const lista1count= {};
    lista.map(function (elemento){
        if (lista1count[elemento]){
            lista1count[elemento] += 1;
        } else {
            lista1count[elemento] = 1;
        }
    });

    const listaArray = Object.entries(lista1count).sort(
            function(valorAcumulado, valorActual){
                return valorAcumulado[1] - valorActual[1];
            }
    );

    const moda = listaArray[listaArray.length - 1]
    console.log(moda);
    return moda;
}