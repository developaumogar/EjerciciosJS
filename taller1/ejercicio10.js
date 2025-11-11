function generarTabla (numero, limite){
    let numerosPares = [];

    for (let i = 0; i <= limite; i++) {
        resultado = numero*i;
        
            
            console.log(numero + " x "+ i +" = " + resultado);

            if (resultado % 2 === 0) {
                console.log("Número par. Lo añado al array!");
                numerosPares.push(resultado);
            }
            
            
        }
        console.log("Tenemos " + numerosPares.length + " números pares añadidos al array");
    }


generarTabla(10,6)