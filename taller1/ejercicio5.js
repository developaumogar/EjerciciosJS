function saludar(nombre) {
    console.log("Hola " + nombre);
}
saludar("Paula");

function calcularArea (a,b){
    console.log("El área total del rectángulo es de " + a*b + " metros cuadrados") ;
}
calcularArea(4,5);

function esPar (numero){
    if (numero % 2 == 0) {
        console.log(true);
        
    } else{
        console.log(false);
    }
}
esPar(45);