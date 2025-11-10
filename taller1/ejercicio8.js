let productos = ["lápiz", "boli","sacapuntas", "goma", "calculadora"];
let cantidades = [5,7,2,6,9];

function obtenerCantidad (producto, productos, cantidades){
    let indice = productos.indexOf(producto);

    if (indice !== -1) { // si el índice no es -1, es decir, si sí encontramos el producto en el array, entonces hacemos algo
        let cantidad = cantidades[indice];
        let mensaje = `Stock de ${producto}: ${cantidad}`;
        
        
        if (cantidad < 5) {
            mensaje += " (Stock bajo)";
        }
        
        return mensaje; 
    } else {
        return "Producto no encontrado";
    }
}

console.log (obtenerCantidad ("lápiz", productos, cantidades));
console.log (obtenerCantidad ("sacapuntas", productos, cantidades));
console.log (obtenerCantidad ("tijeras", productos, cantidades));

for (let i = 0; i < productos.length; i++) {
    console.log(`El stock de ${productos[i]} es de ${cantidades[i]}`);
    
}