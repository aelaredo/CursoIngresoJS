/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento() {
    let sueldo = parseFloat(document.getElementById("txtIdSueldo").value);
    let aumento;
    let porcentajeAumento = 10 / 100; //esto es el 10% 
    let nuevoSueldo;


    aumento = sueldo * porcentajeAumento;

    nuevoSueldo = sueldo + aumento;

    document.getElementById("txtIdResultado").value = nuevoSueldo;
}