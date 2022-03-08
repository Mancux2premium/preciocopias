const carrito_copias = document.querySelector("#carrito_copias");
const boton_carrito = document.querySelector("#add__carrito");
const eliminar_carrito = document.querySelector("#borrar_carrito");
const msj_carrito_vacio = document.querySelector("#msj_carrito_vacio").textContent;
let nombre;
let anillado="no";
let clienteName;

boton_carrito.addEventListener("click", () =>{
      activarAnillado ();
      nombre_del_documento();
      anilladoSianilladoNO();
      comprobacionHojas(a,numerodejuegos);
      add_carrito();
     
})


/*--Funcion que da un valor 0 a hojas y cantidad de juegos si el usuario no ingreso ningun numero--*/
const comprobacionHojas = (hojas, cantidad) =>{
           
            if(hojas.value<=0){
               hojas.value=0;
            }

            if(cantidad.value<=0 ){
               cantidad.value=1;
            }
}
/*--Final--*/

/*--Funcion que permite al usuario ingresar el nombre del documento--*/
const nombre_del_documento = ()=>{

         nombre=prompt("Nombre del documento");
         clienteName=prompt("Nombre del cliente"); 
}
/*--Final--*/

/*--muestra un SI si el usuario quere el anilaldo o muestra un NO si el usuario no queiere el anillado--*/
const anilladoSianilladoNO = () =>{

      if(activaranillado){
         anillado = "Si";
      }
      else{
         anillado="No";
      }
}
/*--Final--*/

/*--Elimina la lista de productos ingresados por el usuario--*/
const borrar_carrito = ()=>{
  
   carrito_copias.innerHTML =" ";
   carrito_copias.innerHTML =`
   <thead>
   <tr>
    <th scope="col" >Cliente</th>
    <th scope="col" >Documento/Libro</th>
     <th scope="col" >Hojas</th>
     <th scope="col">Juegos</th>
     <th scope="col">Impresion</th>
     <th scope="col">Anillado</th>
     <th scope="col" >Total</th>
   </tr>
 </thead>
 <tfoot>
      <tr>
          <th scope="row">${msj_carrito_vacio.textContent="¡Carrito vacio!"}</th>
      </tr>
 </tfoot>

 
 `
}

/*--Esta a la escucha del click para llamar a la funcion Borrar_carrito--*/
eliminar_carrito.addEventListener("click",()=>{

      borrar_carrito();
  
})
/*--Final--*/
/*--Funcion que agrega los productos al carrito--*/
const add_carrito =()=>{

   carrito_copias.innerHTML =" ";
   carrito_copias.innerHTML =`
   <thead>
   <tr>
    <th scope="col" >Cliente</th>
    <th scope="col" >Documento/Libro</th>
     <th scope="col" >Hojas</th>
     <th scope="col">Juegos</th>
     <th scope="col">Impresion</th>
     <th scope="col">Anillado</th>
     <th scope="col" >Total</th>
   </tr>
 </thead>`;
   carrito_copias.innerHTML += `
   <tr>
   <th scope="col" >${clienteName}</th>
   <th scope="col" >${nombre}</th>
   <th scope="col" >${a.value}</th>
   <th scope="col">${numerodejuegos.value}</th>
   <th scope="col">${select.options[select.selectedIndex].text}</th>
   <th scope="col">${anillado}</th>
   <th scope="col" >${totalcarrito = result.value}</th>
   </tr>
    `; 
}
/*--Final--*/