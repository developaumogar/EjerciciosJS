let texto = document.getElementById("item-input");
let boton = document.getElementById("add-item");
let lista = document.getElementById("shopping-list");

boton.addEventListener("click", () => {
    let tareaTexto = texto.value.trim();
    if (tareaTexto === "") {
        alert("Escriba una tarea");
        return;
    }

    let contenedor = document.createElement("div");
    contenedor.classList.add("tarea-item");

    let span = document.createElement("span");
    span.textContent = tareaTexto;

    let botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";

    botonEliminar.addEventListener("click", () => {
        lista.removeChild(contenedor);
    });

    contenedor.appendChild(span);
    contenedor.appendChild(botonEliminar);
    lista.appendChild(contenedor);

    texto.value = "";
});
