
let boton = document.getElementById("calcular");
let resultado = document.getElementById("resultado");

boton.addEventListener("click", ()=>{
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let operacion = document.getElementById("operacion").value;
    switch (operacion) {
        case "+":
            resultado.textContent = (num1 + num2);
            break;
        case "-":
            resultado.textContent = (num1 - num2);
            break;
        case "*":
            resultado.textContent = (num1 * num2);
            break;
        case "/":
            if (num2===0) {
                alert("introduzca un divisor diferente a 0");
            } else{
            resultado.textContent = (num1 / num2);
            }
            break;
        
    }
})