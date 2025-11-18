let nombre = document.getElementById("nombre");
let mail = document.getElementById("email");
let password = document.getElementById("password");
let boton = document.getElementById("enviar");

let camposCompletos = [nombre, mail, password];

boton.addEventListener("click", () => {
  for (let i = 0; i < camposCompletos.length; i++) {
    if (camposCompletos[i].value.trim() === "") {
      alert("Introduzca todos los valores");
      return;
    }
  }
  alert("Formulario relleno correctamente");
});
