function mostrar() {

    let numero;
    let maximo = 6;
    let minimo = 1;

    numero = Math.round(Math.random() * (maximo - minimo) + minimo);

    // es lo mismos que 
    //numero = Math.round(Math.random() * 9 - 1)

    alert(numero);


} //FIN DE LA FUNCIÓN