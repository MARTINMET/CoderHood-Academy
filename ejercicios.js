///////C1E1/////// 
//(NOTA: en lo sucesivo, C1E1 corresponde a Clase 1 Ejercico 1 )
function C1E1() {
    let huevos = 3
    let barraDeChocolate = 1
    let kilosDeHarina = 0.5
    let azucar = 5

    if (huevos >= 3 && barraDeChocolate >= 1 && kilosDeHarina >= 0.5 && azucar >= 5) {
        console.log('Salen Galletitas!')
    } else {
        console.log('Faltan ingredientes')
    }
}

/////C1E2//////


function C1E2() {

    let precioDePrenda = parseInt(prompt('Ingrese el precio de la Prenda: '));
    let porcentajeDeAumento = parseInt(prompt('Ingrese porcentaje de Aumento: '));
    let SacarPorcentaje = ((precioDePrenda * porcentajeDeAumento) / 100);
    let precioFinal = precioDePrenda + SacarPorcentaje;


    if (precioFinal > 4000) {
        console.log(`el precio es ${precioFinal} y supera los 4000`)

    } else {
        console.log(`el precio es ${precioFinal}`)
    }

}

//////C1E3//////
function C1E3() {

    let repartidores = parseInt(prompt('Cantidad de Repartiodores: '));
    let esFeriado = true;
    let gananciaDia = parseInt(prompt('Ganancia del Dia: '));
    let sueldoNetoDeRepartidor;
    let gananciaDelDiaComercioFinal;

    if (esFeriado = true) {
        sueldoNetoDeRepartidor = (gananciaDia * 0.80) / repartidores
        gananciaDelDiaComercioFinal = gananciaDia - (sueldoNetoDeRepartidor * repartidores)
        console.log(`el sueldo a cada repartidor es de ${sueldoNetoDeRepartidor} P`)
        console.log(`la ganancia Final total es de ${gananciaDelDiaComercioFinal} P`)

    } else {
        sueldoNetoDeRepartidor = (gananciaDia * 0.65) / repartidores
        gananciaDelDiaComercioFinal = gananciaDia - (sueldoNetoDeRepartidor * repartidores)
        console.log(`el sueldo a cada repartidor es de ${sueldoNetoDeRepartidor} P`)
        console.log(`la ganancia Final total es de ${gananciaDelDiaComercioFinal} P`)
    }
}

/////C2E1/////

function C2E1() {

    let limite = 10;

    for (let i = 0; i <= limite; i++) {
        if (i % 2 == 0) {
            console.log(i)
        }
    };

}

/////C2E2/////


function C2E2() {

    let limite = 80;
    let NumImpares = 0;
    let NumMenoresLimiteDivididoDos = 0;

    for (let i = 0; i <= limite; i++) {
        if (i % 2 != 0) {
            NumImpares++
        };
        if (i <= limite / 2) {
            NumMenoresLimiteDivididoDos++
        };
    };
    console.log(`dentro de ${limite} tienes ${NumImpares} Numeros Impares`)
    console.log(`y ${NumMenoresLimiteDivididoDos} es la cantidad de numeros menores de ${limite} / 2 `)



}

////C2E3/////
/*Sea una variable numerica entera y positiva 'limite':
Recorrer desde 0 hasta que se cumpla una de las siguientes condiciones:
_Se llega a limite
_La cantidad de numeros pares desde 0 hasta limite es mayor a una variable
anteriormente creada llamada final
Al final del recorrido imprimir la cantidad de numeros multiplos de 3
Al final del recorrido imprimir la suma de todos los numeros entre el 0 hasta que se
termine el recorrido*/

function C2E3() {
    let limite = 10;
    let LimiteDeNumerosPares = 6;
    let MultiplosDeTres = 0;
    let NumerosPares = 0;
    let SumaNumeros = 0;

    let i = 0;
    while (i <= limite || NumerosPares > LimiteDeNumerosPares) {
        i++
        SumaNumeros = SumaNumeros + i
        if (i % 3 == 0) {
            MultiplosDeTres++
        }
        if (i % 2 == 0) {
            NumerosPares++
        }

    }

    console.log(`La suma de los numeros: ${SumaNumeros}`);
    console.log(`Los multiplos de tres: ${MultiplosDeTres}`);
}

////C2E3/////

let NumeroDeSeuencia = 7;
let num1 = 0;
let num2 = 1;
let num3;
let num4 = 1;

console.log(num1)
console.log(num2)
for (let i = 0; i < NumeroDeSeuencia; i++) {
    num3 = num1 + num2;
    console.log(num3)
    num4 = num4 + num3;
    num1 = num2;
    num2 = num3;
}