/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo() {

    let largo = parseInt(document.getElementById("txtIdLargo").value);
    let ancho = parseInt(document.getElementById("txtIdAncho").value);
    let perimetro;

    perimetro = 2 * (largo + ancho);

    alambre = perimetro * 3;



    alert("Debes comprar " + alambre + " metros de alambre.");

}

function Circulo() {

    const PI = 3.14

    let radio = parseInt(document.getElementById("txtIdRadio").value);
    let perimetro = 2 * PI * radio;

    let alambre = perimetro * 3;

    alert("Debes comprar " + alambre + " metros");


}

function Materiales() {

    let largo = parseInt(document.getElementById("txtIdLargo").value);
    let ancho = parseInt(document.getElementById("txtIdAncho").value);
    let area = ancho * largo;
    let cemento;
    let cal;
    const CEMENTO_X_METRO = 2;
    const CAL_X_METRO = 3;

    cemento = area * CEMENTO_X_METRO;
    cal = area * CAL_X_METRO;

    alert(`Para un contrapiso de ${area} m2 necesito comprar ${cemento} bolsas de cemento y ${cal} bolsas de cal`)

}