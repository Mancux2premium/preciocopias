const carrito_copias = document.querySelector("#carrito_copias");
const boton_carrito = document.querySelector("#add__carrito");
let nombre;
let anillado;


boton_carrito.addEventListener("click", () =>{

      nombre_del_documento();
      anilladoSianilladoNO();
      comprobacionHojas(a,numerodejuegos);
      carrito_copias.innerHTML += `
      <tr>
      <th scope="col" >${nombre}</th>
      <th scope="col" >${a.value}</th>
      <th scope="col">${numerodejuegos.value}</th>
      <th scope="col">${select.options[select.selectedIndex].text}</th>
      <th scope="col">${anillado}</th>
      <th scope="col" >${result.value}</th>
      </tr> `; 
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
