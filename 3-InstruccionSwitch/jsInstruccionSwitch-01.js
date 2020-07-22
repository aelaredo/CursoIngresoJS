function mostrar() {
    //tomo el mes
    let mes = document.getElementById("txtIdMes").value;


    // if (mes == "Enero") {
    //     alert("que comiences bien el año!!!")
    // } else if (mes == "Marzo") {
    //     alert("a clases!!!.")
    // } else if (mes == "Julio") {
    //     alert("se vienen las vacaciones!!!.")
    // } else if (mes == "Diciembre") {
    //     alert("Felices fiesta!!!.")
    // }

    //estructuira switch

    switch (mes) //variable a evaluar
    {
        case "Enero": //siempre se entra por igualdad
            alert("que comiences bien el año!!!");
            break; //esta palabra te saca del break
        case "Marzo":
            alert("a clases!!!.");
            break;
        case "Julio":
            alert("se vienen las vacaciones!!!.");
            break;
        case "Diciembre":
            alert("Felices fiesta!!!.");
            break
    }



} //FIN DE LA FUNCIÓN