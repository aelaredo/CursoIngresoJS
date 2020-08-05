/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar() {

    let numeroIngresado;
    let seguir;
    let maximo;
    let minimo;
    let flag = 0;

    do {

        numeroIngresado = parseInt(prompt("ingrese un numero"));

        if (flag == 0 || numeroIngresado > maximo) {
            maximo = numeroIngresado;
        }
        if (flag == 0 || numeroIngresado < minimo) {
            minimo = numeroIngresado;
            flag = 1;
        }


        seguir = prompt("Si desea agregar otro numero ingrese 's'")

    } while (seguir == "s");


    document.getElementById("txtIdMaximo").value = maximo;
    document.getElementById("txtIdMinimo").value = minimo;

} //FIN DE LA FUNCIÓN