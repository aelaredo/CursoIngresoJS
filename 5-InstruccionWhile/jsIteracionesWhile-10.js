/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar() {
    //declaracion de variables.
    let numeroIngresado;
    let seguir;
    let acumuladorPos = 0;
    let contadorPos = 0;
    let acumuladorNeg = 0;
    let contadorNeg = 0;
    let contadorCeros = 0;
    let contadorPares = 0;
    let promedioPos = 0;
    let promedioNeg = 0;
    let difPosNeg;



    //crear bucle do while
    do {
        //pedir numero a user
        numeroIngresado = parseInt(prompt("ingrese un numero"));

        //analizar numero
        if (numeroIngresado > 0) {
            acumuladorPos += numeroIngresado;
            contadorPos++;
            flagPos = 1;
        } else if (numeroIngresado == 0) {
            contadorCeros++;
        } else {
            acumuladorNeg += numeroIngresado;
            contadorNeg++;
            flagNeg = 1;
        }

        if (numeroIngresado % 2 == 0) {
            contadorPares++;
        }

        seguir = prompt("Si desea agregar otro numero ingrese 's'")

    } while (seguir == "s");


    if (contadorPos > 0) {
        promedioPos = acumuladorPos / contadorPos;
    }
    if (contadorNeg > 0) {
        promedioNeg = acumuladorNeg / contadorNeg;
    }


    difPosNeg = contadorPos - contadorNeg;


    document.write(`La suma de positivos es ${acumuladorPos} <br>
				La suma de negativos es ${acumuladorNeg} <br>
				La cantidad de positivos es ${contadorPos} <br>
				La cantidad de negativos es ${contadorNeg} <br>
				La cantidad de ceros son ${contadorCeros} <br>
				La cantidad de numeros pares son ${contadorPares} <br>
				El promedio de positivos es ${promedioPos} <br>
				El promedio de negativos es ${promedioNeg} <br>
				La dfiferencia entre positivos y negativos es ${difPosNeg}`)
} //FIN DE LA FUNCIÓN