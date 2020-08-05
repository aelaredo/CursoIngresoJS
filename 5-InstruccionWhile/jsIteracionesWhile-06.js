function mostrar() {

    // let numero1 = parseInt(prompt("ingrese numero1 "));
    // let numero2 = parseInt(prompt("ingrese numero2 "));
    // let numero3 = parseInt(prompt("ingrese numero3 "));
    // let numero4 = parseInt(prompt("ingrese numero4 "));
    // let numero5 = parseInt(prompt("ingrese numero5 "));




    // document.getElementById("txtIdSuma").value = numero1 + numero2 + numero3 + numero4 + numero5;
    // document.getElementById("txtIdPromedio").value = (numero1 + numero2 + numero3 + numero4 + numero5) / 5;

    let i = 0;
    // let acumulador = 0;
    let numero = 0;

    while (i < 5) {
        numero += parseInt(prompt("ingrese numero "));
        // acumulador = acumulador + numero // esto es un acmulador porq sumo variables
        i = i + 1; // estos es contador porque suma/resta una constante
    }

    document.getElementById("txtIdSuma").value = numero;
    document.getElementById("txtIdPromedio").value = numero / i;
} //FIN DE LA FUNCIÓN