// const lista = [100,200,300,400,500];

//  function esPar(numero){
//     if (numero % 2 === 0){
//         return true;
//     } else {
//         return false;
//     }
//  }

// let mediana;

function calcularMediana(lista1){
    var lista = lista1.sort(function(a,b){
        return a -b;
    });
    console.log(lista);
    var media;
    if(esPar(lista.length)){
        var a = parseInt(lista.length/2);
        var b = parseInt(lista.length/2 -1);
        console.log(a,b);
        media = (lista[a] + lista[b])/2;
    } else {
        var c = parseInt(lista.length/2);
        media = lista[c];
    }
    return media;

    function esPar(numero){
        if (numero % 2 === 0){
            return true;
        } else {
            return false;
        }
     }    
}

