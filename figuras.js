/*//Código del cuadrado
console.group("Cuadrados")
const ladoCuadrado = 5; 
console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es: " + perimetroCuadrado+ " cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El área del cuadrado es: " + areaCuadrado + " cm²");
console.groupEnd();

//Código del triangulo
console.group("Triangulos");
const ladoTriangulo = 6; 
const ladoTrianguloDos = 6;
const ladoTrianguloTres = 4; 
const alturaTriangulo = 5.5;
console.log("Los lados del triangulo miden: " + ladoTriangulo + " cm,"+ ladoTrianguloDos + " cm,"+ ladoTrianguloTres + " cm");

const perimetroTriangulo = ladoTriangulo + ladoTrianguloDos + ladoTrianguloTres;
console.log("El perimetro del triangulo es: " + perimetroTriangulo+ " cm");

const areaTriangulo = (alturaTriangulo * ladoTrianguloTres)/2;
console.log("El área del triangulo es: " + areaTriangulo + " cm²");
console.groupEnd();

//Código del Circulo
console.group("Circulos");
//Radio
const radio = 4;
console.log("El radio del circulo es: " + radio + " cm");
//Diametro
const diametro = radio * 2;
console.log("El diametro del circulo es: " + diametro + " cm");
//Pi
const pi = Math.PI;
//Circunferencia
const perimetroCirculo = pi * diametro;
console.log("La circunferencia del circulo es: " + perimetroCirculo + " cm");
//Area
const areaCirculo = pi * (radio * radio);
console.log("El área del circulo es: " + areaCirculo + " cm²"); */

//Funciones con JavaScript

function perimetroCuadrado(lado){
    return lado*4;
}

function areaCuadrado(lado){
    return lado*lado;
}
function perimetroTriangulo(ladoU,LadoD,base){
    return ladoU+ladoD+base;
}

function areaTriangulo(base, altura){
    return (base*altura)/2;
}
function perimetroCirculo(diametro){
    return diametro*Math.PI;
}
function areaCirculo(radio){
    return (radio * radio)*Math.PI; 
}
//Interacciones con HTML
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}
function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area= areaCuadrado(value);
    alert(area);
}