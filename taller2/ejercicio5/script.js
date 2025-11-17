let tarea = document.getElementById("nueva-tarea");
let boton = document.getElementById("agregar-tarea");
let lista = document.getElementById("lista-tareas");

boton.addEventListener("click", () => {
    let escrito = tarea.value;
    if (escrito.trim() === "") return;

    let li = document.createElement("li"); 
    li.textContent = escrito;              
    lista.appendChild(li);                 

    tarea.value = ""; 
});
