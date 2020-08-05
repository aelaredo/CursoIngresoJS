function mostrar() {
    let hora = parseInt(document.getElementById("txtIdHora").value);


    if (hora > 6 && hora < 12) {
        alert("Es la mañana");
    } else if (hora > 11 && hora < 20) {
        alert("Es la tarde");
    } else if ((hora > 19 && hora < 25) || (hora >= 0 && hora <= 6)) {
        alert("Es de noche");
    } else {
        alert("la hora no existe")
    }


    // switch (hora) {

    //     case 7:
    //     case 8:
    //     case 9:
    //     case 10:
    //     case 11:
    //         alert("Es la mañana");
    //         break;
    //     case 12:
    //     case 13:
    //     case 14:
    //     case 15:
    //     case 16:
    //     case 17:
    //     case 18:
    //     case 19:
    //         alert("Es la tarde");
    //         break;
    //     case 20:
    //     case 21:
    //     case 22:
    //     case 23:
    //     case 24:
    //         alert("Es de noche");
    //         break;
    //     case 1:
    //     case 2:
    //     case 3:
    //     case 4:
    //     case 5:
    //     case 6:
    //         alert("es de madrugada");
    //         break;

    //     default:
    //         alert("la hora no existe")
    // }

}
//FIN DE LA FUNCIÓN