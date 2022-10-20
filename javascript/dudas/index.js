const arr = ['cuchara', 'paño', 'tenedor', 'microondas'];

// const copia = [];
// for (let i = 0; i < arr.length; i++) {
//     copia[i] = arr[i];
// }

// const copia = arr.slice();

// const copia = arr.map(el => el);

// const copia = Array.from(arr);

const copia = [...arr];

copia[2] = 'nevera';
// console.log(arr[2]);

// Bucle que recorra el array y vaya poniendo las posiciones en el otro
// función map
// función slice
// spread operator

// DESTRUCTURING!

const persona = {
    nombre: 'Mario',
    apellidos: 'Girón',
    edad: 34
}

// const nombre = persona.nombre;
// const apellidos = persona.apellidos;

const {
    nombre: name,
    apellidos: surname,
    direccion = 'C Gran Vía'
} = persona;

console.log(name, surname, direccion);

const [pos1, pos2, , pos4] = arr;

console.log(pos1, pos2, pos4);