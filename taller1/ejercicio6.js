let calificaciones = [5, 4, 6.2, 8, 9, 4.7];

function calcularPromedio(calificaciones) {
    let suma = 0;
    for (let i = 0; i < calificaciones.length; i++) {
        suma += calificaciones[i];
    }
    return suma / calificaciones.length; // devuelve un número
}

let media = calcularPromedio(calificaciones);

console.log("La media de notas es:", media); // mostramos la media

if (media >= 5) {
    console.log("Aprobado!");
} else {
    console.log("Suspenso");
}

for (const individual of calificaciones) {
    console.log(individual);
}
