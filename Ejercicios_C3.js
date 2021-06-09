////////CLASE3//////////

// MODULARIZACION-Y-FUNCIONES 😎


//////C3E1//////////


// 1. Hacer una función que reciba un numero y que retorne verdadero si es par o falso en caso contrario.

function ValidarPAr(valor) {
    if (valor % 2 === 0) {
        return true
    } else {
        return false
    }
}

///Otra resolucion:

function ValidarPAr(valor) {
    return (valor % 2 === 0)
}



/////C3E2//////

// 2. Hacer una función que reciba una serie de palabras separadas por espacios y que imprima la misma frase pero en orden inverso.


function ReordenaPalabras(p1, p2, p3) {
    return p3 + ' ' + p2 + ' ' + p1
}
//let palabra1 = prompt(`Primera palabra: `)
//let palabra2 = prompt(`Segunda palabra: `)
//let palabra3 = prompt(`Tercera palabra: `)
//console.log(ReordenaPalabras(palabra1, palabra2, palabra3))

//////VARIANTE DEL EJERCICIO //////

function reverseString(n) {
    let nReverse = ''

    for (i = n.length - 1; i >= 0; i--) {
        nReverse += n[i];
    }
    return nReverse
}

//console.log(reverseString('hola!'))


// Hacer una función que reciba como parámetro tres números enteros y que lo ordene de mayor a menor.

function ordenar(num_1, num_2, num_3) {
    let max = maxNum(num_1, num_2, num_3);
    let min = minNum(num_1, num_2, num_3);
    let medio = num_1 + num_2 + num_3 - max - min;
    return max + " " + medio + " " + min;
}
// console.log(ordenar(33, 77, 36)); // 77 36 33