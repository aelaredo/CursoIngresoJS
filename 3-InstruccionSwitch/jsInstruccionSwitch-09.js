function mostrar() {
    let destino = document.getElementById("txtIdDestino").value;
    let estacion = document.getElementById("txtIdEstacion").value;
    const PRECIO = 15000;
    let precioFinal;

    switch (estacion) {
        case "Invierno":
            if (destino == "Bariloche") {
                precioFinal = PRECIO + PRECIO * 0.2;
            } else if (destino == "Cataratas" || destino == "Cordoba") {
                precioFinal = PRECIO - PRECIO * 0.1;
            } else {
                precioFinal = PRECIO - PRECIO * 0.2;
            }
            break;
        case "Verano":
            if (destino == "Bariloche") {
                precioFinal = PRECIO - PRECIO * 0.2;
            } else if (destino == "Cataratas" || destino == "Cordoba") {
                precioFinal = PRECIO + PRECIO * 0.1;
            } else {
                precioFinal = PRECIO + PRECIO * 0.2;
            }
            break;
        default:
            if (destino == "Cordoba") {
                precioFinal = PRECIO;
            } else {
                precioFinal = PRECIO + PRECIO * 0.1;
            }
    }

    alert(`El precio de su estadia es de $ ${precioFinal}`);

} //FIN DE LA FUNCIÓN