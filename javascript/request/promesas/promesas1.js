/* 
Utilizamos promesas cuando queramos manejar acciones que se van a dilatar en el tiempo y no tengo controlado su fin.

Con la promesa encapsulamos la acción y obtenemos una serie de métodos para 'controlar' dicha acción.
*/

//Para crear una promesa creamos un objeto Promise
//Siempre recibe una función anónima como parámetro
//La función anónima recibe 2 parámetros, resolve y reject.
const prom = new Promise((resolve, reject) => {
    // Dentro de la promesa es donde encapsulamos la acción que vamos a tratar.
    //resolve y reject son funciones que podemos usar.
    //resolve resuelve la acción de manera positiva, reject de negativa
    const randomNum = Math.random();
    console.log(randomNum)

    if (randomNum > 0.5) {
        resolve();
    } else {
        reject()
    }
});

//Consumir la promesa= saber si se ha llamado a resolve o reject.
// then y catch reciben funciones anónimas, son la definición de resolve y reject.
prom
    .then(() => {
        console.log('La promesa se resuelve')
    })//Se ejecuta cuando sale resolve, 
    .catch(() => {
        console.log('la promesa se rechaza')
    });//Se ejecuta cuando sale reject

