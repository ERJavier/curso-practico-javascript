// Codigo del cuadrado

console.group("Cuadrado");
//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
    return lado * 4;

} 
perimetroCuadrado();

//console.log("El perimetro del cuadrado mide: " + perimetroCuadrado + "cm");

function areaCuadrado(lado) {
    return lado * lado;

} 
//console.log("El area del cuadrado mide: " + areaCuadrado + "cm^2");

console.groupEnd();

// Codigo del Triangulo

console.group("Triangulo");
/*
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo  = 4;


console.log(
    "Los lados del triangulo miden: "
     + ladoTriangulo1 
     + "cm, " 
     + ladoTriangulo2 
     + "cm, "
     + baseTriangulo
     + "cm");
 

*/

//const alturaTriangulo = 5.5;
//console.log("La altura del triangulo es de: " + alturaTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base; 

}

//console.log("El perimetro del triangulo es: " + perimetroTriangulo + "cm");


function areaTriangulo(base, altura){
    return (base * altura) / 2;
}  

//onsole.log("El area del triangulo mide: " + areaTriangulo + "cm^2");

console.groupEnd();


// Codigo del Circulo
console.group("Circulo");

// Radio
//const radioCirculo = 4;
//console.log("El radio del circulo es: " + radioCirculo + "cm");
function diametroCirculo(radio){
    return radio * 2;
}

// Diametro
//const diametroCirculo = radioCirculo * 2;
//console.log("El diametro del circulo es: " + diametroCirculo + "cm");


// PI
// const PI = 3.1415;
const PI = Math.PI;
//console.log("PI es: " + PI);


// Circunferencia
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
//console.log("El perimetro del circulo es: " + perimetroCirculo + "cm");

// Area 
function areaCirculo(radio){
    return (radio * radio) * PI;
}
//console.log("El area del circulo es: " + areaCirculo + "cm^2");


console.groupEnd();




function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    
    const perimetro = perimetroCuadrado(value);

    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    
    const area = areaCuadrado(value);

    alert(area);
}