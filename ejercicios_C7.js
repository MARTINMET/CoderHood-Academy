//ASINCRONISMO

//////C7E1/////

//PARTE A

/* Reescribir la siguiente función tal que retorne una promesa que se cumpla luego de 3 segundos (usar setTimeout), 
devolviendo el mismo resultado que la función dada.

function dividirNumeros(dividendo, divisor) {
 return dividendo / divisor;

}*/

function dividirNumeros(dividendo, divisor) {

    return new Promise(function(resolve, reject) {

        try {
            let resultado = dividendo / divisor
            if (divisor === 0) {
                throw new Error('no se puede dividir por cero');
            } else
                setTimeout(() => {
                    resolve(resultado)
                }, 3000)

        } catch (error) {
            setTimeout(() => {
                reject(error.message)
            }, 3000)



        }
    })

};

// PARTE B

/*Usando then y catch completar la función "programa" dada para llamar a dividirNumeros e imprimir el resultado o imprimir un
mensaje de error si ocurriera. Para provocar un error pueden enviar 0 como divisor.*/


function programaB() {
    dividirNumeros(200, 4).then((resultadoFinal) => {
        console.log(`salio todo OK, el resultado es: ${resultadoFinal}`)
    }).catch((error) => {
        console.log(`ups! error: ${error}`)
    });
}

programaB()
console.log('checkpoint')


// PARTE C

//Reescribir la función programa del insiso anterior para que use async y await

async function programaC() {
    try {
        resultadoFinal = await dividirNumeros(4, 2)
        console.log(`salio todo OK, el resultado es: ${resultadoFinal}`)
    } catch (error) {
        console.log(`ups! error: ${error}`)
    }
};

programaC()
console.log('checkpoint')