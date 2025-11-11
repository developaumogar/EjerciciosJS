function contarPalabras(frase) {
    frase = frase.trim ();
    let palabras = frase.split (" ");
    palabras = palabras.filter(p => p !== "");
    console.log(palabras.length); ;
    
}

function tipoFrase (frase){
    let cantidad = contarPalabras(frase);

    if (cantidad < 10) {
        console.log("Esta es una frase corta porque tiene menos de 10 palabras");
    } else {
        console.log("Esta es una frase larga porque tiene 10 palabras o más");
    }
    
}

function palabra(frase) {
    frase = frase.trim ();
    let palabras = frase.split (" ").filter(p => p !== "");;
    for (const individuales of palabras) {
        console.log(individuales);
    }
}

function vocales(frase) {
    frase = frase.trim ();
    let palabras = frase.split (" ").filter(p => p !== "");
    let contador=0;
    for (const palabra of palabras) {
        let primera = palabra.charAt(0).toLowerCase();

        if ("aeiou".includes(primera)) {
            contador++;
        }
        
    }
    return "El numero de palabras que empiezn por vocal es de: " + contador;
}

let frase = "Hola a todos y bienvenidos a estos ejercicios de JavaScript";

console.log("Número de palabras:", contarPalabras(frase));
tipoFrase(frase);
palabra(frase);
console.log(vocales(frase));