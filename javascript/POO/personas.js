class Persona {
    constructor(pNombre, pApellidos, pDireccion, pEdad) {
        this.nombre = pNombre;
        this.apellidos = pApellidos
        this.direccion = pDireccion;
        this.edad = pEdad;
    }

    mostrar() {
        return `Me llamo ${this.nombre} ${this.apellidos}, vivo en ${this.direccion}, y tengo ${this.edad} años`
    }
}


const persona1 = new Persona('Javier', 'Agudo', 'Badajoz joz joz', '22');

console.log(persona1.mostrar())



const persona2 = new Persona('Clotilda', 'Orzobuey', 'Jumboland', '233');
console.log(persona2.mostrar());

const persona3 = new Persona('Roberto', 'to to to', 'Timon y pumba pumba pumba', '10');

console.log(persona3.mostrar());

