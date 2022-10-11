/*
* Pintar lista de productos, consiste en recorrer la lista e ir pintando producto a producto.
*/

function printOneProduct(pProduct) {

    let clase = (pProduct.stock) ? 'stock' : 'sinstock'

    document.write(`<article class="${clase}">
        <h2>${pProduct.name}</h2>
        <p>Precio: ${pProduct.price}€</p>
        <p>Categoria: ${pProduct.category}</p>
        <hr>
    </article>`)
}

function printProducts(pProductsList) {
    for (let product of pProductsList) {
        printOneProduct(product);
    }
}

//printProducts(products)

/**
 * filtrar productos que esten entre 1 y 3 euros (ojo capacidad de abstracción).
 */

function filterByPrice(pProducts, pMinPrice, pMaxPrice) {
    const filterList = new Array();
    let contador = 0;

    for (let product of pProducts) {
        if (product.price >= pMinPrice && product.price <= pMaxPrice) {
            //habemus producto por precio.
            filterList[contador] = product;
            contador++;
        }

    }
    return filterList;
}

//opcion 1 variable
let priceIn1or3 = filterByPrice(products, 1, 3)
//printProducts(priceIn1or3);

//opcion2 callback
//printProducts(filterByPrice(products, 5, 6));


/**
 * filtrar por categoria
 */

const filterByCategory = (pProductList, pCategory) => {
    const filterList = new Array();
    let contador = 0;

    for (let product of pProductList) {
        if (product.category === pCategory) {
            filterList[contador] = product
            contador++;
        }
    }

    return filterList;

}


//printProducts(filterByCategory(products, 'proteinas'))

/*
*   filtrar por disposicion que tenga o no tenga stock
*/

const filterByStock = (pProductList, pStock) => {
    const filterList = new Array();
    let contador = 0;

    for (let product of pProductList) {
        if (product.stock === pStock) {
            filterList[contador] = product;
            contador++
        }
    }
    return filterList;
}

let productWithStock = filterByStock(products, true);
// printProducts(productWithStock);


/*
* filtrar productos entre 1 y 3 euros que tengan stock
*/

//opcion 1 con varibles 
let listaProductos1y3 = filterByPrice(products, 1, 3);
let listaProductos1y3conStock = filterByStock(listaProductos1y3, true);
printProducts(listaProductos1y3conStock);

//opcion 2 callback

printProducts(filterByPrice(filterByStock(products, true), 1, 3))