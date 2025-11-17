let boton = document.getElementById("toggle-btn");
let parrafo = document.getElementById("parrafo");
boton.addEventListener("click", ()=>{
    parrafo.classList.toggle("oculto");
})