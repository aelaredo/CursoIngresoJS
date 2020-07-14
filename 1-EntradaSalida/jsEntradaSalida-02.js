/*
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar() {
    let nombre = "Jose";

    nombre = "juan" //esta reasignacion es destructiva, lo anterioor se pierde 
    alert(nombre)

    nombre = "jose"
    alert(nombre) // aca muestra lo ultimo que asigne

    nombre = "" // aca limpio

    nombre = prompt("Introduzca su nombre");

    alert(nombre)
}