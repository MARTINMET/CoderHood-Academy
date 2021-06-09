//////CLASE2////////

/////C2E1/////

/*Sea una variable numerica entera y positiva 'limite':
- Recorrer desde 0 hasta `limite`
- Imprimir en pantalla los numeros pares */


function C2E1() {

    let limite = 10;

    for (let i = 0; i <= limite; i++) {
        if (i % 2 == 0) {
            console.log(i)
        }
    };

}

/////C2E2/////

/*Sea una variable numerica entera y positiva 'limite':
Recorrer desde 0 hasta limite
Imprimir al final del programa la cantidad de numeros impares
Imprimir al final del programa la cantidad de numeros menores de limite / 2*/


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
Se llega a limite
La cantidad de numeros pares desde 0 hasta limite es mayor a una variable
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




////C2E4/////

//La secuencia de Fibonacci


function C2E4() {
    let NumeroDeSeuencia = 9;
    let num1 = 0;
    let num2 = 1;
    let num3 = 0;

    console.log(num1)
    console.log(num2)
    for (let i = 0; i < NumeroDeSeuencia; i++) {
        num3 = num1 + num2;
        console.log(num3)
        num1 = num2;
        num2 = num3;
    }
}