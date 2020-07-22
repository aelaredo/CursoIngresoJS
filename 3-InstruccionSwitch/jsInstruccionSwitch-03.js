function mostrar() {

    let mes = document.getElementById("txtIdMes").value;

    switch (mes) //variable a evaluar
    {
        // case "Enero": //puedo agrupar los que se comportan iguales y hacer break cuando cambia
        // case "Marzo":
        // case "Abril":
        // case "Mayo":
        // case "Junio":
        // case "Julio":
        // case "Agosto":
        // case "Septiembre":
        // case "Octubre":
        // case "Noviembre":
        // case "Diciembre":

        default: alert("Este mes tiene 30 o más días"); // es como un else.
        break;

        case "Febrero":
                alert("Este mes no tiene más de 29 días");
            break
    }




} //FIN DE LA FUNCIÓN