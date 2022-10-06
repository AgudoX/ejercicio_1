
const frase = new Array('En un lugar de la mancha')
console.log(frase[0])



/* function filtrarLetra(pArray, pLetra) {
    contador = 0
    for (let letra of pArray) {
        for (i = 0; i < letra.length; i++) {
            if (pLetra.toLowerCase() === letra[i].toLowerCase()) {
                contador++;
            }


        }


    }
    return contador;
} */

function filtrarLetra(pArray, pLetra) {
    let contador = 0
    for (let letra of pArray) {
        /* El ha hecho dos for of, yo un for of y un for i */
        if (pLetra.toLowerCase() === letra.toLowerCase()) {
            contador++;
        }


    }

    return contador;
}

/* if (pLetra.toLowerCase === letra[i]) {
contador++;
} */
filtrarLetra(frase, 'a');
console.log(filtrarLetra(frase, 'a')); //4

