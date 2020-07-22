function mostrar() {
    let edad = parseInt(document.getElementById("txtIdEdad").value)


    if (!(edad >= 13 && edad <= 17)) { //defino que es un adolecente y lo niego con el !
        alert("no es adolescente")
    }

    // if (edad > 17 || edad < 13) {
    //     alert("No Eres adolescente");
    // }


} //FIN DE LA FUNCIÓN