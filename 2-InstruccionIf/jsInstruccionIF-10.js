function mostrar() {
    let nota;

    nota = Math.round(Math.random() * 9 + 1);

    if (nota >= 9) {
        alert(nota + " EXCELENTE")
    } else if (nota >= 4) {
        alert(nota + " APROBÓ")
    } else {
        alert(nota + " Vamos, la proxima se puede")
    }

} //FIN DE LA FUNCIÓN