
const sectionDestacados = document.getElementsByTagName('section')[0];
const sectionOfertas = document.getElementsByTagName('section')[1];


/* 

// Opción junior

for (let product of arrayProductos) {
    if (product.destacado === true) {

        sectionDestacados.innerHTML += `<article>
        <h2>${(product.destacado) ? 'Destacado' : 'Oferta'}</h2>
        <h4>Nombre:${product.nombre}</h4>
        <h4>Precio:${product.precio}</h4>
        </article>`

    } else {

        sectionOfertas.innerHTML += `<article>
        <h2>${(product.destacado) ? 'Destacado' : 'Oferta'}</h2>
        <h4>Nombre:${product.nombre}</h4>
        <h4>Precio:${product.precio}</h4>
        </article>`
    }

}
 */

// Opción Pro

const destacadoOferta = pArray => {

    pArray.forEach(product => {
        if (product.destacado === true) {

            sectionDestacados.innerHTML += `<article>
            <h2>${(product.destacado) ? 'Destacado' : 'Oferta'}</h2>
            <h4>Nombre: ${product.nombre}</h4>
            <h4>Precio: ${product.precio}</h4>
            </article>`

        } else {

            sectionOfertas.innerHTML += `<article>
            <h2>${(product.destacado) ? 'Destacado' : 'Oferta'}</h2>
            <h4>Nombre: ${product.nombre}</h4>
            <h4>Precio: ${product.precio}</h4>
            </article>`
        }

    });
}

destacadoOferta(arrayProductos);