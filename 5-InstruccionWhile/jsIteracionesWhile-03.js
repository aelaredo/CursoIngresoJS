/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar() {
    let claveIngresada;
    let flag = 0;
    //claveIngresada = prompt("ingrese el número clave.");

    // while (claveIngresada != "utn750") {


    //     claveIngresada = prompt("Ingrese la clave nuevamente")


    // }
    do {
        if (flag == 0) {
            claveIngresada = prompt("ingrese el número clave.");
        } else {
            claveIngresada = prompt("Clave incorrecta ingrese el número clave nuevamente.");
        }
        flag = 1;
    } while (claveIngresada != "utn750")


    alert("Usted ingresó")
} //FIN DE LA FUNCIÓN