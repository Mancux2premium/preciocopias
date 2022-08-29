var sumaTotalDelosPdf =0;
function calcular_precio_fotocopias() {
  let a = document.getElementById("a").value;
   //var cantidadDecompias = document.getElementById("numerodejuegos").value;
   let precioCopiasSimples = 5;
   let precioCompiasDobleFaz = 6;
   var precioCompiasApaisado = 6; 
   var cantidad_copias_default =1;
   var correcionPrecioPorHojaImparDoblefaz= 5;
   var correcionPrecionporHojaImparApaisado =5;
   var maximascopiasPermitidasaimprimir = 9000;
   var precioAnillado = 150;
   let select = document.getElementById("select");
   let option = select.options[select.selectedIndex].text;
   var result = document.getElementById("result");
 
  
  
   activarAnillado();
   if(spanCantidadJuegos.value <1){
    spanCantidadJuegos.value=1;
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
  
                 result.value =  (parseInt(a /2 -0.25)  * precioCompiasDobleFaz * spanCantidadJuegos.value  + correcionPrecionporHojaImparApaisado * spanCantidadJuegos.value + precioAnillado * spanCantidadJuegos.value);
            }else{  
              sumaTotalDelosPdf += parseInt(result.value = (parseInt(a /2 -0.25)  * precioCompiasDobleFaz * spanCantidadJuegos.value  + correcionPrecionporHojaImparApaisado * spanCantidadJuegos.value));
  
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
    if (option == "Apaisado" && a %4  == 0  ) {

        document.getElementById('precioPorHoja').innerHTML= 'Precio por hoja $' + precioCompiasApaisado;
       
        if(activaranillado){

          result.value =  (parseInt(a) /4  * precioCompiasApaisado  * spanCantidadJuegos.value + precioAnillado * spanCantidadJuegos.value);
        }else{

          sumaTotalDelosPdf += parseInt(result.value =  (parseInt(a) /4  * precioCompiasApaisado  * spanCantidadJuegos.value));
        }
     
    } 
    
   /************************************************************************************************************************************** */
    
  //le descuenta 0.25 al cociente de la divicion de los Impares 
    if (option == "Apaisado" ) {
      
      for(i=0.25; i<maximascopiasPermitidasaimprimir;i++){
          
        if( option =="Apaisado" && a/4 == i){
          
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
    if (option == "Apaisado"  ) {
      
      for(i=0.5; i<maximascopiasPermitidasaimprimir;i++){
          
        if( option =="Apaisado" && a/4 == i){
          
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
    //le descuenta 0.75 al cociente de la divicion de los Impares 
    if (option == "Apaisado"  ) {
    
      for(i=0.75; i<maximascopiasPermitidasaimprimir;i++){
          
        if( option =="Apaisado" && a/4 == i){
          
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






     
