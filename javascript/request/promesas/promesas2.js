const sumar = function (a, b) {

    const prom = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b);
        }, 3000)
    });
    /* 
        setTimeout(() => {
            /* Esto no funciona pq su ejecución es asincrona 
            return a + b
        }, 3000) */
    return prom;
}

/* Como sumar es una función que devuelve una promesa se le aplican cosas de promesas */
sumar(8, 9)
    .then((result) => {
        console.log('La suma es ' + result)
    })


/* console.log(sumar(8, 9)); */
