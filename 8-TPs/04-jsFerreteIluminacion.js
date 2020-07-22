/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio() {
    let cantidad = parseInt(document.getElementById("txtIdCantidad").value);
    let marca = document.getElementById("Marca").value;
    let precioUnitario = 35;
    let precioFinal

    // ahora evaluando la cantidad y la marca voy a calcular el precio unitario, y con eso calculo si al precio final se le agrega ingresos brutos

    if (cantidad >= 6) { // filtro por cantidad
        precioUnitario = precioUnitario - (precioUnitario * 0.50); //aplico  el descuento por cantidad 50% por 6 o mas lamparas
        document.getElementById("txtIdprecioDescuento").value = `Usted pagará $ ${precioUnitario} por cada lampara. Con un descuento del 50% por lampara`; //paso a caja de texto el resultado
        precioFinal = precioUnitario * cantidad // calculo el precio final con el descuento

        ///Es la parte que hace mostrar el alert
        if (precioFinal > 120) { // me fijo si supera el limite a pagar por ingresos brutos
            let ingresosBrutos = precioFinal * 0.10 // esto es el 10% de ingresos brutos sobre el precio final
            precioFinal = precioFinal + ingresosBrutos; // aca le agrego al precio final (que ya viene con el descuento por cantidad) el porcentaje
            alert(`Usted compro ${cantidad} de lamparas, con precio unitario  de $ ${precioUnitario}. El total de su compra es $ ${precioFinal} total. Usted pagó $ ${ingresosBrutos} de ingresos brutos. El precio final sin impuestos es de $ ${precioFinal - ingresosBrutos} `);
        } else //aca muestro el mensaje en el caso que no perciba el impuesto mostrando cantidad el precio unitario y el final (esta vez sin impuestos)
            alert(`Usted compro ${cantidad} de lamparas, con precio unitario de $ ${precioUnitario}. El total de su compra es $ ${precioFinal} total.`);


    } else if (cantidad == 4) { //filtro por cantidad
        //aca que la cantidad es 4 pregunto si es marca argentina o felipe de ser asi aplico 25% de descuento y si da mas de 120 el final agrego 10%
        if (marca == "ArgentinaLuz" || marca == "FelipeLamparas") {
            precioUnitario = precioUnitario - (precioUnitario * 0.25);
            document.getElementById("txtIdprecioDescuento").value = `Usted pagará $ ${precioUnitario} por cada lampara. Con un descuento del 25% por lampara`;
            precioFinal = precioUnitario * cantidad;


            ///Esta linea de codigo se repite 
            if (precioFinal > 120) {
                let ingresosBrutos = precioFinal * 0.10;
                precioFinal = precioFinal + ingresosBrutos;
                alert(`Usted compro ${cantidad} de lamparas, con precio unitario de $ ${precioUnitario}. El total de su compra es $ ${precioFinal} total. Usted pagó $ ${ingresosBrutos} de ingresos brutos El precio final sin impuestos es de $ ${precioFinal - ingresosBrutos}`);
            } else {
                alert(`Usted compro ${cantidad} de lamparas, con precio unitario de $ ${precioUnitario}. El total de su compra es $ ${precioFinal} total.`);
            }
            ///Esta linea de codigo se repite

        } else { //aca si no es marca argentinaluz o felipelampara aplico 20% de descuento
            precioUnitario = precioUnitario - (precioUnitario * 0.20);
            document.getElementById("txtIdprecioDescuento").value = `Usted pagará $ ${precioUnitario} por cada lampara. Con un descuento del 20% por lampara`;
            precioFinal = precioUnitario * cantidad;


            ///Esta linea de codigo se repite 
            if (precioFinal > 120) {
                let ingresosBrutos = precioFinal * 0.10;
                precioFinal = precioFinal + ingresosBrutos;
                alert(`Usted compro ${cantidad} de lamparas, con precio unitario de $ ${precioUnitario}. El total de su compra es $ ${precioFinal} total. Usted pagó $ ${ingresosBrutos} de ingresos brutos El precio final sin impuestos es de $ ${precioFinal - ingresosBrutos}`);
            } else {
                alert(`Usted compro ${cantidad} de lamparas, con precio unitario de $ ${precioUnitario}. El total de su compra es $ ${precioFinal} total.`);
            }
        }

    } else if (cantidad == 5) { //filtro cuando la cantidad es 5
        //si la cantidad es 5 y es marca argentina luz se hace desc. de 40
        if (marca == "ArgentinaLuz") { // filtro la marca
            precioUnitario = precioUnitario - (precioUnitario * 0.4);
            document.getElementById("txtIdprecioDescuento").value = `Usted pagará $ ${precioUnitario} por cada lampara. Con un descuento del 40% por lampara`;
            precioFinal = precioUnitario * cantidad;

            if (precioFinal > 120) {
                let ingresosBrutos = precioFinal * 0.10;
                precioFinal = precioFinal + ingresosBrutos;
                alert(`Usted compro ${cantidad} de lamparas, con precio unitario de $ ${precioUnitario}. El total de su compra es $ ${precioFinal} total. Usted pagó $ ${ingresosBrutos} de ingresos brutos El precio final sin impuestos es de $ ${precioFinal - ingresosBrutos}`);
            } else {
                alert(`Usted compro ${cantidad} de lamparas, con precio unitario de $ ${precioUnitario}. El total de su compra es $ ${precioFinal} total.`);
            }
        } else { //si son 5 y no es marca argentinaluz entra aca
            precioUnitario = precioUnitario - (precioUnitario * 0.3);
            document.getElementById("txtIdprecioDescuento").value = `Usted pagará $ ${precioUnitario} por cada lampara. Con un descuento del 30% por lampara`;
            precioFinal = precioUnitario * cantidad;

            if (precioFinal > 120) {
                let ingresosBrutos = precioFinal * 0.10;
                precioFinal = precioFinal + ingresosBrutos;
                alert(`Usted compro ${cantidad} de lamparas, con precio unitario de $ ${precioUnitario}. El total de su compra es $ ${precioFinal} total. Usted pagó $ ${ingresosBrutos} de ingresos brutos El precio final sin impuestos es de $ ${precioFinal - ingresosBrutos}`);
            } else {
                alert(`Usted compro ${cantidad} de lamparas, con precio unitario de $ ${precioUnitario}. El total de su compra es $ ${precioFinal} total.`);
            }
        }

    } else if (cantidad == 3) {
        if (marca == "ArgentinaLuz") {
            precioUnitario = precioUnitario - (precioUnitario * 0.15);
            document.getElementById("txtIdprecioDescuento").value = `Usted pagará $ ${precioUnitario} por cada lampara. Con un descuento del 15% por lampara`;
            precioFinal = precioUnitario * cantidad;

            if (precioFinal > 120) {
                let ingresosBrutos = precioFinal * 0.10;
                precioFinal = precioFinal + ingresosBrutos;
                alert(`Usted compro ${cantidad} de lamparas, con precio unitario de $ ${precioUnitario}. El total de su compra es $ ${precioFinal} total. Usted pagó $ ${ingresosBrutos} de ingresos brutos El precio final sin impuestos es de $ ${precioFinal - ingresosBrutos}`);
            } else {
                alert(`Usted compro ${cantidad} de lamparas, con precio unitario de $ ${precioUnitario}. El total de su compra es $ ${precioFinal} total.`);
            }
        } else if (marca == "FelipeLamparas") {
            precioUnitario = precioUnitario - (precioUnitario * 0.10);
            document.getElementById("txtIdprecioDescuento").value = `Usted pagará $ ${precioUnitario} por cada lampara. Con un descuento del 10% por lampara`;
            precioFinal = precioUnitario * cantidad;

            if (precioFinal > 120) {
                let ingresosBrutos = precioFinal * 0.10;
                precioFinal = precioFinal + ingresosBrutos;
                alert(`Usted compro ${cantidad} de lamparas, con precio unitario de $ ${precioUnitario}. El total de su compra es $ ${precioFinal} total. Usted pagó $ ${ingresosBrutos} de ingresos brutos El precio final sin impuestos es de $ ${precioFinal - ingresosBrutos}`);
            } else {
                alert(`Usted compro ${cantidad} de lamparas, con precio unitario de $ ${precioUnitario}. El total de su compra es $ ${precioFinal} total.`);
            }
        } else {
            precioUnitario = precioUnitario - (precioUnitario * 0.05);
            document.getElementById("txtIdprecioDescuento").value = `Usted pagará $ ${precioUnitario} por cada lampara. Con un descuento del 10% por lampara`;
            precioFinal = precioUnitario * cantidad;

            if (precioFinal > 120) {
                let ingresosBrutos = precioFinal * 0.10;
                precioFinal = precioFinal + ingresosBrutos;
                alert(`Usted compro ${cantidad} de lamparas, con precio unitario de $ ${precioUnitario}. El total de su compra es $ ${precioFinal} total. Usted pagó $ ${ingresosBrutos} de ingresos brutos El precio final sin impuestos es de $ ${precioFinal - ingresosBrutos}`);
            } else {
                alert(`Usted compro ${cantidad} de lamparas, con precio unitario de $ ${precioUnitario}. El total de su compra es $ ${precioFinal} total.`);
            }
        }
    } else {
        precioFinal = precioUnitario * cantidad;
        document.getElementById("txtIdprecioDescuento").value = `Usted pagará $ ${precioUnitario} por cada lampara.`

        ////Esta linea de codigo se repite es la parte que hace mostrar el alert
        if (precioFinal > 120) {
            let ingresosBrutos = precioUnitario * cantidad * 0.10 // esto tiene que ser el 10% 
            precioFinal = precioFinal + ingresosBrutos;
            alert(`Usted compro ${cantidad} de lamparas, con precio unitario de $ ${precioUnitario}. El total de su compra es $ ${precioFinal} total. Usted pagó $ ${ingresosBrutos} de ingresos brutos. El precio final sin impuestos es de $ ${precioFinal - ingresosBrutos} `);
        } else {
            alert(`Usted compro ${cantidad} de lamparas, con precio unitario de $ ${precioUnitario}. El total de su compra es $ ${precioFinal} total.`);
        }
        ////Esta linea de codigo se repite

    }


} //fin de la funcion