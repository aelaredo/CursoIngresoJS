/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar() {
    let nombreIngresado;
    let edadIngresada;

    nombreIngresado = txtIdNombre.value;
    edadIngresada = txtIdEdad.value;

    console.log(nombreIngresado);
    console.log(edadIngresada);
    alert(
        "Usted se llama " + nombreIngresado + " y tiene " + edadIngresada + " años."
    );
}