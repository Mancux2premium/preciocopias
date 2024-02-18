const agregarAlCarrito = document.getElementById('agregarAlCarrito')
const templateCarrito = document.getElementById('template-Carrito');

document.addEventListener('click', (e)=>{
     
   // e.preventDefault();
    const AgregarAlCarrito = e.target.classList[0];
    
     switch( AgregarAlCarrito){

        case 'botonAgregarQuitar':

          calcular_precio_fotocopias();
          
          pintarCarrito();
        break;
        case 'vaciarCarrito':
          borrarCarrito();
          break;
        
      }

})

function pintarCarrito(){

  /*templateCarrito.innerHTML +=` <div class="templateCarrito">
  <div class="tituloDelProducto">
      <p>Nombre:<span id="nombre">${nombreDocumento}</span></p>
  </div>
  <div class="contenedorBotonesAgregarQuitar">
      <p class="precio">Precio<span>${result.value}</span></p>
      
      <button  id="add__carrito"  class="botonAgregarQuitar agregarProducto " > Agregar </button>
      <button id ="borrar_carrito"class="botonAgregarQuitar eliminarProducto"> quitar</button>
  </div>    
      
</div>
        `
   */
}

function borrarCarrito(){

   templateCarrito.innerHTML =' '
   
}