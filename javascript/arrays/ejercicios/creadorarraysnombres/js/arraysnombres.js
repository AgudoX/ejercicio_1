/* Teneis que crear la estructura de archivos necesaria para resolver el ejercicio. 

Crear una array de nombres de diferentes longitudes.
Dividir el array de nombres creados en diferentes array cuyos
elementos tengan la misma longitud

['ana', 'raul', 'pepe', 'juan']
['ana']
['raul', 'pepe', 'juan'] */

const names = new Array('ana', 'Javier', 'Lucas', 'Carlos', 'alba', 'bea')

let tamaño = parseInt(prompt('Dime cuantas letras quieres que tengan los nombres:'))
/* let names2 = prompt('Dime un nombre:') */

/* function crearArray(pArray) {
    const pArray = new Array()
} */

const flow = new Array()



const createArray = function (pName, pTamaño) { //Función en la que metes en nombre de una Array y el número de letras por el que quieres filtrar el nombre y lo filtra.
    let contador = 0;

    for (let nombre of pName) {

        if (nombre.length === pTamaño) {

            flow[contador] = nombre; //Es importantísimo el orden de los factores en el operador de equivalencia.
            contador++;
        }

    }

    return flow
}

console.log(createArray(names, tamaño))
/* Podría haber hecho un switch que según el número de letras me cree una Array u otra */


/* const names = new Array('ana', 'Javier', 'Lucas', 'Carlos', 'alba', 'bea')

let tamaño = parseInt(prompt('Dime cuantas letras quieres que tengan los nombres:'))
let names2 = prompt('Dime un nombre:')

function crearArray(pArray) {
    const pArray = new Array()
}


let contador = 0;


for (let nombre of names) {
    crearArray(names2);
    if (nombre.length === tamaño) {

        names2[contador] = nombre; //Es importantísimo el orden de los factores en el operador de equivalencia.
        contador++;
    }

}

console.log(names2)
 */