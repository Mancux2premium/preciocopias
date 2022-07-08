const agregarAlCarrito = document.getElementById('agregarAlCarrito')
const templateCarrito = document.getElementById('template-Carrito');
let precio = [];
document.addEventListener('click', (e)=>{
     
   // e.preventDefault();
    const AgregarAlCarrito = e.target.classList[0];
     console.log(AgregarAlCarrito);
     switch( AgregarAlCarrito){

        case 'botonAgregarQuitar':
          spanCantidadJuegos.value++;
          calcular_precio_fotocopias();
          
          pintarCarrito();
          prueba();
        break;
        case 'vaciarCarrito':
          spanCantidadJuegos.value--;
          borrarCarrito()
          break;
        
      }

})

function pintarCarrito(){

  templateCarrito.innerHTML +=` <div class="templateCarrito">
  <div class="tituloDelProducto">
      <p>Nombre:<span id="nombre"></span></p>
  </div>
  <div class="contenedorBotonesAgregarQuitar">
      <p class="precio">Precio<span>${result.value}</span></p>
      
      <button  id="add__carrito"  class="botonAgregarQuitar agregarProducto " > Agregar </button>
      <button id ="borrar_carrito"class="botonAgregarQuitar eliminarProducto"> quitar</button>
  </div>    
      
</div>
        `
   
}

function borrarCarrito(){

   precio.pop();
   templateCarrito.innerHTML =' '
   
}