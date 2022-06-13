

function calcular_precio_fotocopias() {
   var a = document.getElementById("a").value;
   var cantidadDecompias = document.getElementById("numerodejuegos").value;
   let precioCopiasSimples = 4;
   let precioCompiasDobleFaz = 5;
   var precioCompiasApaisado = 5; 
   var cantidad_copias_default =1;
   var correcionPrecioPorHojaImparDoblefaz= 4;
   var correcionPrecionporHojaImparApaisado =4;
   var maximascopiasPermitidasaimprimir = 9000;
   var precioAnillado = 150;
   var select = document.getElementById("select");
   var option = select.options[select.selectedIndex].text;
   var result = document.getElementById("result");
    activarAnillado();
     

  
      /*--Comprueba si la cantida de copias a realizar es menor que 1, de ser asi le asigna un valor por defecto--*/
        if(cantidadDecompias<1){
          cantidadDecompias = cantidad_copias_default;
        }
        /*--Final--*/
        
     /************************************************************************************************************************************** */
      
      //Al ser copias simples, no es necesario descontar nada, solo se le agrega un +1 por el valor de la primera impresion.
     if (option == "Simples") {
    
        document.getElementById('precioPorHoja').innerHTML= 'Precio por hoja $' + precioCopiasSimples;
        
        if(activaranillado){
        
          result.value =  (parseInt(a) * precioCopiasSimples * cantidadDecompias + precioAnillado * cantidadDecompias)

        }else{

          result.value =  (parseInt(a) * precioCopiasSimples * cantidadDecompias );}

    } 
     /************************************************************************************************************************************** */
      
      //El numero ingresado es par, no es necesario descontar nada.
      if (option == "Doble faz") {
  
          document.getElementById('precioPorHoja').innerHTML= 'Precio por hoja $' + precioCompiasDobleFaz;
         
          if(activaranillado){

            result.value =  (parseInt(a) /2  *  precioCompiasDobleFaz * cantidadDecompias + precioAnillado * cantidadDecompias)

          }else{

         result.value =  (parseInt(a) /2  *  precioCompiasDobleFaz * cantidadDecompias)

            }  ;
        
       
      }

       /************************************************************************************************************************************** */
      
      //le descuenta -1  al numero Impar ingresado para hacerlo par 
      if (option == "Doble faz" && a %2 ==1) {
         
        document.getElementById('precioPorHoja').innerHTML= 'Precio por hoja $' + precioCompiasDobleFaz;
        
        

        if(activaranillado){

          result.value =  (parseInt(a -1  ) /2  *  precioCompiasDobleFaz * cantidadDecompias + correcionPrecioPorHojaImparDoblefaz  * cantidadDecompias + precioAnillado * cantidadDecompias );

        }else{

       result.value =  (parseInt(a -1) /2  *  precioCompiasDobleFaz * cantidadDecompias + correcionPrecioPorHojaImparDoblefaz  * cantidadDecompias);
      }
       
      
    }
      /*se divide un numero par, no es necesario descontar el cociente*/ 
      if (option == "Apaisado" && a %4  == 0  ) {

          document.getElementById('precioPorHoja').innerHTML= 'Precio por hoja $' + precioCompiasApaisado;
         
          if(activaranillado){

            result.value =  (parseInt(a) /4  * precioCompiasApaisado  * cantidadDecompias + precioAnillado * cantidadDecompias);
          }else{

            result.value =  (parseInt(a) /4  * precioCompiasApaisado  * cantidadDecompias);
          }
       
      } 
      
     /************************************************************************************************************************************** */
      
    //le descuenta 0.25 al cociente de la divicion de los Impares 
      if (option == "Apaisado" ) {
        
        for(i=0.25; i<maximascopiasPermitidasaimprimir;i++){
            
          if( option =="Apaisado" && a/4 == i){
            
            document.getElementById('precioPorHoja').innerHTML= 'Precio por hoja $' + precioCompiasApaisado;
          
            if(activaranillado){

                 result.value =  (parseInt(a /4 -0.25)  * precioCompiasApaisado * cantidadDecompias  + correcionPrecionporHojaImparApaisado * cantidadDecompias + precioAnillado * cantidadDecompias);
            }else{  

              result.value = (parseInt(a /4 -0.25)  * precioCompiasApaisado * cantidadDecompias  + correcionPrecionporHojaImparApaisado * cantidadDecompias);

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
            
             if(activaranillado){

              result.value = (parseInt(a /4 -0.50)  * precioCompiasApaisado * cantidadDecompias  + correcionPrecionporHojaImparApaisado * cantidadDecompias + precioAnillado * cantidadDecompias);

             }else{

              result.value =  (parseInt(a /4 -0.50)  * precioCompiasApaisado * cantidadDecompias  + correcionPrecionporHojaImparApaisado * cantidadDecompias);
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
            
            if(activaranillado){

              result.value = (parseInt(a /4 -0.75)   * precioCompiasApaisado * cantidadDecompias  + correcionPrecionporHojaImparApaisado * cantidadDecompias + precioAnillado * cantidadDecompias);

            }else{

              result.value = (parseInt(a /4 -0.75)   * precioCompiasApaisado * cantidadDecompias  + correcionPrecionporHojaImparApaisado * cantidadDecompias);
            }
          
          }
        }
    } 
  }






     
