let contadorEmpates = 0;
let contadorGanadas = 0;
let contadorPerdidas = 0;
let ppt;

function comenzar() {
    //Genero el número RANDOM entre 1 y 3
    let maximo = 3;
    let minimo = 1;
    ppt = Math.round(Math.random() * (maximo - minimo) + minimo);
    console.log(ppt);



} //FIN DE LA FUNCIÓN
function piedra() {
    if (ppt == 3) {
        alert("Tu piedra rompe las tijeras ¡Ganaste!");
        contador = "Ganaste";

    } else if (ppt == 2) {
        alert("El papel envuelve tu piedra. Perdiste...");
        contador = "Perdiste";

    } else {
        alert("Empate!");
        contador = "Empate";

    }

    mostrarResultado();

} //FIN DE LA FUNCIÓN
function papel() {
    if (ppt == 3) {
        alert("Las tijeras cortan tu papel ¡Perdiste!");
        contador = "Perdiste";

    } else if (ppt == 1) {
        alert("Tu papel envuelve la piedra. ¡Ganaste!");
        contador = "Ganaste";

    } else {
        alert("Empate!");
        contador = "Empate";

    }

    mostrarResultado();

} //FIN DE LA FUNCIÓN
function tijera() {
    if (ppt == 1) {
        alert("La piedra rompio tus tijeras ¡Perdiste!");
        contador = "Perdiste";

    } else if (ppt == 2) {
        alert("Cortaste el papel con tus tijeras ¡Ganaste!");
        contador = "Ganaste";

    } else {
        alert("Empate!");
        contador = "Empate";

    }

    mostrarResultado();

} //FIN DE LA FUNCIÓN

function mostrarResultado(contador) {
    if (contador == "Ganaste") {
        contadorGanadas++;
    } else if (contador == "Perdiste") {
        contadorPerdidas++;
    } else {
        contadorEmpates++;
    }

    document.getElementById("txtIdGanadas").value = contadorGanadas;
    document.getElementById("txtIdPerdidas").value = contadorPerdidas;
    document.getElementById("txtIdEmpatadas").value = contadorEmpates;
    comenzar();
}