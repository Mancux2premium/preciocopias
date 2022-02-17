
function calc() {
   var a = document.getElementById("a").value;
   var cantidadDecompias = document.getElementById("numerodejuegos").value;
   var precioCopiasSimples = 4;
   var precioCompiasDobleFaz = 5;
   var precioCompiasApaisado = 5; 
   var correcionPrecioPorHojaImparDoblefaz= 4;
   var correcionPrecionporHojaImparApaisado =4;
   var maximascopiasPermitidasaimprimir = 9000;
   var precioAnillado = 150;
    


   var select = document.getElementById("select");
    var option = select.options[select.selectedIndex].text;
    
    var result = document.getElementById("result");
    
     
      
     /************************************************************************************************************************************** */
      
      //Al ser copias simples, no es necesario descontar nada, solo se le agrega un +1 por el valor de la primera impresion.
     if (option == "Simples") {
      
        document.getElementById('precioPorHoja').innerHTML= 'Precio por hoja $' + precioCopiasSimples;
        activarAnillado()
        if(activaranillado){

          result.value = "$" + (parseInt(a) * precioCopiasSimples * cantidadDecompias +1 + precioAnillado * cantidadDecompias)

        }else{

          result.value = "$" + (parseInt(a) * precioCopiasSimples * cantidadDecompias +1);}
        
    } 
     /************************************************************************************************************************************** */
      
      //El numero ingresado es par, no es necesario descontar nada.
      if (option == "Doble Faz") {
         
          document.getElementById('precioPorHoja').innerHTML= 'Precio por hoja $' + precioCompiasDobleFaz;
          activarAnillado()
          if(activaranillado){

            result.value = "$" + (parseInt(a) /2  *  precioCompiasDobleFaz * cantidadDecompias + precioAnillado * cantidadDecompias)

          }else{

         result.value = "$" + (parseInt(a) /2  *  precioCompiasDobleFaz * cantidadDecompias)

            }  ;
        
       
      }

       /************************************************************************************************************************************** */
      
      //le descuenta -1  al numero Impar ingresado para hacerlo par 
      if (option == "Doble Faz" && a %2 ==1) {
         
        document.getElementById('precioPorHoja').innerHTML= 'Precio por hoja $' + precioCompiasDobleFaz;
        
        activarAnillado()

        if(activaranillado){

          result.value = "$" + (parseInt(a -1  ) /2  *  precioCompiasDobleFaz * cantidadDecompias + correcionPrecioPorHojaImparDoblefaz  * cantidadDecompias + precioAnillado * cantidadDecompias );

        }else{

       result.value = "$" + (parseInt(a -1) /2  *  precioCompiasDobleFaz * cantidadDecompias + correcionPrecioPorHojaImparDoblefaz  * cantidadDecompias);
      }
       
      
    }
      /*se divide un numero par, no es necesario descontar el cociente*/ 
      if (option == "Apaisado" && a %4  == 0  ) {

          document.getElementById('precioPorHoja').innerHTML= 'Precio por hoja $' + precioCompiasApaisado;
          activarAnillado()
          if(activaranillado){

            result.value = "$" + (parseInt(a) /4  * precioCompiasApaisado  * cantidadDecompias + precioAnillado * cantidadDecompias);
          }else{

            result.value = "$" + (parseInt(a) /4  * precioCompiasApaisado  * cantidadDecompias);
          }
       
      } 
      
     /************************************************************************************************************************************** */
      
    //le descuenta 0.25 al cociente de la divicion de los Impares 
      if (option == "Apaisado" ) {
        
        for(i=0.25; i<maximascopiasPermitidasaimprimir;i++){
            
          if( option =="Apaisado" && a/4 == i){
            
            document.getElementById('precioPorHoja').innerHTML= 'Precio por hoja $' + precioCompiasApaisado;
            activarAnillado()
            if(activaranillado){

                 result.value = "$" + (parseInt(a /4 -0.25)  * precioCompiasApaisado * cantidadDecompias  + correcionPrecionporHojaImparApaisado * cantidadDecompias + precioAnillado * cantidadDecompias);
            }else{  

              result.value = "$" + (parseInt(a /4 -0.25)  * precioCompiasApaisado * cantidadDecompias  + correcionPrecionporHojaImparApaisado * cantidadDecompias);

            }
         
          }
        }
    } 
     /************************************************************************************************************************************** */
       
      //le descuenta 0.50 al cociente de la divicion de los Impares 
      if (option == "Apaisado"  ) {
        
        for(i=0.5; i<maximascopiasPermitidasaimprimir;i++){
            
          if( option =="Apaisado" && a/4 == i){
            
            document.getElementById('precioPorHoja').innerHTML= 'Precio por hoja $' + precioCompiasApaisado;
             activarAnillado()
             if(activaranillado){

              result.value = "$" + (parseInt(a /4 -0.50)  * precioCompiasApaisado * cantidadDecompias  + correcionPrecionporHojaImparApaisado * cantidadDecompias + precioAnillado * cantidadDecompias);

             }else{

              result.value = "$" + (parseInt(a /4 -0.50)  * precioCompiasApaisado * cantidadDecompias  + correcionPrecionporHojaImparApaisado * cantidadDecompias);
             }
            
          
          }
        }
    } 
     /************************************************************************************************************************************** */
      //le descuenta 0.75 al cociente de la divicion de los Impares 
      if (option == "Apaisado"  ) {
      
        for(i=0.75; i<maximascopiasPermitidasaimprimir;i++){
            
          if( option =="Apaisado" && a/4 == i){
            
            document.getElementById('precioPorHoja').innerHTML= 'Precio por hoja $' + precioCompiasApaisado;
            activarAnillado()
            if(activaranillado){

              result.value = "$" + (parseInt(a /4 -0.75)   * precioCompiasApaisado * cantidadDecompias  + correcionPrecionporHojaImparApaisado * cantidadDecompias + precioAnillado * cantidadDecompias);

            }else{

              result.value = "$" + (parseInt(a /4 -0.75)   * precioCompiasApaisado * cantidadDecompias  + correcionPrecionporHojaImparApaisado * cantidadDecompias);
            }
          
          }
        }
    } 
    
  }

  //Verifica si la opcion anillado fue tildada 
  function activarAnillado (){
     if(document.getElementById("activarAnillado").checked){
       activaranillado= true;
     }
     else {
       activaranillado = false;
     }
  }
  /************************************************************************************************************************************** */

