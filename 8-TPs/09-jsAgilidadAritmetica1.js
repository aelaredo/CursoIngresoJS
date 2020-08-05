/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/
let respuesta;
let operador;
let primerNum;
let segundoNum;
let resultado;

function comenzar() {


    primerNum = Math.round(Math.random() * 9 + 1);
    document.getElementById("txtIdPrimerNumero").value = primerNum;

    segundoNum = Math.round(Math.random() * 9 + 1);
    document.getElementById("txtIdSegundoNumero").value = segundoNum;


    let maximo = 4;
    let minimo = 1;
    operador = Math.round(Math.random() * 3 + 1);


    if (operador == 1) {
        document.getElementById("txtIdOperador").value = "+";
        resultado = primerNum + segundoNum;
    } else if (operador == 2) {
        document.getElementById("txtIdOperador").value = "-";
        resultado = primerNum - segundoNum;

    } else if (operador == 3) {
        document.getElementById("txtIdOperador").value = "*";
        resultado = primerNum * segundoNum;
    } else {
        document.getElementById("txtIdOperador").value = "/";
        resultado = primerNum / segundoNum;
    }



} //FIN DE LA FUNCIÓN
function Responder() {
    respuesta = parseInt(document.getElementById("txtIdRespuesta").value);

    if (resultado == respuesta) {
        alert("Acertaste!")
    } else {
        alert("Fallaste")
    }



} //FIN DE LA FUNCIÓN