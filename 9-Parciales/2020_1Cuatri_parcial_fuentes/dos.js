function mostrar() {

    let producto;
    let productoCaro;
    let productoMax;
    let bolsas;
    let bolsasMax;
    let acumuladorBolsas = 0;
    let precio;
    let precioMax;
    let precioFinal;
    let acumuladorPrecio = 0;
    let seguir;
    let descuento;

    do {

        producto = prompt("Ingrese si desea arena, cal o cemento");
        while (!(producto == "arena" || producto == "cal" || producto == "cemento")) {
            producto = prompt("Incorrecto solo se vende arena, cal o cemento");
        }

        bolsas = parseInt(prompt("Ingrese la cantidad de bolsas que desea"));
        while (!(bolsas > 0)) {
            bolsas = parseInt(prompt("Incorrecto. Ingrese la cantidad de bolsas que desea"));
        }

        if (acumuladorBolsas == 0 || bolsas > bolsasMax) {
            bolsasMax = bolsas;
            productoMax = producto;
        }
        acumuladorBolsas += bolsas;


        precio = parseInt(prompt("Ingrese el precio por bolsa"));
        while (!(precio > 0)) {
            precio = parseInt(prompt("Incorrecto. Ingrese el precio por bolsa que desea"));
        }

        if (acumuladorPrecio == 0 || precio > precioMax) {
            precioMax = precio;
            productoCaro = producto;
        }

        acumuladorPrecio += precio * bolsas;


        seguir = prompt("Ingrese 's' si desea agregar otro producto")
    } while (seguir == 's');



    if (acumuladorBolsas >= 10 && acumuladorBolsas < 30) {
        descuento = 15;
    } else if (acumuladorBolsas >= 30) {
        descuento = 25;
    }


    console.log("El importe bruto a pagar es " + acumuladorPrecio)

    if (descuento >= 15) {
        precioFinal = acumuladorPrecio - acumuladorPrecio * descuento / 100;
        console.log("Se le aplico un descuento y pagará " + precioFinal)
    } else {
        precioFinal = acumuladorPrecio;
        console.log("No se le aplico descuento")
    }

    console.log("El producto con mas bolsas es " + productoMax);

    console.log("El producto mas caro es el " + productoCaro)



}