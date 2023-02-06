//
let imagen_cambio = document.getElementById("imagen_cambio");
let cambiar_imagen_boton = document.getElementById("boton_cambio");

imagen_cambio.addEventListener("mouseover", () => {
  // cambio_de_imagen();
  imagen_cambio.src = "./img/desierto.jpg";
});

// function cambio_de_imagen(){
//     imagen_cambio.src = "./img/desierto.jpg"
// }

imagen_cambio.addEventListener("mouseout", () => {
  //cambio_normal();
  imagen_cambio.src = "./img/agua.jpg";
});

//-------------BOTON

cambiar_imagen_boton.addEventListener("click", () => {
  alert("Se cambiara la foto");
  imagen_cambio.src = "./img/desierto.jpg";
});

// cambiar_imagen_boton.addEventListener("dbclick", () => {
//     alert("Se cambiara la foto");
//     imagen_cambio.src = "./img/agua.jpg";
//   });


  