/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;

function comenzar() {
    let maximo = 3;
    let minimo = 1;
    ppt = Math.round(Math.random() * (maximo - minimo) + minimo);
    console.log(ppt);

} //FIN DE LA FUNCIÓN
function piedra() {
    if (ppt == 3) {
        alert("Tu piedra rompe las tijeras ¡Ganaste!");
    } else if (ppt == 2) {
        alert("El papel envuelve tu piedra. Perdiste...");
    } else {
        alert("Empate!");
    }


} //FIN DE LA FUNCIÓN
function papel() {
    if (ppt == 3) {
        alert("El papel corta tu papel ¡Perdiste!");
    } else if (ppt == 1) {
        alert("Tu papel envuelve la piedra. ¡Ganaste!");
    } else {
        alert("Empate!");
    }

} //FIN DE LA FUNCIÓN
function tijera() {

    if (ppt == 1) {
        alert("La piedra rompio tus tijeras ¡Perdiste!");
    } else if (ppt == 2) {
        alert("Cortaste el papel con tus tijeras ¡Ganaste!");
    } else {
        alert("Empate!");
    }

} //FIN DE LA FUNCIÓN