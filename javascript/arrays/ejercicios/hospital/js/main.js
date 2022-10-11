/* 
    <article>
        <h2>Nombre</h2>
        <h3>Apellido</h3>
        <small>18</small>
        <p>Diagnóstico <br>
            NumeroSS</p>
    </article>
     */





function pintarPaciente(pPaciente) {
    document.write(`
    <article>
    <h2>${pPaciente.nombre}</h2>
    <h3>${pPaciente.apellidos}</h3>
    <small>${pPaciente.edad}</small>
    <p>${pPaciente.diagnostico} <br>
    ${pPaciente.numeroSS}</p>
</article>
`)
}

const pintarLista = function (pLista) {
    pLista.forEach(casualtie => pintarPaciente(casualtie));
}

/* pintarLista(pacientes) */// Pinta lista completa
const pacientesEdad = new Array()

const filtrarEdad = (pLista, pEdadMin, pEdadMax) =>
    pLista = pacientes.filter(casualtie => casualtie.edad >= pEdadMin && casualtie.edad <= pEdadMax)

/* pintarLista(filtrarEdad(pacientesEdad, 30, 45)); */

const pacientesDiagnostico = new Array()

const filtrarDiagnostico = (pLista, pDiagnostico) =>
    pLista = pacientes.filter(casualtie => casualtie.diagnostico === pDiagnostico)

/* pintarLista(filtrarDiagnostico(pacientesDiagnostico, 'gripe')) */


/* Filtrar con gripe y entre 25 y 50 años */
/* Creo un Diagnostico 2.0 que me permita aplicar doble filtro mediante callbacks */


const filtrarDiagnostico2 = (pLista, pDiagnostico) =>
    pLista = pLista.filter(casualtie => casualtie.diagnostico === pDiagnostico)
/* 
pintarLista(filtrarDiagnostico2(filtrarEdad(pacientesEdad, 25, 50), 'gripe')) */

const arrayBonus = new Array()

const filtrarNumeroSs = function (pLista) {
    pLista.forEach((casualtie, pIndex) => casualtie.numeroSS.at(-1) === '0' ?
        arrayBonus[pIndex] = casualtie : false)

    return arrayBonus;
}



pintarLista(filtrarNumeroSs(pacientes))