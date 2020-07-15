/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar() {

    //convierto las variables a numero lo mas rapido posible para no andar dando vueltas
    let numeroUno = parseInt(document.getElementById("txtIdNumeroUno").value);
    let numeroDos = parseInt(document.getElementById("txtIdNumeroDos").value);

    //cast es para un dato numerico en otro dato nunmerico 
    // de entero a flotante o al reves

    alert("La suma es " + (numeroUno + numeroDos))
}