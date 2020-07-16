/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar() {
    let producto1 = parseFloat(document.getElementById("txtIdPrecioUno").value);
    let producto2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
    let producto3 = parseFloat(document.getElementById("txtIdPrecioTres").value);

    let importe = producto1 + producto2 + producto3;

    alert(importe)
}

function Promedio() {
    let producto1 = parseFloat(document.getElementById("txtIdPrecioUno").value);
    let producto2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
    let producto3 = parseFloat(document.getElementById("txtIdPrecioTres").value);

    let promedio = (producto1 + producto2 + producto3) / 3;

    promedio = promedio.toFixed(2);

    alert(promedio)
}

function PrecioFinal() {

    let producto1 = parseFloat(document.getElementById("txtIdPrecioUno").value);
    let producto2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
    let producto3 = parseFloat(document.getElementById("txtIdPrecioTres").value);

    let importe = (producto1 + producto2 + producto3);

    let iva = importe * 21 / 100;

    let importeFinal = importe + iva;

    importeFinal = importeFinal.toFixed(2);

    alert(importe + iva);

}