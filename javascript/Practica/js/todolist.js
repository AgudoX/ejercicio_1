/* tareas */

const inputTarea = document.getElementById('inputTarea');
const selectTarea = document.getElementById('selectTarea')
const buttonGuardar = document.getElementById('buttonGuardar')
const divTareas = document.querySelector('.articulos')
const selectPrioridad = document.getElementById('selectPrioridad')



let i = 1
buttonGuardar.addEventListener('click', () => {

    tareas.push({
        idTarea: 2 + i,
        titulo: `${inputTarea.value}`,
        prioridad: `${selectTarea.value}`
        /*  modificar la prioridad con un listener en el select*/
    })
    i++
    inputTarea.value = ' ' //Borra el texto del input cada vez que se guarda
    pintarTareas(tareas)
})


const pintarTareas = (array) => {
    divTareas.innerHTML = ' '//Borra las tareas para meter la nueva array

    for (let task of array) {

        const article = document.createElement('article')
        const h3 = document.createElement('h3')
        const inputEliminar = document.createElement('input')

        article.classList.add(task.prioridad)
        h3.innerText = task.titulo;
        inputEliminar.type = 'button'
        inputEliminar.value = 'Eliminar'

        article.append(h3, inputEliminar);
        divTareas.append(article);

        inputEliminar.addEventListener('click', (event) => {
            event.target.parentNode.innerHTML = ' '

        })
    }

}

pintarTareas(tareas)

const taskFilter = (array) => {

    selectPrioridad.addEventListener('input', (event) => {
        let predeterminada = 'Selecciona una prioridad'; //Se utiliza para pintar toda la array cuando no se este filtrando nada, se iguala al valor predeterminado y se le mete la función para pintar toda la array.

        if (event.target.value !== predeterminada) {
            let listaTareas = array.filter(task => task.prioridad === event.target.value)
            pintarTareas(listaTareas) //Devuelve una array filtrando pro prioridades
        } else {
            pintarTareas(array)
        }
    })
}

taskFilter(tareas)



