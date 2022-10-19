/* tareas */

const inputTarea = document.getElementById('inputTarea');
const selectTarea = document.getElementById('selectTarea')
const buttonGuardar = document.getElementById('buttonGuardar')
const divTareas = document.querySelector('.articulos')




const pintarTareas = (array) => {
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

