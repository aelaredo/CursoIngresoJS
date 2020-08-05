/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso() {
    //definicion de variables
    let edad;
    let sexo;
    let estadoCivil;
    let sueldo;
    let legajo;
    let nacionalidad;
    let estadoCivilString;
    let nacionalidadString;
    //  "txtIdEdad"
    //  "txtIdSexo"
    //  "txtIdEstadoCivil"
    //  "txtIdSueldo"
    //  "txtIdLegajo"
    //  "txtIdNacionalidad"

    edad = parseInt(prompt("Ingrese su edad (entre 18 y 90 años"));
    while (!(edad >= 18 && edad <= 90)) {
        edad = parseInt(prompt("Edad incorrecta. Ingrese su edad entre 18 y 90 años inclusive"));
    }
    document.getElementById("txtIdEdad").value = edad;


    sexo = prompt("Ingrese su sexo (solo F o M admitidos");
    while (!(sexo == 'M' || sexo == 'F')) {
        sexo = prompt("Incorrecto, solo 'F' o 'M' admitidos");
    }
    document.getElementById("txtIdSexo").value = sexo;


    estadoCivil = parseInt(prompt("Ingrese su estado civil 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos"));
    while (!(estadoCivil >= 1 && estadoCivil <= 4)) {
        estadoCivil = prompt("Incorrecto, recuerde 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos");
    }
    switch (estadoCivil) {
        case 1:
            estadoCivilString = "1-Soltero";
            break;
        case 2:
            estadoCivilString = "2-Casado";
            break;
        case 3:
            estadoCivilString = "3-Divorciado";
            break;
        case 4:
            estadoCivilString = "4-Viudo";
            break;
    }
    document.getElementById("txtIdEstadoCivil").value = estadoCivilString;


    sueldo = parseInt(prompt("Ingrese su sueldo (mayor a 8000)"));
    while (!(sueldo > 8000)) {
        sueldo = prompt("Incorrecto, su sueldo debe ser mayor a 8000");
    }
    document.getElementById("txtIdSueldo").value = sueldo;


    legajo = parseInt(prompt("Ingrese su numero de legajo de 4 numeros sin ceros a la izquierda"));

    while (!(legajo <= 9999 && legajo >= 1000)) {
        legajo = parseInt(prompt("Ingrese su numero de legajo sin ceros a la izquierda"));
    }
    document.getElementById("txtIdLegajo").value = legajo;


    nacionalidad = prompt("Ingrese su nacionalidad: 'A' para argentino, 'E' para extranjeros y 'N' para nacionalizados")
    while (!(nacionalidad == 'A' || nacionalidad == 'E' || nacionalidad == 'N')) {
        nacionalidad = prompt("Incorrecto, recuerde 'A' para argentino, 'E' para extranjeros y 'N' para nacionalizados");
    }

    switch (nacionalidad) {
        case 'A':
            nacionalidadString = "A-Argentino";
            break;
        case 'E':
            nacionalidadString = "E-Extranjero";
            break;
        case 'n':
            nacionalidadString = "N-Divorciado";
            break;
    }

    document.getElementById("txtIdNacionalidad").value = nacionalidadString;

}