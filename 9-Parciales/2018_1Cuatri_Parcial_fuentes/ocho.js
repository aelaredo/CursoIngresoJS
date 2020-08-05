function mostrar() {
    let seguir;
    let numero;
    let letra;
    let contadorPares = 0;
    let contadorImpares = 0;
    let contadorPos = 0
    let contadorCeros = 0;
    let promedio;
    let acumuladorNeg = 0;
    let acumuladorPos = 0;
    let letraMax;
    let letraMin;
    let numeroMax;
    let numeroMin;
    let flag = 0;


    do {
        letra = prompt("ingrese una letra");

        numero = parseInt(prompt("Ingrese un numero entre -100 y 100"));

        while (!(numero > -100 && numero < 100)) {
            numero = parseInt(prompt("Numero incorrecto ingrese un numero entre -100 y 100"));
        }

        if (numero % 2 == 0) {
            contadorPares++
        } else {
            contadorImpares++
        }

        if (numero > 0) {
            acumuladorPos = numero + acumuladorPos;
            contadorPos++;
        } else if (numero == 0) {
            contadorCeros++
        } else {
            acumuladorNeg = numero + acumuladorNeg;
        }

        if (flag == 0 || numero < numeroMin) {
            numeroMin = numero;
            letraMin = letra;
        }

        if (flag == 0 || numero > numeroMax) {
            numeroMax = numero;
            letraMax = letra;
            flag = 1
        }

        seguir = prompt("Desea ingrtesar otro par de datos?")
    } while (seguir == 's')

    if (contadorPos == 0) {
        promedio = 0
    } else {
        promedio = acumuladorPos / contadorPos
    }

    document.write(`a) Cantidad de numeros pares = ${contadorPares} <br>
                b) Cantidad de numero impares = ${contadorImpares} <br>
                c) Cantidad de ceros = ${contadorCeros} <br>
                d) El promedio de los positivos es = ${promedio} <br>
                e) La suma de los negativos es = ${acumuladorNeg} <br>
                f) El numero y la letra del maximo es ${numeroMax} y ${letraMax}. El numero y letra minimo es ${numeroMin} y ${letraMin}
                `)


}