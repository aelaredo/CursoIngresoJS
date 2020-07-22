function mostrar() {
    let edad = parseInt(document.getElementById("txtIdEdad").value)

    if (edad >= 18) {
        alert("Eres mayor de edad");
    } else if (edad >= 13) {
        alert("Eres adolescente")
    } else {
        alert("Eres un niño")
    }

} //FIN DE LA FUNCIÓN