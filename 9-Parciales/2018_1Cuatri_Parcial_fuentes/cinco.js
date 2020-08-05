function mostrar() {
    let planeta;

    planeta = prompt("Ingrese un planeta");

    switch (planeta) {
        case "tierra":
            alert("aca vivimos");
            break;
        case "venus":
        case "mercurio":
            alert("aca hace mas calor");
            break;
        case "marte":
        case "jupiter":
        case "saturno":
        case "urano":
        case "neptuno":
            alert("aca hace mas frio");
            break;
        default:
            alert("No es un planeta valido");
            break;
    }
}