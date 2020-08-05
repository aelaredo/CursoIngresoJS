/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar() {
    let numeroIngresado;
    let seguir;
    let acumuladorPos = 0;
    let acumuladorNeg = 1;
    let flag = 0;

    do {

        numeroIngresado = parseInt(prompt("ingrese un numero"));

        if (numeroIngresado >= 0) {
            acumuladorPos += numeroIngresado;
        } else {
            acumuladorNeg = acumuladorNeg * numeroIngresado;
            flag = 1;
        }

        seguir = prompt("Si desea agregar otro numero ingrese 's'")

    } while (seguir == "s")


    if (flag == 0) {
        acumuladorNeg = 0;
    }

    document.getElementById("txtIdProducto").value = acumuladorNeg;
    document.getElementById("txtIdSuma").value = acumuladorPos;

} //FIN DE LA FUNCIÓN