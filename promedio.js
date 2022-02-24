/*const lista = [100,200,300,400,500];

let sumaLista1 = 0;
for (let i= 0; i< lista.length ;i++){
    sumaLista1 += lista[i];
    console.log(sumaLista1);
}

const promedio = sumaLista1/lista.length;
*/

function calcularMediaAritmetica(lista){
    // let sumaLista = 0
    // for (let i= 0; i< lista.length ;i++){
    //     sumaLista += lista[i];
    // }
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, elementoActual){
            return valorAcumulado + elementoActual;
        }
    );
    return sumaLista/lista.length;
}

calcularMediaAritmetica([])
