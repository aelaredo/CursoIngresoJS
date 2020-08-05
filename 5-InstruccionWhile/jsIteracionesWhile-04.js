/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar() {
    let numero;
    numero = parseInt(prompt("ingrese un número entre 0 y 9."));
    // //cuando el dato no es valido
    //     while (!(numero >= 0 && numero <= 9)) {
    //         numero = prompt("Numero invalido, ingrese un número entre 0 y 9")
    //     }

    // cuando el dato es Invalido
    while (numero < 0 || numero > 9 || isNaN(numero)) {
        numero = parseInt(prompt("Numero invalido, ingrese un número entre 0 y 9"));
    }
    document.getElementById("txtIdNumero").value = numero;
} //FIN DE LA FUNCIÓN