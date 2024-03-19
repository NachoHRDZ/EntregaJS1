function mostrarMenu() {
    const nombre = prompt("¡Bienvenido a la Máquina Expendedora de Dulces! Por favor, introduce tu nombre:");
    alert("Hola, " + nombre + ". ¡A continuación verás nuestro catalogo de dulces!");

    const precios = {
        "chocolates": 2000,
        "galletas": 700,
        "caramelos": 20,
    };

    let dineroUsuario = parseFloat(prompt("Por favor, introduce la cantidad de dinero que deseas gastar:"));
    if (isNaN(dineroUsuario)) {
        alert("Cantidad inválida. Por favor, introduce un número válido.");
        return;
    }

    let dulceElegido;
    do {
        dulceElegido = prompt("Estos son nuestros dulces disponibles:\n\n" +
            "1. Chocolates - $2000\n" +
            "2. Galletas - $700\n" +
            "3. Caramelos - $20\n\n" +
            "Por favor, introduce el número del dulce que deseas (1-3), o escribe 'x' para salir:");

        switch (dulceElegido) {
            case "1":
                dulceElegido = "chocolates";
                break;
            case "2":
                dulceElegido = "galletas";
                break;
            case "3":
                dulceElegido = "caramelos";
                break;
            case "x":
                alert("Gracias por visitar la Máquina Expendedora de Dulces. ¡Que tengas un buen día!");
                return; 
            default:
                alert("Por favor, selecciona una opción válida.");
        }

        if (precios.hasOwnProperty(dulceElegido)) {
            const precioDulce = precios[dulceElegido];
            if (dineroUsuario >= precioDulce) {
                const cambio = dineroUsuario - precioDulce;
                alert("¡Disfruta tu " + dulceElegido + "! Tu cambio es de $" + cambio.toFixed(2) + ".");
                return true;
            } else {
                alert("Lo siento, no tienes suficiente dinero para comprar " + dulceElegido + ".");
            }
        } else {
            alert("Lo siento, el dulce " + dulceElegido + " no está disponible en esta máquina.");
        }

        let comprarMas = confirm("¿Quieres comprar algo más?");
        if (!comprarMas) {
            alert("Gracias por tu compra en la Máquina Expendedora de Dulces.");
            return; 
        }

    } while (true);
}

mostrarMenu();
