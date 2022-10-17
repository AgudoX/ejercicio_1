/* Los objetos tienen diferentes tipos, y según el tipo siguen diferentes normas. */

/* Los nombres de las clases se ponen la primera en mayúscula. */
/* La clase Coche genera objetos de tipo coche. */

class Coche {
    constructor(pMarca, pModelo, pColor) {
        /* Se ejecuta cada vez que yo cree un objeto de la clase coche. */
        console.log(pMarca, pColor, pModelo)

        /* Para referirnos al coche que está ejecutando el constructor usamos this */

        /* Esto se llama inicializar las propiedades, es lo primero que se hace. */
        this.marca = pMarca;
        this.modelo = pModelo;
        this.color = pColor;
        /* this. es cada uno de los objetos Coche generados. */

        this.velocidad = 0;
        /* Esta propiedad es igual a todos los objetos tipo Coche. */
    }
    /* Metodos: */
    acelerar() {
        this.velocidad += 20;
    }

    frenar() {
        this.velocidad -= 20;
    }
}


/* Ya hemos usado algunos objetos como new Array() o new Date(), si queremos usar nuestro objeto coche hacemos new Coche(). */

const coche1 = new Coche(/* Lo que escriba aquí se ejecuta en el constructor. */ 'Mercedes', 'CP500', 'Azul');
coche1.acelerar()
const coche2 = new Coche('Kia', 'Niro', 'Space grey');
coche2.acelerar()//20
coche2.acelerar()//40
coche2.acelerar()//60

console.log(coche1.velocidad, coche2.velocidad);