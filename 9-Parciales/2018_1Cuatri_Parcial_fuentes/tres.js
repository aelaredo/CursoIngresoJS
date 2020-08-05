function mostrar() {
    let precio;
    let descuento;
    let precioFinal;


    precio = parseInt(prompt("cuanto sale su producto"));
    descuento = parseInt(prompt("Cuanto descuento quiere"));

    precioFinal = precio - descuento * precio / 100;
    document.getElementById("elPrecioFinal").value = `EL articulo de ${precio} pesos, ahora sale ${precioFinal} gracias a el ${descuento}% de descuento`

}