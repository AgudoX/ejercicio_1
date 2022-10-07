//enlaceis el js al html para que funcione

// la aplicación deberá decirme si frase o sentencia es un palindromo

//A luna ese anula (lowercase y espacios en blanco)



/* Copiar ejercicio */


/* const palindromo = frase = 'A luna ese anula'
let contador = 0

const saco = new Array()

for (let caracter of palindromo) {
    console.log(caracter)

    if (caracter.toLowerCase() !== ' ') {

        saco[contador] = caracter.toLowerCase();

    }
    contador++
}
 */

let frase = 'Juan Antonio el profesor pesado';
const saco = new Array();
let i = 0;

for (let caracter of frase) {
    if (caracter !== ' ') {
        saco[i] = caracter.toLowerCase();
        i++;
    }
}

const sacoInvertido = new Array();
let j = 0;
for (let i = saco.length - 1; i >= 0; i--) {
    sacoInvertido[j] = saco[i]
    j++;
}

let sonIguales = true;
for (let i = 0; i < saco.length; i++) {
    if (saco[i] !== sacoInvertido[i]) {
        sonIguales = false;
        break;
    }
}
console.log(sonIguales);


