/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar() {

    let nombre;

    nombre = document.getElementById("txtIdNombre").value;

    //let nombreIngresado;
    //nombreIngresado = txtIdNombre.value;
    alert(nombre);

    document.getElementById("txtIdNombre").value = ""
}