/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/

function sumar() {


    let numeroUno = parseInt(document.getElementById("txtIdNumeroUno").value);
    let numeroDos = parseInt(document.getElementById("txtIdNumeroDos").value);

    // el unico operador que funciona aritmeticamente y en concatenacion es el mas +
    alert("La suma es " + (numeroUno + numeroDos))
}

function restar() {

    // en una resta convierte automaticamente los string a number aunque no cambia la vbariable
    //pero por convencion convertimos todos los numeros de string a number
    let numeroUno = parseInt(document.getElementById("txtIdNumeroUno").value);
    let numeroDos = parseInt(document.getElementById("txtIdNumeroDos").value);

    alert("La resta es " + (numeroUno - numeroDos))
}

function multiplicar() {
    let numeroUno = parseInt(document.getElementById("txtIdNumeroUno").value);
    let numeroDos = parseInt(document.getElementById("txtIdNumeroDos").value);

    alert("La multiplicacion es " + (numeroUno * numeroDos))
}

function dividir() {
    let numeroUno = parseInt(document.getElementById("txtIdNumeroUno").value);
    let numeroDos = parseInt(document.getElementById("txtIdNumeroDos").value);

    alert("La division es " + (numeroUno / numeroDos))
}