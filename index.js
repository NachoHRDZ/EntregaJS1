function maquinaExpendedora(dineroUsuario, dulceElegido) {
    const precios = {
        "chocolate": 2000,
        "galleta": 700,
        "caramelo": 20,
    };

    if (precios.hasOwnProperty(dulceElegido)) {
        const precioDulce = precios[dulceElegido];
        if (dineroUsuario >= precioDulce) {
            const cambio = dineroUsuario - precioDulce;
            console.log("¡Disfruta tu", dulceElegido + "! Tu cambio es de", cambio.toFixed(2), "pesos.");
            return true;
        } else {
            console.log("Lo siento, no tienes suficiente dinero para comprar", dulceElegido + ".");
        }
    } else {
        console.log("Lo siento, el dulce", dulceElegido + " no está disponible en esta máquina.");
    }
    return false;
}

const dineroUsuario = 300; // Dinero disponible
const dulceElegido = "caramelo"; // Golosina preferida
maquinaExpendedora(dineroUsuario, dulceElegido);
