// Persona - Adulto - Niño

class Persona {
    constructor(pNombre, pApellidos, pEdad) {
        this.nombre = pNombre;
        this.apellidos = pApellidos;
        this.edad = pEdad;
    }
    mostrar() {
        return `Me llamo ${this.nombre} ${this.apellidos}, y tengo ${this.edad} años`
    }
}

/* Para que adulto herede de la clase Persona usamos la palabra reservada extends, se heredan todas las propiedades y todos los métodos */

class Adulto extends Persona {
    constructor(pNombre, pApellidos, pEdad, pCoche) {
        /* super() ejecuta el constructor de persona */
        super(pNombre, pApellidos, pEdad);
        this.coche = pCoche;
    }
}



class Niño extends Persona {
    constructor(pNombre, pApellidos, pEdad, pColegio) {
        /* super() ejecuta el constructor de persona */
        super(pNombre, pApellidos, pEdad);
        this.colegio = pColegio;
    }
}

const pers1 = new Persona('Juan', 'Carlos', 1);
const adul1 = new Adulto('Javi', 'Lopez', 24, true);
const niño1 = new Niño('Lucas', 'Alcala', 12, 'Bufas');
console.log(adul1);

console.log(adul1.mostrar());
console.log(niño1.mostrar());

