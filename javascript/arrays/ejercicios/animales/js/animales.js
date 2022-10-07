/* 
pintar la lista completa
*/

function pintarTodosAnimales(pListaAnimales) {
    let section = '<section class="flex">';
    for (let animal of pListaAnimales) {
        section += pintarUnAnimal(animal);
    }

    section += '</section>'

    return section //Poner return para que devuelva el valor ya que sino no está realizando la acción pero no está generando el valor.
}

/* document.write(pintarTodosAnimales(animals)) */  //Pintar el Array llamado animals

function pintarUnAnimal(pJsonAnimal) {
    return `
    <article class="${obtenerPeligrosidad(pJsonAnimal.peligrosidad)}">
            <h3>${pJsonAnimal.raza}</h3>
            <figure>
                <img src="${pJsonAnimal.foto}" alt="${pJsonAnimal.raza}">
            </figure>
            <p>${pJsonAnimal.peso}</p>
        </article>
    `
}

/* document.write(pintarUnAnimal(animals[1])) */ //Mammut

function obtenerPeligrosidad(pNum) {
    let peligrosidad = ''

    switch (pNum) {

        case 5:
            peligrosidad = 'peligroso'
            break;
        case 4:
            peligrosidad = 'cuidadin'
            break;
        case 3:
            peligrosidad = 'ojito'
            break;
        case 2:
            peligrosidad = 'suavecito'
            break;
        case 1:
            peligrosidad = 'docil'
            break;
    }

    return peligrosidad
}






/* Esta función crea un Array con los animales que pasean la peligrosidad (1 - 5) que se le indica a la función en el parametro  */
/* console.log(animals[1].peso);
console.log(animals.id); No se puede, hay que entrar primer en el Array para luego Enfocar al Json */

let arrayPeligrosidad = new Array()
let x = 0
/* Creo Array para almacenar los valores de peligrosidad de animals */
for (let animales of animals) {
    arrayPeligrosidad[x] = animales.peligrosidad;
    x++
}
console.log(arrayPeligrosidad)//Esto me da los numero de peligrosidad de cada elemento de la Array ¿Como hacer esto sin crear una Array?


let animalesPeligrosos = new Array()
let j = 0
let i = 0

/* Esta funcion se le mete un número de peligrosidad y devuelve una Array con los elementos que comparten esa peligrosidad, no la pinta por ello hay que usar otras funciones posteriormente para visualizarla */
function selectorPeligrosidad(pDanger/* numeros */) {
    for (let danger/* cada numero de la Array  etc*/ of arrayPeligrosidad/*ArrayPeligrosidad, no puedo usar la función para transformarlos en ojito y todo eso pq no acepta arrays esa función, solo números.*/) {
        if (danger === pDanger) {

            animalesPeligrosos[j] = animals[i];//Vacio ===>> LLeno
            j++;
        }
        i++;
    }
    return animalesPeligrosos
}

let choose = parseInt(prompt('Como de peligroso quieres que sean las bestias mostradas en pantalla, piensa bien tu respuesta (1 Te lo bajas easy - 5 Al fallo):'))

document.write(pintarTodosAnimales(selectorPeligrosidad(choose)));
console.log(arrayPeligrosidad)
console.log(obtenerPeligrosidad(1))