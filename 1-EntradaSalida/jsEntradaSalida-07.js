/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/

function sumar() {
    let numeroUno = parseInt(txtIdNumeroUno.value);
    let numeroDos = parseInt(txtIdNumeroDos.value);

    alert("La suma es " + (numeroUno + numeroDos))
}

function restar() {
    let numeroUno = parseInt(txtIdNumeroUno.value);
    let numeroDos = parseInt(txtIdNumeroDos.value);

    alert("La resta es " + (numeroUno - numeroDos))
}

function multiplicar() {
    let numeroUno = parseInt(txtIdNumeroUno.value);
    let numeroDos = parseInt(txtIdNumeroDos.value);

    alert("La multiplicacion es " + (numeroUno * numeroDos))
}

function dividir() {
    let numeroUno = parseInt(txtIdNumeroUno.value);
    let numeroDos = parseInt(txtIdNumeroDos.value);

    alert("La division es " + (numeroUno / numeroDos))
}