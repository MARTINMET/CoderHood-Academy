////////////CLASE 4/////////////////

////////C4E1////////

//Dado un array de Usuarios indicar si hay un usuario llamado lucas//


function C4E1() {

    let Usuarios = [{
            nombre: 'Ema',
            edad: 27,
            habilidades: ['html, css, JS, react']
        },

        {
            nombre: 'Maison',
            edad: 27,
            habilidades: ['mongodb, node, express']
        },


    ]

    let UserLucas = false

    for (i = 0; i < Usuarios.length; i++) {
        if (Usuarios[i].nombre === 'Lucas') {
            UserLucas = true
        }
    }
    console.log(UserLucas)

};
console.log(`Ejercicio 1`)
C4E1()


////////C4E2////////
/* dado un array con lista de autos:
nombre del duenio
valor de la reparacion
tiemnpo que tarda la reparacion
lista de respuestos necesarios

el dueño del taller quiere saber
1.cual es la reparacion mas cara y los repuestos que necesita
2.todos las reparaciones para personas que se llamen Juan
3.el precio total de los arreglos.

*/
function C4E2() {
    let autos = [{
            nombreDuenio: 'Martin',
            ValorDelaReparacion: 10000,
            TiempoEstimadoDeReparacion: 64, // horas Totales
            listaDeRepuestos: ['paragolpes', 'luces', 'chirimoya', 'sototo', 'burro de arranque']
        },
        {
            nombreDuenio: 'Pepe',
            ValorDelaReparacion: 5000,
            TiempoEstimadoDeReparacion: 6,
            listaDeRepuestos: ['luces', 'cables locos', ]
        }, {
            nombreDuenio: 'Juan',
            ValorDelaReparacion: 8000,
            TiempoEstimadoDeReparacion: 48,
            listaDeRepuestos: ['paragolpes trasero']
        },
        {
            nombreDuenio: 'Juan',
            ValorDelaReparacion: 6000,
            TiempoEstimadoDeReparacion: 24,
            listaDeRepuestos: ['Puerta Delantera Conductor']
        },
    ]

    function ReparacionMasCara() {

        let autoMasCaro = {
            ValorDelaReparacion: 0
        }

        for (i = 0; i < autos.length; i++) {
            const auto = autos[i]

            if (auto.ValorDelaReparacion > autoMasCaro.ValorDelaReparacion) {
                autoMasCaro = auto
            }
        }

        console.log(autoMasCaro)
    };


    function RepuestoJuan() {
        let RepuestosparaJuan = []

        for (i = 0; i < autos.length; i++) {
            const auto = autos[i]
            if (auto.nombreDuenio === 'Juan') {
                RepuestosparaJuan.push(auto.listaDeRepuestos)
            }
        }

        console.log(`los repuesto para todos los clientes con nombre Juan: ${RepuestosparaJuan}`)
    };



    function PrecioTotalDeReparaciones() {
        let PrecioTotal = 0

        for (i = 0; i < autos.length; i++) {
            PrecioTotal += autos[i].ValorDelaReparacion
        }

        console.log(`el precio total de las reparaciones es de : $ ${PrecioTotal}`)



    };

    console.log('1.cual es la reparacion mas cara y los repuestos que necesita: ')
    ReparacionMasCara(autos)
    console.log(`2.todos las reparaciones para personas que se llamen Juan:`)
    RepuestoJuan(autos)
    console.log(`3.el precio total de los arreglos: `)
    PrecioTotalDeReparaciones(autos)

};
console.log(`Ejercicio 2`)
C4E2()






////EXTRA///////

////COUNTBITS/////

var countBits = function(n) {
    let binaryNumber = n.toString(2);
    let countbinary = 0;


    for (let i = 0; i < binaryNumber.length; i++) {
        countbinary++
    }
    return parseInt(countbinary / 2)
};



//console.log(countBits(1234))


////fizzBuzz/////

function fizzBuzz(n) {
    for (i = 1; i <= n; ++i) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log(`${i} Fizz Buzz`)
        } else if (i % 3 == 0) {
            console.log(`${i} Fizz`)
        } else if (i % 5 == 0) {
            console.log(`${i} Buzz`)

        } else {
            console.log(i)
        }

    }
}