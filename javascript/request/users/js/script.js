//Usamos la herramienta fetch para acceder a cualquier recurso que se encuentre en internet.

// Una petición GET la hacemos de la siguiente manera
/* 
fetch('https://peticiones.online/api/users')
    .then((response) => {
        response.json()
            .then((json) => {
                console.log(json);
            })
            .catch(() => { })
        //el emtodo json traduce el fetch para que javascript lo pueda leer, devuelve una promesa por lo que hay que aplicarle el then y el catch.
    })
    .catch((error) => {
        console.log(error);
    });  
    */


/* Segunda forma más pro */
//Podemos lanzar varios then seguidos si en el primero de ellos retornamos una promesa.
/* 
fetch('https://peticiones.online/api/users')
    //Recupera la respuesta a la petición.
    .then(response => response.json()) 
    //Transforma la respuesta en un objeto JS
    .then(json => console.log(json.data // propiedad del json donde están los datos ))
    //Gestiona el error en caso de que lo haya.
    .catch((error) => { console.log(error) })
 */


// Async - await

async function getUsers() {
    try {
        const response = await fetch('https://peticiones.online/api/users');

        const json = await response.json();
        console.log(json.data[1].first_name)
        printUsers(json.data)
    } catch (error) {
        console.log(error)
    }
}
getUsers();

// Función que reciba un array de usuarios y los pinte dentro de una section.

function printUsers(arrUsers) {
    arrUsers.forEach(user => {
        console.log(user)
        const section = document.getElementById('section')
        const article = document.createElement('article')
        const h2 = document.createElement('h2')
        const p = document.createElement('p')
        const p2 = document.createElement('p')
        const img = document.createElement('img')

        h2.innerText = user.first_name + ' ' + user.last_name
        p.innerText = user.username
        p2.innerText = user.email
        img.src = `${user.image}`

        article.append(h2, p, p2, img);
        section.appendChild(article);

    });
}