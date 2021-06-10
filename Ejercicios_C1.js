//////CLASE 1/////////


///////C1E1/////// 
//(NOTA: en lo sucesivo, C1E1 corresponde a Clase 1 Ejercicio 1 )


/*Emanuel quiere cocinar galletitas y quiere un programa que lo ayude a saber que debe
comprar y en caso que cuente con todos los ingredientes, informar que puede cocinar las
galletas. La receta pide los siguientes ingredientes
3 huevos
1 barra de chocolate
0.5 kilos de harina
5 cucharadas de azucar
Los ingredientes que tiene Ema tienen que ser variables al inicio del programa que sean
faciles de editar*/

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


/*Una tienda de ropa desea tener un programa que le permita calcular los aumentos a sus
prendas, para eso se tienen los datos*/

let precioDePrenda = parseInt(prompt('Ingrese el precio de la Prenda: '));
let porcentajeDeAumento = parseInt(prompt('Ingrese porcentaje de Aumento: '));
let SacarPorcentaje = ((precioDePrenda * porcentajeDeAumento) / 100);
let precioFinal = precioDePrenda + SacarPorcentaje;


if (precioFinal > 4000) {
    console.log(`el precio es ${precioFinal} y supera los 4000`)

} else {
    console.log(`el precio es ${precioFinal}`)
}


//////C1E3//////

/*En una pizzeria requieren un programa que calcule cuanto cobraran neto los repartides al
final del dia (Todos cobran igual). Se tienen los siguientes datos obligatorios:
.repartidores (Cantidad de repartidores, puede ser cualquier numero entero)
.esFeriado (true si es Feriado, false si no)
.gananciaDelDia (Cuanto recaudo la pizzeria para distribuir a los empleados)
.porcentajeParaSueldos (Un porcentaje de gananciaDelDia)
.sueldoNetoDeRepartidor (Cuanto gana en bolsillo el repartidor)
.gananciaDelComercioFinal (Cuanto gana el comercio una vez pagados los sueldos y
demas)

Se sabe que:
En feriados: porcentajeParaSueldos es del 80% de gananciaDelDia mientras que en
dias normales, es del 65%*/

let repartidores = parseInt(prompt('Cantidad de Repartiodores: '));
let esFeriado = true;
let gananciaDia = parseInt(prompt('Ganancia del Dia: '));
let sueldoNetoDeRepartidor;
let gananciaDelDiaComercioFinal;

if (esFeriado) {
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
