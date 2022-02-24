//Helpers
function esPar(n){
    return (n % 2 === 0);
}


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

//Calculadora de Mediana
function medianaSalarios(lista){
    const mitad = parseInt(lista.length/2);

    if (esPar(lista.length)){
        const mitad1 = lista[mitad - 1];
        const mitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica([mitad1, mitad2]);
        return mediana;
    } else {
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}

//Mediana General
const salariosMex = mexico.map(
    function(persona){
        return persona.salary;
    }
);

const salariosConSorted = salariosMex.sort(function(a,b){
    return a-b;
});




const medianaGeneralMex = medianaSalarios(salariosConSorted);

//Mediana del top 10%
const splaceStart = (salariosConSorted.length * 90)/100;
const splaceCount = salariosConSorted.length - splaceStart; 
const salariosMexTop10 = salariosConSorted.splice(splaceStart, splaceCount)
const medianaTop10Mex = medianaSalarios(salariosMexTop10);

console.log(medianaGeneralMex, medianaTop10Mex);

