const dividir = (a, b) => {

    const prom = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (b !== 0) {
                resolve(a / b)
            } else {
                reject(console.log('Rechazo el resultado'));
            }
        }, 2000)

    })
    return prom
}

dividir(4, 0)
    .then((result) => {
        console.log(result)
    })
    .catch((response) => {
        response
    })


// ASYNC - AWAY: Otra sintaxys que hace lo mismo que then() catch(). Este es más óptimo para concatenar promesas.


// 1. Debemos colocar la palabra await delante del método que nos devuelva la promesa.

// 2. El valor que recibimos en el then lo colocamos como una variable delante de la ejecución del método (Podemos quitar el then)

// 3. Colocamos la palabra async delante del ámbito de función donde estemos ejecutando la promesa, si no está dentro de una función creamos una. LO VAN A ELIMINAR EN BREVE

// 4. Mediante el bloque try-catch obtenemos el posible error que pueda venir tras el rechazo de la promesa.

async function main() {
    try {
        const result = await dividir(7, 3);
        console.log(result);
        const result2 = await dividir(result, 4);
        console.log(result2);
    } catch (error) {
        error
    }
}

main()





