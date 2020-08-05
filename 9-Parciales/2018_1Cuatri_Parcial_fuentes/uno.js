function mostrar() {
    let ancho;
    let largo;
    let perimetro;

    ancho = parseInt(prompt("ingrese el ancho del rectangulo"));
    largo = parseInt(prompt("ingrese el largo del rectangulo"));
    perimetro = ancho * 2 + largo * 2;

    alert(perimetro);

}