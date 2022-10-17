const formulario = document.getElementById('formulario');

const inputNombre = document.getElementById('inputNombre');
const inputApellidos = document.getElementById('inputApellidos');
const inputTelefono = document.getElementById('inputTelefono');
const inputEmail = document.getElementById('inputEmail');
const inputDireccion = document.getElementById('inputDireccion');

const selectDepartamento = document.getElementById('selectDepartamento');

const seccion = document.querySelector('section');




formulario.addEventListener('submit', (event) => {
    event.preventDefault();


    arrClientes.push({
        nombre: inputNombre.value,
        apellidos: inputApellidos.value,
        telefono: inputTelefono.value,
        email: inputEmail.value,
        direccion: inputDireccion.value,
        departamento: selectDepartamento.value
    });
    pintarArticle(arrClientes);

})

/* const article = document.createElement('article')
const h2 = document.createElement('h2')
const h3 = document.createElement('h3')
const p = document.createElement('p')
const p2 = document.createElement('p')
const p3 = document.createElement('p')
const h4 = document.createElement('h4') */


const pintarArticle = (pArray) => {
    seccion.innerHTML = ''
    for (let articulo of pArray) {

        const article = document.createElement('article')
        const h2 = document.createElement('h2')
        const h3 = document.createElement('h3')
        const p = document.createElement('p')
        const p2 = document.createElement('p')
        const p3 = document.createElement('p')
        const h4 = document.createElement('h4')
        const img = document.createElement('img')

        h2.innerText = articulo.nombre;
        h3.innerText = articulo.apellidos;
        p.innerText = articulo.telefono;
        p2.innerText = articulo.email;
        p3.innerText = 'Calle' + ' ' + articulo.direccion;
        h4.innerText = articulo.departamento;

        switch (articulo.departamento) {
            case 'Marketing':
                articulo.img = 'https://imgs.search.brave.com/Ipx3KnnXOZqi81o9CPEQ4gycylgW286MiqQQHIpfsfI/rs:fit:400:230:1/g:ce/aHR0cHM6Ly9jZG4u/bWVtZWdlbmVyYXRv/ci5lcy9pbWFnZW5l/cy9tZW1lcy9mdWxs/LzMyLzQvMzIwNDEw/ODcuanBn'
                img.src = articulo.img
                break;
            case 'Desarrollo':
                articulo.img = 'https://imgs.search.brave.com/F6--T-OCP4p8x9sYgyJe2LAq8JkuJ5IyWMhPjFoX_6I/rs:fit:500:376:1/g:ce/aHR0cHM6Ly9wYnMu/dHdpbWcuY29tL3By/b2ZpbGVfaW1hZ2Vz/LzIyODUxNjEyNTYv/dmVnZXRhLWd0Lmpw/Zw'
                img.src = articulo.img
                break;
            case 'Diseño':
                articulo.img = 'https://imgs.search.brave.com/z8OWVhacY7yQ8bQYvYpOdy_tHUVA3jYEuwca9ORniK0/rs:fit:398:418:1/g:ce/aHR0cHM6Ly9wYnMu/dHdpbWcuY29tL21l/ZGlhL0RvZTdOcGdY/VUFFUDV3MC5qcGc'
                img.src = articulo.img
                break;
            case 'Direccion':
                articulo.img = 'https://imgs.search.brave.com/7Mz3pWZXagB6b2LM7kqV10REuzghpIVSdjQ_wjBeo9c/rs:fit:1200:720:1/g:ce/aHR0cHM6Ly9pLnl0/aW1nLmNvbS92aS93/SlhIQ1BWaURnMC9t/YXhyZXNkZWZhdWx0/LmpwZw'
                img.src = articulo.img
                break;
        }


        article.append(h2, h3, p, p2, p3, h4, img);

        seccion.appendChild(article);
    }
}

pintarArticle(arrClientes); //Hace que pinte los articles iniciales que hay en la array



/* Bola extra */

const selector = document.getElementById('buscarDepartamento')

const inputBuscarDepartamento = document.getElementById('buttonDepartamento')
const inputBuscarNombre = document.getElementById('inputBuscarNombre')
const inputButtonNombre = document.getElementById('buttonNombre')

/* Filtra y pinta por departamentos. */

let listaDepartamentos = new Array()
inputBuscarDepartamento.addEventListener('click', () => {
    listaDepartamentos = arrClientes.filter((cliente) =>
        cliente.departamento === selector.value
    )
    pintarArticle(listaDepartamentos)
})


/* Filtrar por nombre */

let listaNombres = new Array()
inputButtonNombre.addEventListener('click', () => {

    listaNombres = arrClientes.filter((cliente) =>
        cliente.nombre === inputBuscarNombre.value
    )
    pintarArticle(listaNombres)
})




