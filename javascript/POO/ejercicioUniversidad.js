

/* Si estoy usando el objeto profesor solo puedo usar en el los metodos definidos dentro de la clase profesor. */
class Profesor {

    constructor(pNombre, pApellidos, pExperiencia) {
        this.nombre = pNombre;
        this.apellidos = pApellidos;
        this.experiencia = pExperiencia;
    }

    mostrarProfesor() {
        return `PROFESOR: nombre: ${this.nombre}, apellidos: ${this.apellidos}, experiencia: ${this.experiencia} \n`
    }
}

class Asignatura {

    constructor(pNombreAsignatura, pProfesor) {
        this.asignatura = pNombreAsignatura;
        this.profesor = pProfesor
    }

    mostrarAsignaturaProfesor() {

        return `ASIGNATURA(${this.asignatura})
        Asignatura impartida por:
         ${this.profesor.mostrarProfesor()}`

    }
}

class Estudiante {

    constructor(pNombre, pApellidos) {
        this.nombre = pNombre;
        this.apellidos = pApellidos;
        this.asignatura = new Array()

    }

    agregarAsignatura(pAsignatura) {
        this.asignatura.push(pAsignatura);

    }

    /* Es IMPORTANTE saber de que tipo es una variable para saber que funciones aplicarle, es especialmente importante con los objetos. */
    mostrarEstudiante() {
        let result = `ESTUDIANTE (nombre: ${this.nombre}, apellidos: ${this.apellidos})
        Estas son las asignaturas que cursa:`
        for (let asignatura of this.asignatura) {
            result += asignatura.mostrarAsignaturaProfesor();
        }
        return result
    }
}

class Universidad {
    constructor(pNombre) {
        this.nombre = pNombre;
        this.alumnos = new Array();
    }

    agregarAlumno(estudiante) {
        this.alumnos.push(estudiante)
    }

    mostrarUniversidad() {
        let result = `UNIVERSIDAD(nombre: ${this.nombre})`
        for (let alumn of this.alumnos) {
            result += '\n'/* Salto linea */ + alumn.mostrarEstudiante();
        }
        return result;
    }
}


let profesor1 = new Profesor('Ramón', 'García', 5)
let profesor2 = new Profesor('Rosa', 'Martinez', 9)
console.log(profesor1.mostrarProfesor())
console.log(profesor2.mostrarProfesor())

let algebra = new Asignatura('Álgebra', profesor1)
let electronica = new Asignatura('Electrónica', profesor2)
let fisica = new Asignatura('Física', profesor2)

let estudiante1 = new Estudiante('Pepe', 'Ortiz')
let estudiante2 = new Estudiante('Ana', 'Jiménez')
let estudiante3 = new Estudiante('Lola', 'López')

estudiante1.agregarAsignatura(algebra)
estudiante1.agregarAsignatura(fisica)
estudiante2.agregarAsignatura(electronica)
estudiante3.agregarAsignatura(algebra)
estudiante3.agregarAsignatura(electronica)
estudiante3.agregarAsignatura(fisica)

let uni1 = new Universidad('UC3M')
uni1.agregarAlumno(estudiante1)
uni1.agregarAlumno(estudiante2)
uni1.agregarAlumno(estudiante3)
uni1.mostrarUniversidad()
console.log(uni1.mostrarUniversidad())