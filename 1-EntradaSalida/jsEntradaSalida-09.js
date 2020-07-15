/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento() {
    let sueldo = parseInt(document.getElementById("txtIdSueldo").value);
    let resultado

    resultado = sueldo * 1.10;

    txtIdResultado.value = resultado.toFixed(2);
}