function mostrar() {
    let mes = document.getElementById("txtIdMes").value;

    switch (mes) //variable a evaluar
    {
        case "Enero": //puedo agrupar los que se comportan iguales y hacer break cuando cambia
        case "Marzo":
        case "Mayo":
        case "Julio":
        case "Agosto":
        case "Octubre":
        case "Diciembre":
            alert("Tiene 31 dias");
            break;

        case "Abril":
        case "Junio":
        case "Septiembre":
        case "Noviembre":
            alert("Tiene 30 dias");
            break;

        case "Febrero":
            alert("tiene 29/28 dias")
            break;

    }




} //FIN DE LA FUNCIÓN