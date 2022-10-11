const paycheck = new Array(
    {
        id: 1,
        name: 'Juanan',
        bruto: 24000,
        irpf: 20,
        pagas: 10,
    },
    {
        id: 2,
        name: 'Jose',
        bruto: 14000,
        irpf: 15,
        pagas: 10,
    },
    {
        id: 3,
        name: 'Javi',
        bruto: 64000,
        irpf: 12,
        pagas: 12,
    },
    {
        id: 4,
        name: 'Jesus',
        bruto: 34000,
        irpf: 20,
        pagas: 12,
    },
    {
        id: 5,
        name: 'Jimmy',
        bruto: 30000,
        irpf: 22,
        pagas: 52,
    },
)

/* const netoAnual = new Array()
const caculateNetoAnual = function (pNetoAnual) {
    return pNetoAnual = paycheck.forEach(nomina => (nomina.bruto - (nomina.bruto * nomina.irpf) / 100))


}

console.log(caculateNetoAnual(netoAnual)) */

/* Me lo calcula pero no puedo meterlo */

let contador = 0

for (let pago of paycheck) {
    let neto
    neto = parseInt(pago.bruto - (pago.bruto * pago.irpf) / 100);

    /* Hacer esto con un push? */
    paycheck[contador].neto = neto
    contador++

}
let i = 0

for (let pagos of paycheck) {
    let netomensual

    netomensual = parseInt((pagos.bruto - (pagos.bruto * pagos.irpf) / 100) / pagos.pagas);

    paycheck[i].netomensual = netomensual
    i++
}


console.log(paycheck)



/* Sacar sueldo más y min */

const sueldoMax = function (pList) {
    let sueldoRef = 0

    for (let pago of pList) {
        if (pago.bruto > sueldoRef)
            sueldoRef = pago.bruto
    }

    return (sueldoRef)
}

console.log(sueldoMax(paycheck));

let sueldoRef = 999999
const sueldoMin = function (pList) {


    if (pList.forEach(nomina => (nomina.bruto < sueldoRef))) {
        sueldoRef = nomina.bruto
    }
    return sueldoRef
}


console.log(sueldoMin(paycheck));