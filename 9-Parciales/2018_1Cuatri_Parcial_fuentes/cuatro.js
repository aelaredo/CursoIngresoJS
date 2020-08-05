function mostrar() {
    let numero1;
    let numero2;

    numero1 = parseInt(prompt("Ingrese un numero"));
    numero2 = parseInt(prompt("Ingrese otro numero"));

    if (numero1 == numero2) {
        alert(`${numero1}${numero2}`);
    } else if (numero1 > numero2) {
        alert(`La resta es ${numero1 - numero2}`);
    } else if (numero1 + numero2 > 10) {
        alert(`La suma es ${numero1 + numero2} y supero el 10`)
    } else {
        alert(`La suma es ${numero1 + numero2}`)
    }

}