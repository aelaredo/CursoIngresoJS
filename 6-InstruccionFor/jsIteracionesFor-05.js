function mostrar() {
    let numero;

    for (; numero != 9;) {
        numero = parseInt(prompt("ingrese un numero"));
        if (numero == 9) {
            continue
        }
        alert("usted ingreso" + numero);
        // if (numero == 9) {
        //     break;
        // }
    }



} //FIN DE LA FUNCIÓN