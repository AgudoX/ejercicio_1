fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then((json) => {
        console.log(json.results)
        pintarJson(json.results)
    })
    .catch(error => console.log(error))


const pintarJson = (arrRym) => {
    arrRym.forEach(character => {

        const section = document.getElementById('section')
        const article = document.createElement('article')
        const h2 = document.createElement('h2')
        const h3 = document.createElement('h3')
        const p = document.createElement('p')
        const p2 = document.createElement('p')
        const img = document.createElement('img')

        h2.innerText = 'Nombre: ' + character.name
        h3.innerText = 'Género: ' + character.gender
        p.innerHTML = '<strong>Especie: </strong>' + character.species
        p2.innerText = 'Natural de ' + character.origin.name
        img.src = `${character.image}`

        if (character.status === 'Alive') { article.classList.add('verde') } else { article.classList.add('rojo') }

        article.append(h2, h3, p, p2, img)
        section.appendChild(article)

    });
}