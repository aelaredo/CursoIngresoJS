/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.


Patrones = soluciones a mismo problemas
//variable "bandera" (flag) nos permite saber si ya pasamos por un bloque del codigo o si ya sucedio un evento (si se triggerio)
*/




// si a la variable la primera vez que la uso en el codigo es para leerla 
//(el caso del flag y el contador) entonces sí la inicializo, si no no hace falta,
//si la primera vez que la uso es para escribirla no la inicializamos
let numeroSecreto;
let contadorIntentos;
let flag = 0;

function comenzar() {
    //Genero el número RANDOM entre 1 y 100
    numeroSecreto = Math.round(Math.random() * 99 + 1)

    document.getElementById("txtIdNumero").focus();
    alert(numeroSecreto);
    contadorIntentos = 0
    document.getElementById("txtIdIntentos").value = contadorIntentos
    flag = 1

}

function verificar() {

    if (flag == 0) {
        alert("primero presiona el boton de comenzar")
    } else {
        contadorIntentos++

        document.getElementById("txtIdIntentos").value = contadorIntentos;

        let numeroUser = parseInt(document.getElementById("txtIdNumero").value)
        if (numeroSecreto == numeroUser) {
            alert("Usted es un ganador!!! y en solo " + contadorIntentos + " intentos")

            flag = 0
        } else if (numeroSecreto < numeroUser) {
            alert("se paso")
        } else {
            alert("falta")

        }
        document.getElementById("txtIdNumero").value = ""
        document.getElementById("txtIdNumero").focus();
    }
}