function mostrar() {
    let producto;
    let precio;
    let compraBarb = 0;
    let compraJab = 0;
    let compraAlco = 0;
    let promedio;
    let unidades;
    let unidadesBarb = 0;
    let unidadesJab = 0;
    let unidadesAlco = 0;
    let cantAlcoholBarat;
    let precioAlcoBarat;
    let marca;
    let fabricanteBarat;
    let fabricante;

    for (let i = 1; i <= 5; i++) {

        producto = prompt("Ingrese el producto: barbijo, jabon o alcohol");
        while (!(producto == "barbijo" || producto == "jabon" || producto == "alcohol")) {
            producto = prompt("Incorrecto solo se admiten los productos barbijo, jabon o alcohol")
        }


        precio = parseInt(prompt("Ingrese el precio unitario (entre 100 y 300)"));
        while (!(precio >= 100 && precio <= 300)) {
            precio = parseInt(prompt("Incorrecto el precio unitario debe ser entre 100 y 300"));
        }

        unidades = parseInt(prompt("Ingrese las unidades del producto, no deben superar las 1000"));
        while (!(unidades > 0 && unidades <= 1000)) {
            unidades = parseInt(prompt("Incorrecto, deben ser mas de 0 y menos de 1000 unidades"));
        }

        marca = prompt("¿De que marca es el producto?");

        fabricante = prompt("¿De que fabricante es el producto?");

        switch (producto) {
            case "barbijo":
                unidadesBarb += unidades;
                compraBarb += unidades * precio
                break;
            case "jabon":
                unidadesJab += unidades;
                compraJab += unidades * precio;
                break;
            case "alcohol":
                if (unidadesAlco == 0 || precio < precioAlcoBarat) {
                    cantAlcoholBarat = unidades;
                    fabricanteBarat = fabricante;
                    precioAlcoBarat = precio;
                }
                unidadesAlco += unidades;
                compraAlco += unidades * precio;
                break;
        }


    }

    if (unidadesAlco > unidadesBarb && unidadesAlco > unidadesJab) {
        promedio = compraAlco / unidadesAlco;
    } else if (unidadesBarb > unidadesAlco && unidadesBarb > unidadesJab) {
        promedio = compraBarb / unidadesBarb;
    } else {
        promedio = compraJab / unidadesJab;
    }


    console.log("las unidades de alcohol son " + unidadesAlco);
    console.log("el total de conpra de alcohol es" + compraAlco);
    console.log("las unidades totales de barbijo son" + unidadesBarb);
    console.log("el total de la compra de barbijo es" + compraBarb);

    console.log("El alcohol mas barato es" + fabricanteBarat + "y se compro" + cantAlcoholBarat + "unidades");


    console.log("el promedio de la compra del tipo con mas unidades es " + promedio);

    console.log("Se compro una cantidad de " + unidadesJab + "jabones");
    console.log("se gasto" + compraJab + "en la compra de jabnones");

}