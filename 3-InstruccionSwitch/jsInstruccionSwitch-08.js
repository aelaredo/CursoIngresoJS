function mostrar() {
    let destinoIngresado = document.getElementById("txtIdDestino").value;

    // switch (destinoIngresado) {

    //     case "Cataratas":
    //     case "Mar del plata":
    //         alert("CALOR")
    //         break;
    //     case "Bariloche":
    //     case "Ushuaia":
    //         alert("FRIO");
    //         break;
    // }

    if (destinoIngresado == "Bariloche" || destinoIngresado == "Ushuaia") {
        alert("FRIO");
    } else {
        alert("CALOR")
    }


} //FIN DE LA FUNCIÓN