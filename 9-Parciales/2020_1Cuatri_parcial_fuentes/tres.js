function mostrar() {
    let nombre;
    let nombreTemperatura;
    let edad;
    let acumuladorEdadSolteros = 0;
    let sexo;
    let estado;
    let contadorSolteros = 0;
    let contadorViudosSolteros = 0;
    let contadorMayoresViudos = 0;
    let temperatura;
    let contadorMas38 = 0;
    let temperaturaMax;
    let seguir;
    let contador = 0;
    let promedio;

    do {

        nombre = prompt("Ingrese su nombre");

        edad = parseInt(prompt("Ingrese su edad"));
        while (!(edad > 0)) {
            edad = parseInt(prompt("Edad no valida, ingrese su edad"));
        }

        sexo = prompt("Ingrese 'f' si es femenina o 'm' si es masculino");
        while (!(sexo == 'f' || sexo == 'm')) {
            sexo = prompt("Error. Solo se admite 'f' si es femenina ó 'm' si es masculino");
        }

        estado = prompt("Ingrese su estado civil, soltero casado o viudo")
        while (!(estado == "soltero" || estado == "casado" || estado == "viudo")) {
            estado = prompt("Error, ingrese su estado civil, soltero casado o viudo");
        }

        temperatura = parseInt(prompt("Ingrese su temperatura corporal"));

        if (contador == 0 || temperatura > temperaturaMax) {
            temperaturaMax = temperatura;
            nombreTemperatura = nombre;
        }

        switch (estado) {
            case "viudo":
                if (edad >= 18) {
                    contadorMayoresViudos++;
                }
                if (sexo == 'm') {
                    contadorViudosSolteros++;
                }
                break;
            case "soltero":
                if (sexo == 'm') {
                    contadorViudosSolteros++;
                    console.log(edad);
                    acumuladorEdadSolteros += edad;
                    contadorSolteros++;
                }

        }

        if (edad > 60 && temperatura > 38) {
            contadorMas38++;
        }


        contador++;

        seguir = prompt("Ingrese 's' si desea cargar otro pasajero")
    } while (seguir == 's');

    console.log(contadorSolteros);
    console.log(acumuladorEdadSolteros);

    if (contadorSolteros == 0) {
        promedio = 0;
    } else {
        promedio = acumuladorEdadSolteros / contadorSolteros;
    }


    console.log("a) La persona con mas temperatura es " + nombreTemperatura);
    console.log("b) la cantidad de mayores de edad viudos es " + contadorMayoresViudos);
    console.log("c) La cantidad de hombres solteros o viudos es " + contadorViudosSolteros);
    console.log("d) La cantidad de personas de mas de 60 años con mas de 38 de temperatura es " + contadorMas38);
    console.log("e) El promedio de los hombres solteros es " + promedio);


}