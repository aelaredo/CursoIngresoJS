function mostrar() {

    let nota;
    let acumuladorNota = 0;
    let contadorNota = 0;
    let contadorAprobados = 0;
    let notaMinima;
    let sexoMinimo;
    let sexo;
    let seguir;
    let promedio;



    do {
        nota = parseInt(prompt("Ingrese la nota"));

        while (nota < 0 || nota > 10) {
            nota = parseInt(prompt("Nota incorrecta, ingrese nuevamente"));
        }



        sexo = prompt("Ingrese su sexo: f o m");

        while (!(sexo == 'f' || sexo == 'm')) {
            sexo = ("Incorrecto, ingrese f o m ");
        }


        if (acumuladorNota == 0) {
            notaMinima = nota;
            sexoMinimo = sexo;
        } else if (nota < notaMinima) {
            notaMinima = nota;
            sexoMinimo = sexo;
        }

        if (sexo == "m" && nota >= 6) {
            contadorAprobados++
        }

        acumuladorNota = nota + acumuladorNota
        contadorNota++

        seguir = prompt("desea ingresar otro alumno?");
    } while (seguir == 's')



    if (acumuladorNota == 0) {
        promedio = 0
    } else {
        promedio = acumuladorNota / contadorNota;
    }


    alert(
        `El total de las notas es ${acumuladorNota}
        El promedio de las notas es ${promedio}
        La nota mas baja es ${notaMinima} y es ${sexoMinimo} 
        La cantidad de varones aprobados son ${contadorAprobados} `);
}