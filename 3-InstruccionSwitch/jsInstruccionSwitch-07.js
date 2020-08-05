function mostrar() {
    let destinoIngresado = document.getElementById("txtIdDestino").value;

    // switch (destinoIngresado) {
    //     case "Bariloche":
    //         alert("oeste");
    //         break;
    //     case "Cataratas":
    //         alert("norte");
    //         break;
    //     case "Mar del plata":
    //         alert("este")
    //         break;
    //     case "Ushuaia":
    //         alert("sur");
    //         break;
    // }

    if (destinoIngresado == "Bariloche") {
        alert("oeste");
    } else if (destinoIngresado == "Cataratas") {
        alert("norte");
    } else if (destinoIngresado == "Mar del plata") {
        alert("este")
    } else if (destinoIngresado == "Ushuaia") {
        alert("sur");
    } else {
        alert("No es un destino valido")
    }

} //FIN DE LA FUNCIÓN