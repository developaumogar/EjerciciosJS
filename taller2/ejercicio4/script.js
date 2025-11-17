let foto1 = document.getElementById("img1");
let foto2 = document.getElementById("img2");
let foto3 = document.getElementById("img3");
let imagen = document.getElementById("imagen");

img1.addEventListener ("click", ()=>{
    imagen.src = "imagen1.jpg"
})

img2.addEventListener ("click", ()=>{
    imagen.src = "imagen2.jpg"
})

img3.addEventListener ("click", ()=>{
    imagen.src = "imagen3.jpg"
})