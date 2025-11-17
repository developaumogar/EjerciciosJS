let incrementar = document.getElementById("incrementar");
let decrementar = document.getElementById("decrementar");
let resetear = document.getElementById("resetear");
let numero = document.getElementById("contador");
let contador = 0;

incrementar.addEventListener("click", ()=>{
    contador++;
    numero.textContent= contador;
})

decrementar.addEventListener("click", ()=>{
    contador--
    numero.textContent= contador;
})

resetear.addEventListener("click", ()=>{
    contador=0;
    numero.textContent= contador;
})