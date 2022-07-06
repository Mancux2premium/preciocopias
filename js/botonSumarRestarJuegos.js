
const contenedorBotones =document.querySelector("#contenedorBotones");
const spanCantidadJuegos = document.getElementById("spanCantidadJuegos");

spanCantidadJuegos.value = parseInt(1);

function SumarRestarJuegos (e){
  e.preventDefault();

  const botonSumarRestar =e.target.classList[1];

  switch(botonSumarRestar){

    case 'sumarJuego':
      spanCantidadJuegos.value++;
      calcular_precio_fotocopias();
    break;
    case 'RestarJuego':
      spanCantidadJuegos.value--;
      calcular_precio_fotocopias();
      break;
    
  }

}
contenedorBotones.addEventListener("click", SumarRestarJuegos);

