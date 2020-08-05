/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

let numeroSecreto;
let contadorIntentos;
let flag = 0;

function comenzar() {
    //Genero el número RANDOM entre 1 y 100
    numeroSecreto = Math.round(Math.random() * 99 + 1)

    document.getElementById("txtIdNumero").focus();
    alert(numeroSecreto);
    contadorIntentos = 0
    document.getElementById("txtIdIntentos").value = contadorIntentos
    flag = 1

}

function verificar() {

    if (flag == 0) {
        alert("primero presiona el boton de comenzar")
    } else {
        contadorIntentos++

        document.getElementById("txtIdIntentos").value = contadorIntentos;

        let numeroUser = parseInt(document.getElementById("txtIdNumero").value)
        if (numeroSecreto == numeroUser) {
            switch (contadorIntentos) {
                case 1:
                    alert("Usted es un psiquico");
                    break;
                case 2:
                    alert("Excelente percepcion");
                    break;
                case 3:
                    alert("esto es suerte");
                    break;
                case 4:
                    alert("excelente tecnica");
                    break;
                case 5:
                    alert("Usted esta en la media");
                    break;
                case 6:
                case 7:
                case 8:
                case 9:
                case 10:
                    alert("Falta Tecnica");
                    break;
                default:
                    alert("afortunado en el amor")
            }

            //alert("Usted es un ganador!!! y en solo " + contadorIntentos + " intentos")

            flag = 0
        } else if (numeroSecreto < numeroUser) {
            alert("se paso")
        } else {
            alert("falta")

        }
        document.getElementById("txtIdNumero").value = ""
        document.getElementById("txtIdNumero").focus();
    }
}