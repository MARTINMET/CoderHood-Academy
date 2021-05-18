///////C1E1/////// (NOTA: en lo sucesivo, C1E1 corresponde a Clase 1 Ejercico 1 )

let huevos = 3
let barraDeChocolate = 1
let kilosDeHarina = 0.5
let azucar = 5

if (huevos >= 3 && barraDeChocolate >= 1 && kilosDeHarina >= 0.5 && azucar >= 5) {
    console.log('Salen Galletitas!')
} else {
    console.log('Faltan ingredientes')
}

/////C1E2//////


function Ejercicio2() {

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