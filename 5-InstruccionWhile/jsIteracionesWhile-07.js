/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar() {
    let seguir;
    let acumulador = 0;
    let cont = 0;

    do {


        acumulador += parseInt(prompt("ingrese un numero"));
        seguir = prompt("quiere ingresar un numero?");
        cont++;
    } while (seguir == 's')

    document.getElementById("txtIdSuma").value = acumulador;
    document.getElementById("txtIdPromedio").value = acumulador / cont;

} //FIN DE LA FUNCIÓN