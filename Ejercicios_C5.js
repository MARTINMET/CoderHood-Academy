// ESTRUCTURAS DE DATOS 2 

/////C5E1/////

/* 1. Alumnos aprobados
Dado el siguiente array de alumnos de una clase Obtener un array con los números de alumno de aquellos alumnos que hayan
aprobado la materia. Para approbar la matería la nota final debe ser mayor a 6.
*/

function C5E1() {
    const alumnos = [
        { numAlumno: "1234/0", nombre: "maria", nota: 7 },
        { numAlumno: "4459/2", nombre: "juan", nota: 3 },
        { numAlumno: "5877/1", nombre: "pepe", nota: 5 },
        { numAlumno: "5512/0", nombre: "josefina", nota: 9 },
        { numAlumno: "9874/0", nombre: "jaime", nota: 7 },
    ]

    function Aprobados(element) {
        return element.nota > 6
    }

    function numAlumnosAprobados(element) {
        return element.numAlumno
    }

    const alumnosAprobados = alumnos.filter(Aprobados).map(numAlumnosAprobados)

    console.log(alumnosAprobados)
}

console.log('======Ejercicio 1======')
C5E1()


/////C5E2/////


/*Dado el siguiente array de productos en stock, agregar a cada producto un atributo booleano agotado en true si el stock es mayor a
0, caso contrario false.*/
function C5E2() {
    const productos = [
        { id: "1", nombre: "lapiceras", stock: 164 },
        { id: "2", nombre: "marcadores", stock: 0 },
        { id: "3", nombre: "cartulinas", stock: 25 },
        { id: "4", nombre: "cartucheras", stock: 0 },
        { id: "5", nombre: "mochilas", stock: 4 }
    ]



    function AgregarStock(element) {

        if (element.stock > 0) {
            element.agotado = false
        } else {
            element.agotado = true
        }
        return element

    }


    const productosConStock = productos.map(AgregarStock)

    console.log(productosConStock)

}

console.log('======Ejercicio 2======')
C5E2()


/////C5E3/////

/*3. Jugadores sospechosos
En nuestro juego online tenemos un array de usuarios sospechosos que están usando un item que fue prohibido, obtener la lista
de IDs de usuarios que en su inventario tengan dicho item. El item prohibido se llama "Katana de fuego".*/


function C5E3() {
    const jugadores = [{
            ID: "1",
            clase: "mago",
            nivel: 35,
            inventario: ["Manzana", "Poción de maná", "Vara mágica"]
        },
        {
            ID: "2",
            clase: "ladron",
            nivel: 65,
            inventario: ["Daga", "Katana de fuego", "Poción de vida"]
        },
        {
            ID: "4",
            clase: "curandero",
            nivel: 73,
            inventario: ["Vara mágica", "Armadura ligera"]
        },
        {
            ID: "3",
            clase: "espadachin",
            nivel: 36,
            inventario: ["Casco de hierro", "Katana de fuego", "Pocíón de velocidad"]
        },
        {
            ID: "5",
            clase: "mago",
            nivel: 26,
            inventario: ["Carta de PecoPeco", "Oridecon", "Poción de concentración"]
        },
    ]

    function BuscaKatana(element) {
        return element.inventario.includes("Katana de fuego")
    }

    function BuscaId(element) {
        return element.ID
    }

    const usuariosSospechosos = jugadores.filter(BuscaKatana).map(BuscaId)

    console.log(usuariosSospechosos)
};

console.log('======Ejercicio 3======')
C5E3()


/////C5E4/////
/*Nuestro software de reconocimiento de voz funciona de una forma un poco particualar, y el texto reconocido nos lo envía en un
arreglo de silabas. Dado el siguiente array, obtener un string con todo el texto de corrido.*/

function C5E4() {
    const silabas = ["¡Ho", "la, ", "mun", "do! ", "¿To", "do ", "bien?", " Me", " a", "le", "gro."] //resultado esperado "¡Hola, mundo! ¿Todo bien? Me alegro.

    function sumarSilabas(SumaString, element) {
        return SumaString + element
    }

    const frase = silabas.reduce(sumarSilabas)

    console.log(frase)
}

console.log('======Ejercicio 4======')

C5E4()


/////C5E5/////

/*Tenemos un array con pedidos para nuestro negocio de comidas. Obtener un array con solo aquellos pedidos que incluyan algun
condimento extra.*/

function C5E5() {
    const pedidos = [
        { id: "1", pedido: "hamburgesa", extras: ["mayonesa"] },
        { id: "1", pedido: "pancho" },
        { id: "1", pedido: "pizza" },
        { id: "1", pedido: "pancho", extras: ["ketchup"] },
        { id: "1", pedido: "empanadas" },
    ]

    function TieneCondimentosExtra(element) {
        return element.hasOwnProperty("extras")
    }




    pedidosConExtras = pedidos.filter(TieneCondimentosExtra)
    console.log(pedidosConExtras)
}
console.log('======Ejercicio 5=======')
C5E5()



/////C5E6/////

/*Usuario y su perfil
Tenemos dos objetos, uno con la información de usuario, y otro con la información personal de dicho usuario, queremos obtener
un solo objeto con toda la información.*/

const usuario1 = { id: "123", username: "pepe24" }
const usuario1perfil = { nombre: "pepe", edad: 27, profesion: "programador" }

const usuarioConPerfil = {...usuario1, ...usuario1perfil }

console.log('======Ejercicio 6======')
console.log(usuarioConPerfil)


////SOLUCION CON FUNCION (?)

function AgregarInfo(element, element2) {
    sumaInfo = {...element, ...element2 }
    return sumaInfo
}
console.log('==Ejercicio 6 con funcion==')
console.log(AgregarInfo(usuario1, usuario1perfil))