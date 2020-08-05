function mostrar() {
    let marca;
    let peso;
    let temperatura;
    let seguir;
    let contadorPares = 0;
    let contadorProductos = 0;
    let pesoMax;
    let pesoMin;
    let pesoTotal = 0;
    let productoPesado;
    let productosFrios = 0;
    let promedio;

    do {
        marca = prompt("Ingrese el nombre de la marca");

        peso = parseInt(prompt("Ingrese el peso entre 1 y 100"));
        while (!(peso > 0 && peso <= 100)) {
            peso = parseInt(prompt("Incorrecto, ingrese un peso entre 1 y 100"));
        }


        temperatura = parseInt(prompt("Ingrese la temp. de almacenamiento entre -30 y 30"));
        while (!(temperatura >= -30 && temperatura <= 30)) {
            temperatura = parseInt(prompt("Incorrecto, ingrese una temperatura entre -30 y 30"));
        }

        if (temperatura % 2 == 0) {
            contadorPares++;
        }

        if (contadorProductos == 0 || peso > pesoMax) {
            pesoMax = peso;
            productoPesado = marca;
        }

        if (contadorProductos == 0 || peso < pesoMin) {
            pesoMin = peso;
        }

        if (temperatura < 0) {
            productosFrios++
        };

        pesoTotal += peso;
        contadorProductos++;

        seguir = prompt("Ingrese 's' si desa ingresar otro dato");
    } while (seguir == 's');

    promedio = pesoTotal / contadorProductos;

    console.log("a) La cantidad de temperaturas pares es " + contadorPares);
    console.log("b) El producto mas pesado es " + productoPesado);
    console.log("c) Los cantidad de productos que se almacenan a menos de 0 grados es " + productosFrios);
    console.log("d) El promedio de peso de todos los productos es " + promedio);
    console.log("f) El peso maximo es " + pesoMax + " y el peso minimo es " + pesoMin)

}