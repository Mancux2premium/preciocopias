/* let vistaPreciaCheckox = document.getElementById("vistaprevia");
function vistaPreviaPDF(){    
     vistaPreciaCheckox = document.getElementById("vistaprevia");
 
    if(document.getElementById("vistaprevia").checked){
        console.log("acepto")
        document.getElementsByTagName("embed").display="none";
    }
 }

 vistaPreciaCheckox.addEventListener("click", vistaPreviaPDF);
 

 */
 var miBoton = document.getElementById("vistaprevia");
 var miDiv = document.getElementsByClassName("vistaPreviaPDF");
 
 // Agregar un controlador de eventos clic al botón
 miBoton.addEventListener("click", function() {
    console.log("click")
   // Cambiar el valor de display del div a "none"
   //miDiv.style.display = "none";
 });