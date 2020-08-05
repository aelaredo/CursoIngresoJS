function mostrar() {
    let repeticiones;
    let contadorPares = 0;


    repeticiones = parseInt(prompt("ingrese el número de repeticiones"))
        // for (let i = 1; i <= repeticiones; i++) {
        //     if (i % 2 == 0) {
        //         console.log(`Este es un num. par ${i}`)
        //         contadorPares++
        //     }

    // }
    // console.log(`La cantidad de numeros pares es ${contadorPares}`)

    for (let i = 1; i <= repeticiones; i++) {
        if (i % 2 != 0) {
            continue;
        }
        console.log(`Este es un num. par ${i}`)
        contadorPares++
    }
    console.log(`La cantidad de numeros pares es ${contadorPares}`)
} //FIN DE LA FUNCIÓN