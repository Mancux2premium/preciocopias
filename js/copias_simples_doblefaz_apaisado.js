var sumaTotalDelosPdf =0;
function calcular_precio_fotocopias() {
  let a = document.getElementById("a").value;
   //var cantidadDecompias = document.getElementById("numerodejuegos").value;
   let precioCopiasSimples = 6;
   let precioCompiasDobleFaz = 7;
   var precioCompiasApaisado = 7; 
   var cantidad_copias_default =1;
   var correcionPrecioPorHojaImparDoblefaz= 6;
   var correcionPrecionporHojaImparApaisado =6;
   var maximascopiasPermitidasaimprimir = 9000;
   var precioAnillado = 180;
   let select = document.getElementById("select");
   let option = select.options[select.selectedIndex].text;
   var result = document.getElementById("result");
 
  
  
   activarAnillado();
   if(spanCantidadJuegos.value <1){
    spanCantidadJuegos.value=1;
}
switch (option){
    case "Simples":
      document.getElementById('precioPorHoja').innerHTML= 'Precio por hoja $' + precioCopiasSimples;
    break;
    case "Doble faz":
      document.getElementById('precioPorHoja').innerHTML= 'Precio por hoja $' + precioCompiasDobleFaz;
    break;
    case "ApaisadoSimpleFaz":
      document.getElementById('precioPorHoja').innerHTML= 'Precio por hoja $' + precioCopiasSimples;
      break;
    case "ApaisadoDoblefaz":
      document.getElementById('precioPorHoja').innerHTML= 'Precio por hoja $' + precioCompiasApaisado;
    break;
}  

    if(a ===""){
      result.value =0;
      sumaTotalDelosPdf =0;
    }
      /*Si se cumple la condicion entra al programa*/
        if(a !==""){

           /*--Comprueba si la cantida de copias a realizar es menor que 1, de ser asi le asigna un valor por defecto--*/
       
      /*--Final--*/
    
   /************************************************************************************************************************************** */
    
    //Al ser copias simples, no es necesario descontar nada, solo se le agrega un +1 por el valor de la primera impresion.
   if (option == "Simples") {
      document.getElementById('precioPorHoja').innerHTML= 'Precio por hoja $' + precioCopiasSimples;
      
      if(activaranillado ){ 
       
       // result.value =  (parseInt(a) * precioCopiasSimples * spanCantidadJuegos.value  + precioAnillado * spanCantidadJuegos.values)
        result.value =  (parseInt(a)   * precioCopiasSimples  * spanCantidadJuegos.value + precioAnillado * spanCantidadJuegos.value);
        sumaTotalDelosPdf += parseInt(result.value);
      }else{

       
        sumaTotalDelosPdf += parseInt( result.value =  (parseInt(a) * precioCopiasSimples * spanCantidadJuegos.value ));
      }
       
     
  } 
   /************************************************************************************************************************************** */
    
    //El numero ingresado es par, no es necesario descontar nada.
    if (option == "Doble faz" && a%2 ==0 ) {
     
        document.getElementById('precioPorHoja').innerHTML= 'Precio por hoja $' + precioCompiasDobleFaz;
       
        if(activaranillado){

          result.value =  (parseInt(a ) /2  *  precioCompiasDobleFaz * spanCantidadJuegos.value + precioAnillado * spanCantidadJuegos.value);
          
        }else{
         
        
       sumaTotalDelosPdf += parseInt( result.value =  (parseInt(a) /2  *  precioCompiasDobleFaz * spanCantidadJuegos.value));
       
       }
      
    }

     /************************************************************************************************************************************** */
       //le descuenta 0.25 al cociente de la divicion de los Impares 
       if (option == "Doble faz" ) {
      
        for(i=0.25; i<maximascopiasPermitidasaimprimir;i++){
            
          if( option =="Doble faz" && a/2 == i){
            
            document.getElementById('precioPorHoja').innerHTML= 'Precio por hoja $' + precioCompiasDobleFaz;
          
            if(activaranillado){
  
                 result.value =  (parseInt(a /2 -0.25)  * precioCompiasDobleFaz * spanCantidadJuegos.value  + correcionPrecioPorHojaImparDoblefaz * spanCantidadJuegos.value + precioAnillado * spanCantidadJuegos.value);
            }else{  
              sumaTotalDelosPdf += parseInt(result.value = (parseInt(a /2 -0.25)  * precioCompiasDobleFaz * spanCantidadJuegos.value  + correcionPrecioPorHojaImparDoblefaz * spanCantidadJuegos.value));
  
            }
         
          }
        }
    } 
       //le descuenta 0.50 al cociente de la divicion de los Impares 
     if (option == "Doble faz" ) {
      
      for(i=0.5; i<maximascopiasPermitidasaimprimir;i++){
          
        if( option =="Doble faz" && a/2 == i){
          
          document.getElementById('precioPorHoja').innerHTML= 'Precio por hoja $' + precioCompiasDobleFaz;
        
          if(activaranillado){

               result.value =  (parseInt(a /2 -0.5)  * precioCompiasDobleFaz * spanCantidadJuegos.value  + correcionPrecionporHojaImparApaisado * spanCantidadJuegos.value + precioAnillado * spanCantidadJuegos.value);
          }else{  
            sumaTotalDelosPdf += parseInt(result.value = (parseInt(a /2 -0.5)  * precioCompiasDobleFaz * spanCantidadJuegos.value  + correcionPrecionporHojaImparApaisado * spanCantidadJuegos.value));

          }
       
        }
      }
  } 
       //le descuenta 0.75 al cociente de la divicion de los Impares 
     if (option == "Doble faz" ) {
      
        for(i=0.75; i<maximascopiasPermitidasaimprimir;i++){
            
          if( option =="Doble faz" && a/2 == i){
            
            document.getElementById('precioPorHoja').innerHTML= 'Precio por hoja $' + precioCompiasDobleFaz;
          
            if(activaranillado){
  
                 result.value =  (parseInt(a /2 -0.75)  * precioCompiasDobleFaz * spanCantidadJuegos.value  + correcionPrecionporHojaImparApaisado * spanCantidadJuegos.value + precioAnillado * spanCantidadJuegos.value);
            }else{  
              sumaTotalDelosPdf += parseInt(result.value = (parseInt(a /2 -0.75)  * precioCompiasDobleFaz * spanCantidadJuegos.value  + correcionPrecionporHojaImparApaisado * spanCantidadJuegos.value));
  
            }
         
          }
        }
    } 

     /************************************************************************************************************************************** */

    /*se divide un numero par, no es necesario descontar el cociente*/ 
    if (option == "ApaisadoDoblefaz" && a %4  == 0  ) {

        document.getElementById('precioPorHoja').innerHTML= 'Precio por hoja $' + precioCompiasApaisado;
       
        if(activaranillado){

          result.value =  (parseInt(a) /4  * precioCompiasApaisado  * spanCantidadJuegos.value + precioAnillado * spanCantidadJuegos.value);
        }else{

          sumaTotalDelosPdf += parseInt(result.value =  (parseInt(a) /4  * precioCompiasApaisado  * spanCantidadJuegos.value));
        }
     
    } 
    
   /************************************************************************************************************************************** */
    
  //le descuenta 0.25 al cociente de la divicion de los Impares 
    if (option == "ApaisadoDoblefaz" ) {
      
      for(i=0.25; i<maximascopiasPermitidasaimprimir;i++){
          
        if( option =="ApaisadoDoblefaz" && a/4 == i){
          
          document.getElementById('precioPorHoja').innerHTML= 'Precio por hoja $' + precioCompiasApaisado;
        
          if(activaranillado){

               result.value =  (parseInt(a /4 -0.25)  * precioCompiasApaisado * spanCantidadJuegos.value  + correcionPrecionporHojaImparApaisado * spanCantidadJuegos.value + precioAnillado * spanCantidadJuegos.value);
          }else{  
            sumaTotalDelosPdf += parseInt(result.value = (parseInt(a /4 -0.25)  * precioCompiasApaisado * spanCantidadJuegos.value  + correcionPrecionporHojaImparApaisado * spanCantidadJuegos.value));

          }
       
        }
      }
  } 
   /************************************************************************************************************************************** */
     
    //le descuenta 0.50 al cociente de la divicion de los Impares 
    if (option == "ApaisadoDoblefaz"  ) {
      
      for(i=0.5; i<maximascopiasPermitidasaimprimir;i++){
          
        if( option =="ApaisadoDoblefaz" && a/4 == i){
          
          document.getElementById('precioPorHoja').innerHTML= 'Precio por hoja $' + precioCompiasApaisado;
          
           if(activaranillado){

            result.value = (parseInt(a /4 -0.50)  * precioCompiasApaisado * spanCantidadJuegos.value  + correcionPrecionporHojaImparApaisado * spanCantidadJuegos.value + precioAnillado *spanCantidadJuegos.value);

           }else{

            sumaTotalDelosPdf += parseInt(result.value =  (parseInt(a /4 -0.50)  * precioCompiasApaisado * spanCantidadJuegos.value  + correcionPrecionporHojaImparApaisado * spanCantidadJuegos.value));
           }
          
        
        }
      }
  } 
   /************************************************************************************************************************************** */
   /*PRECIO APAISADO SIMPLE FAZ */
       //El numero ingresado es par, no es necesario descontar nada.
       if (option == "ApaisadoSimpleFaz" && a%2 ==0 ) {
     
        document.getElementById('precioPorHoja').innerHTML= 'Precio por hoja $' + precioCopiasSimples;
       
        if(activaranillado){

          result.value =  (parseInt(a ) /2  *  precioCopiasSimples * spanCantidadJuegos.value + precioAnillado * spanCantidadJuegos.value);
          
        }else{
         
        
       sumaTotalDelosPdf += parseInt( result.value =  (parseInt(a) /2  *   precioCopiasSimples * spanCantidadJuegos.value));
       
       }
      
    }

     /************************************************************************************************************************************** */
       //le descuenta 0.25 al cociente de la divicion de los Impares 
       if (option == "ApaisadoSimpleFaz" ) {
      
        for(i=0.25; i<maximascopiasPermitidasaimprimir;i++){
            
          if( option =="ApaisadoSimpleFaz" && a/2 == i){
            
            document.getElementById('precioPorHoja').innerHTML= 'Precio por hoja $' + precioCopiasSimples;
          
            if(activaranillado){
  
                 result.value =  (parseInt(a /2 -0.25)  * precioCopiasSimples * spanCantidadJuegos.value  + correcionPrecioPorHojaImparDoblefaz * spanCantidadJuegos.value + precioAnillado * spanCantidadJuegos.value);
            }else{  
              sumaTotalDelosPdf += parseInt(result.value = (parseInt(a /2 -0.25)  * precioCopiasSimples * spanCantidadJuegos.value  + correcionPrecioPorHojaImparDoblefaz * spanCantidadJuegos.value));
  
            }
         
          }
        }
    } 
       //le descuenta 0.50 al cociente de la divicion de los Impares 
     if (option == "ApaisadoSimpleFaz" ) {
      
      for(i=0.5; i<maximascopiasPermitidasaimprimir;i++){
          
        if( option =="ApaisadoSimpleFaz" && a/2 == i){
          
          document.getElementById('precioPorHoja').innerHTML= 'Precio por hoja $' + precioCopiasSimples;
        
          if(activaranillado){

               result.value =  (parseInt(a /2 -0.5)  * precioCopiasSimples * spanCantidadJuegos.value  + correcionPrecionporHojaImparApaisado * spanCantidadJuegos.value + precioAnillado * spanCantidadJuegos.value);
          }else{  
            sumaTotalDelosPdf += parseInt(result.value = (parseInt(a /2 -0.5)  * precioCopiasSimples * spanCantidadJuegos.value  + correcionPrecionporHojaImparApaisado * spanCantidadJuegos.value));

          }
       
        }
      }
  } 
       //le descuenta 0.75 al cociente de la divicion de los Impares 
     if (option == "ApaisadoSimpleFaz" ) {
      
        for(i=0.75; i<maximascopiasPermitidasaimprimir;i++){
            
          if( option =="ApaisadoSimpleFaz" && a/2 == i){
            
            document.getElementById('precioPorHoja').innerHTML= 'Precio por hoja $' + precioCopiasSimples;
          
            if(activaranillado){
  
                 result.value =  (parseInt(a /2 -0.75)  * precioCompiasDobleFaz * spanCantidadJuegos.value  + correcionPrecionporHojaImparApaisado * spanCantidadJuegos.value + precioAnillado * spanCantidadJuegos.value);
            }else{  
              sumaTotalDelosPdf += parseInt(result.value = (parseInt(a /2 -0.75)  * precioCompiasDobleFaz * spanCantidadJuegos.value  + correcionPrecionporHojaImparApaisado * spanCantidadJuegos.value));
  
            }
         
          }
        }
    } 

     /************************************************************************************************************************************** */

   /*FIN PRECIO APAISADO SIMPLE FAZ*/

    //le descuenta 0.75 al cociente de la divicion de los Impares 
    if (option == "ApaisadoDoblefaz"  ) {
    
      for(i=0.75; i<maximascopiasPermitidasaimprimir;i++){
          
        if( option =="ApaisadoDoblefaz" && a/4 == i){
          
          document.getElementById('precioPorHoja').innerHTML= 'Precio por hoja $' + precioCompiasApaisado;
          
          if(activaranillado){

            result.value = (parseInt(a /4 -0.75)   * precioCompiasApaisado * spanCantidadJuegos.value  + correcionPrecionporHojaImparApaisado * spanCantidadJuegos.value + precioAnillado * spanCantidadJuegos.value);

          }else{

            sumaTotalDelosPdf += parseInt(result.value = (parseInt(a /4 -0.75)   * precioCompiasApaisado * spanCantidadJuegos.value  + correcionPrecionporHojaImparApaisado * spanCantidadJuegos.value));
          }
        
        }
      }
  } 
        }
  
     
  }






     
