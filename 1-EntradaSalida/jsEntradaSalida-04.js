/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/

//let nombreIngresado = prompt("Ingrese su nombre");

function mostrar() {
    //declaro la variable y le digo que va a ser el valor del prompt
    let nombreIngresado = prompt("Ingrese su nombre");
    //aca le asigno el nombre que ingrese en el prompt a la caja de texto
    document.getElementById("txtIdNombre").value = nombreIngresado;

}