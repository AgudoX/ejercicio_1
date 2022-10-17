// Recuperarel texto del input nombre según vayamos escribiendo.


const inputNombre = document.getElementById('inputNombre')


inputNombre.addEventListener('input' /* Cada vez que se escriba algo en el elemento inputNombre se ejecuta la función. */, (event) => {
    console.log(event.target.value) //Muestra en consola los valores que se escriban en el formulario, necesitamos acceder a value que es el atributo del input que modificamos para mostrar texto en la casilla de input
})


/* input, change, focus y blur son 4 eventos que realizan diferentes acciones al hacer focus, dejar de hacer....
Ver en Mozilla Documentation.*/


const pes = document.querySelector('div p')
const paises = document.getElementById('selectPais')
// El evento que nos indica cuando se ha cambiado el valor de un select se llama change.
const textCountry = document.getElementById('pPais')


//Recuperar el texto del input nombre según vayamos escribiendo 
inputNombre.addEventListener('input', (event) => {

    pes.innerText = event.target.value;
})


//Recuperar el valor del desplegable cuando cambie


paises.addEventListener('change', (event) => {

    console.log(event.target.value); //Cada vez que cambie el valor del select te muestra en consola el value que le he dado en HTML.

})

paises.addEventListener('change', (event) => {

    let paisSeleccionado = ''

    switch (event.target.value) {
        case 'es':
            paisSeleccionado = '🏳‍🌈';
            break;
        case 'fr':
            paisSeleccionado = '👁‍🗨'
            break;

        case 'ge':
            paisSeleccionado = '❤'
            break;

        case 'po':
            paisSeleccionado = 'hola'
            break;

    }

    textCountry.innerText = paisSeleccionado;
})


//Recuperar el valor del campo de tipo range y, si el valor está entre 18 y 65, escribir otra cosa.

const pEdad = document.getElementById('pEdad')

const selectEdad = document.getElementById('selectEdad')

selectEdad.addEventListener('input', (event) => {

    (parseInt(event.target.value) >= 17 && parseInt(event.target.value) <= 65) ? pEdad.innerText = 'A TRABAJAR' : pEdad.innerText = 'A MARINA DORS'
})


//Cuando pulse el botón enviar del formulario voy a generar un objeto con el valor del nombre, del país y de la edad.

/* 
- Capturar el evento del envio de formulario 
- Eliminar la acción por defecto del formulario cuando se envia el form.
- Crear el objeto a partir de los valores de los campos  

*/

const formulario = document.getElementById('formulario')

formulario.addEventListener('submit', (event) => {
    event.preventDefault();//Se carga la funcionalidad por defecto del elemento que lo recibe, en este caso el form.

    const datos = new Object({
        nombre: inputNombre.value,
        edad: selectEdad.value,
        pais: paises.value

    })
    console.log(datos)
});
