
const botonSumarJuego = document.querySelector("#botonSumarJuego");
const botonRestarJuego = document.querySelector("#botonRestarJuego")
const spanCantidadJuegos = document.getElementById("spanCantidadJuegos");
spanCantidadJuegos.value = parseInt(1);

function SumarcantidadJuegos (){

   spanCantidadJuegos.value ++;
}

function RestarcantidadJuegos (){

  spanCantidadJuegos.value --;
}

botonSumarJuego.addEventListener("click", SumarcantidadJuegos);
botonRestarJuego.addEventListener("click", RestarcantidadJuegos);