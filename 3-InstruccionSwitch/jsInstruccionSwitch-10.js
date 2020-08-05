function mostrar() {
    let destino = document.getElementById("txtIdDestino").value;
    let estacion = document.getElementById("txtIdEstacion").value;
    let flag = 0

    switch (estacion) {
        case "Invierno":
            if (destino == "Bariloche") {
                flag = 1;
            }
            break;
        case "Verano":
            if (destino == "Mar del plata" || destino == "Cataratas") {
                flag = 1;
            }
            break;
        case "Otoño":
            flag = 1;
            break;
        case "Primavera":
            if (destino != "Bariloche") {
                flag = 1;
            }
            break;
    }

    if (flag == 1) {
        alert("Se viaja");
    } else {
        alert("no se viaja");
    }


} //FIN DE LA FUNCIÓN