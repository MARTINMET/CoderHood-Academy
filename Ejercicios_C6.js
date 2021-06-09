///////CLASE 6//////

//ERRORES!

////////C6E1////////

/*Crear una funcion que recibe tres parametros chance, mensaje y resultado.
chance: es un numero que indica el porcentaje que tiene esa funcion de arrojar un error.
si chance = 20 entonces la funcion tiene 20% de posibilidades de disparar un error
mensaje: el mensaje que tiene que tener el error que puede disparar la funcion
resultado: es cualquier cosa, un numero, un texto, un objeto, etc. es lo que retorna la
funcion si no arrojo un error*/

function C6E1() {

    function randomFunction(chance, mensaje, resultado) {
        let probabilidad = chance / 100;
        if (Math.random() < probabilidad) {
            throw new Error(mensaje);

        }
        return resultado;
    }



    try {
        let resultado = randomFunction(20, 'ERROR!', 6)
        console.log('salio todo bien', resultado);

    } catch (error) {
        console.log(error.message);
    } finally {
        console.log('Sabroso')
    }
};

console.log('======Ejercicio 1======')
C6E1()


////////C6E2////////
/*
Crear una funcion llamada pedirInformacion que no recibe parametros y
que devuelve el siguiente objeto que corresponde a los datos de un usuario: let persona =
{ id: 19310, nombre: "Bautista", apellido: "Di Santo" }

La funcion pedirInformacion tiene:
25% de posibilidades de disparar un error por desconexion de internet, el nombre del
error es 'NetworkError'
18% de posibilidades de disparar un error por error del servidor, el nombre del error es
'InternalError'
10% de posibilidades de disparar un error por una anomalia, el nombre del error es
'AlienError'Cuando se llame a la funcion, informar:
Si hubo un error, informar segun el mensaje del error:
NetworkError => informar "Hubo un problema en la conexion de internet"
InternalError => informar "Hubo un error interno en el el servidor"
AlienError => informar "Una anomalia intercepto la informacion"
Si no hubo un error, informar el objeto persona*/

function C6E2() {
    function pedirInformacion() {
        let persona = { id: 19310, nombre: "Bautista", apellido: "Di Santo" }

        if (Math.random() < 0.25) {
            throw new Error('NetworkError');

        } else if (Math.random() < 0.18) {
            throw new Error('InternalError');

        } else if (Math.random() < 0.10) {
            throw new Error('AlienError');

        } else
            return persona
    }

    try {
        let resultado = pedirInformacion()
        console.log('Todo ok: ', resultado)

    } catch (error) {
        if (error.message === 'NetworkError') {
            console.log("Hubo un problema en la conexion de internet")
        } else if (error.message === 'InternalError') {
            console.log("Hubo un error interno en el el servidor")
        } else if (error.message === 'AlienError') {
            console.log("Una anomalia intercepto la informacion")
        }
    } finally {
        console.log('maravilloso')
    }
};

console.log('======Ejercicio 2======')
C6E2()


////////C6E3////////

/*3) Descarga de informacion prohibida
Crear una funcion llamada pedirUsuario que retorna un usuario al azar de la siguiente
lista:
let lista = [{
 id: 19310,
 nombre: "Bautista",
},{
 id: 90010,
 nombre: "Ema",
},{
 id: 00519,
 nombre: "Lucas",
},{
 id: 00000,
 nombre: "Meison",
}]
La funcion pedirUsuario disparar un error llamado 'ForbiddenInformation' si el usuario
elegido es el del id = 00000
Llamar a la funcion pedirUsuario dentro de la funcion pedirInformacion para cambiar el
retorno de la funcion pedirInformacion.
Considerar que la funcion pedirInformacion ahora tiene que capturar un error, cuando la
capture debe disparar un error 'NetworkError'.
Ejemplo:
function pedirUsuario(){
 // puede disparar un error, devuelve un usuario
}
function pedirInformacion(){
 let usuario = pedirUsuario(); // considerar 'pedirUsuario' p
 // el resto de la funcion
 return usuario;
}*/

function C6E3() {

    function pedirUsuario() {

        let lista = [{
            id: 19310,
            nombre: "Bautista",
        }, {
            id: 90010,
            nombre: "Ema",
        }, {
            id: 10019,
            nombre: "Lucas",
        }, {
            id: 00000,
            nombre: "Meison",
        }];

        let numeroRandom = Math.floor((Math.random() * 4));
        let usuarioAlAzar = lista[numeroRandom];

        if (usuarioAlAzar.id === 0) {
            throw new Error('ForbiddenInformation')
        } else return usuarioAlAzar

    };

    function pedirInformacion() {

        try {
            let usuario = pedirUsuario();
            console.log(usuario);

        } catch (error) {
            console.log('NetworkError')
        }
    };

    pedirInformacion();

}
console.log('======Ejercicio 3======')
C6E3()