let completos = ["Paula Monedero", "Paco Perez", "Pepe Martinez", "Lola Gonzalez"];

function obtenerPrimerNombre (completos){
    let partes = completos.split (" ");
    return partes [0];
}

for (let i = 0; i < completos.length; i++) {
    let primerNombre = obtenerPrimerNombre(completos [i]);
    
    if (primerNombre.length <= 4) {
        console.log(primerNombre + " -> Nombre corto");
    } else {
        console.log(primerNombre + " -> Nombre largo");
    }
}