function mostrar() {
    let repeticiones = parseInt(prompt("ingrese el número de repeticiones"));
    let contadorDiv = 0;

    for (let i = 1; i <= repeticiones; i++) {
        if (repeticiones % i == 0) {
            console.log(`Este num. es divisor; ${i}`)
            contadorDiv++
        }

    }
    console.log(`La cantidad de divisores es ${contadorDiv}`)
} //FIN DE LA FUNCIÓN