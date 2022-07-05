
const botonSumarJuego = document.querySelector("#botonSumarJuego");
const botonRestarJuego = document.querySelector("#botonRestarJuego")
const spanCantidadJuegos = document.getElementById("spanCantidadJuegos");
spanCantidadJuegos.value = parseInt(1);

function SumarcantidadJuegos (){

   spanCantidadJuegos.value ++;
   calcular_precio_fotocopias();
}

function RestarcantidadJuegos (){

  spanCantidadJuegos.value --;
  calcular_precio_fotocopias();
}

botonSumarJuego.addEventListener("click", SumarcantidadJuegos);
botonRestarJuego.addEventListener("click", RestarcantidadJuegos);