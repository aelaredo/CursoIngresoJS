function mostrar() {
    let edad = parseInt(document.getElementById("txtIdEdad").value)

    if (edad >= 18) {
        alert("Eres mayor de edad");
    } else {
        alert("No eres mayor de edad")
    }

} //FIN DE LA FUNCIÓN