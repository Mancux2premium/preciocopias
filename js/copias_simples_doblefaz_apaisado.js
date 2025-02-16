let sumaTotalDelosPdf =0;
let numeroDeOrdenPDF =0;
let siAnillado ="anillado"
let abrochado = "abrochado"
function calcular_precio_fotocopias() {
  let a = document.getElementById("a").value;
   //var cantidadDecompias = document.getElementById("numerodejuegos").value;
   let precioCopiasSimples = 60;
   let precioCompiasDobleFaz = 70;
   var precioCompiasApaisado = 70; 
   var cantidad_copias_default =1;
   var correcionPrecioPorHojaImparDoblefaz= 60;
   var correcionPrecionporHojaImparApaisado =60;
   var maximascopiasPermitidasaimprimir = 9000;
   var precioAnillado = 2000;
   let select = document.getElementById("select");
   let option = select.options[select.selectedIndex].text;
   var result = document.getElementById("result");
 
 descuento()
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
      document.getElementById('precioPorHoja').innerHTML= 'Precio por hoja $' + precioCopiasSimples ;
      
      if(activarAnillado()){ 
        abrochado="anillado"
       // result.value =  (parseInt(a) * precioCopiasSimples * spanCantidadJuegos.value  + precioAnillado * spanCantidadJuegos.values)
        result.value =  (parseInt(a)   * precioCopiasSimples  * spanCantidadJuegos.value + precioAnillado * spanCantidadJuegos.value);
        sumaTotalDelosPdf += parseInt(result.value);
        numeroDeOrdenPDF++ ;
      }else{
        abrochado="abrochado"
       
        sumaTotalDelosPdf += parseInt( result.value =  (parseInt(a) * precioCopiasSimples * spanCantidadJuegos.value ));
        numeroDeOrdenPDF++ ;
      }
       
     
  } 
   /************************************************************************************************************************************** */
    
    //El numero ingresado es par, no es necesario descontar nada.
    if (option == "Doble faz" && a%2 ==0 ) {
     
        document.getElementById('precioPorHoja').innerHTML= 'Precio por hoja $' + precioCompiasDobleFaz;
       
        if(activarAnillado()){
          abrochado="anillado"
         /* result.value =  (parseInt(a ) /2  *  precioCompiasDobleFaz * spanCantidadJuegos.value + precioAnillado * spanCantidadJuegos.value);*/
         result.value =  (parseInt(a)/2   * precioCompiasDobleFaz  * spanCantidadJuegos.value + precioAnillado * spanCantidadJuegos.value);
         sumaTotalDelosPdf += parseInt(result.value);
         numeroDeOrdenPDF++
          
        }else{
         
          abrochado="abrochado"
       sumaTotalDelosPdf += parseInt( result.value =  (parseInt(a) /2  *  precioCompiasDobleFaz * spanCantidadJuegos.value));
       numeroDeOrdenPDF++
       }
      
    }

     /************************************************************************************************************************************** */
       //le descuenta 0.25 al cociente de la divicion de los Impares 
       if (option == "Doble faz" ) {
      
        for(i=0.25; i<maximascopiasPermitidasaimprimir;i++){
            
          if( option =="Doble faz" && a/2 == i){
            
            document.getElementById('precioPorHoja').innerHTML= 'Precio por hoja $' + precioCompiasDobleFaz;
          
            if(activarAnillado()){
              abrochado="anillado"
                /* result.value =  (parseInt(a /2 -0.25)  * precioCompiasDobleFaz * spanCantidadJuegos.value  + correcionPrecioPorHojaImparDoblefaz * spanCantidadJuegos.value + precioAnillado * spanCantidadJuegos.value);*/

                 sumaTotalDelosPdf += parseInt(result.value = (parseInt(a /2 -0.25)  * precioCompiasDobleFaz * spanCantidadJuegos.value + precioAnillado  + correcionPrecioPorHojaImparDoblefaz * spanCantidadJuegos.value));
                 numeroDeOrdenPDF++
            }
            else{  
              abrochado="abrochado"
              sumaTotalDelosPdf += parseInt(result.value = (parseInt(a /2 -0.25)  * precioCompiasDobleFaz * spanCantidadJuegos.value  + correcionPrecioPorHojaImparDoblefaz * spanCantidadJuegos.value));
              numeroDeOrdenPDF++
            }
         
          }
        }
    } 
       //le descuenta 0.50 al cociente de la divicion de los Impares 
     if (option == "Doble faz" ) {
      
      for(i=0.5; i<maximascopiasPermitidasaimprimir;i++){
          
        if( option =="Doble faz" && a/2 == i){
          
          document.getElementById('precioPorHoja').innerHTML= 'Precio por hoja $' + precioCompiasDobleFaz;
        
          if(activarAnillado()){
            abrochado="anillado"
               result.value =  (parseInt(a /2 -0.5)  * precioCompiasDobleFaz  * spanCantidadJuegos.value + correcionPrecionporHojaImparApaisado + precioAnillado * spanCantidadJuegos.value);
               sumaTotalDelosPdf += parseInt(result.value);
               numeroDeOrdenPDF++
          }else{  
            abrochado="abrochado"
            sumaTotalDelosPdf += parseInt(result.value = (parseInt(a /2 -0.5)  * precioCompiasDobleFaz * spanCantidadJuegos.value  + correcionPrecionporHojaImparApaisado * spanCantidadJuegos.value));
            numeroDeOrdenPDF++
          }
       
        }
      }
  } 
       //le descuenta 0.75 al cociente de la divicion de los Impares 
     if (option == "Doble faz" ) {
      
        for(i=0.75; i<maximascopiasPermitidasaimprimir;i++){
            
          if( option =="Doble faz" && a/2 == i){
            
            document.getElementById('precioPorHoja').innerHTML= 'Precio por hoja $' + precioCompiasDobleFaz;
          
            if(activarAnillado()){
              abrochado="anillado"
                 result.value =  (parseInt(a /2 -0.75)  * precioCompiasDobleFaz * spanCantidadJuegos.value  + correcionPrecionporHojaImparApaisado * spanCantidadJuegos.value + precioAnillado * spanCantidadJuegos.value);
                 numeroDeOrdenPDF++
            }else{  
              abrochado="abrochado"
              sumaTotalDelosPdf += parseInt(result.value = (parseInt(a /2 -0.75)  * precioCompiasDobleFaz * spanCantidadJuegos.value  + correcionPrecionporHojaImparApaisado * spanCantidadJuegos.value));
              numeroDeOrdenPDF++
            }
         
          }
        }
    } 

     /************************************************************************************************************************************** */

    /*se divide un numero par, no es necesario descontar el cociente*/ 
    if (option == "ApaisadoDoblefaz" && a %4  == 0  ) {

        document.getElementById('precioPorHoja').innerHTML= 'Precio por hoja $' + precioCompiasApaisado;
       
        if(activarAnillado()){
          abrochado="anillado"
          result.value =  (parseInt(a) /4  * precioCompiasApaisado  * spanCantidadJuegos.value + precioAnillado * spanCantidadJuegos.value);
          sumaTotalDelosPdf += parseInt(result.value =  (parseInt(a) /4  * precioCompiasApaisado   + precioAnillado * spanCantidadJuegos.value));
          numeroDeOrdenPDF++
        }else{
          abrochado="abrochado"
          sumaTotalDelosPdf += parseInt(result.value =  (parseInt(a) /4  * precioCompiasApaisado  * spanCantidadJuegos.value));
          numeroDeOrdenPDF++
        }
     
    } 
    
   /************************************************************************************************************************************** */
    
  //le descuenta 0.25 al cociente de la divicion de los Impares 
    if (option == "ApaisadoDoblefaz" ) {
      
      for(i=0.25; i<maximascopiasPermitidasaimprimir;i++){
          
        if( option =="ApaisadoDoblefaz" && a/4 == i){
          
          document.getElementById('precioPorHoja').innerHTML= 'Precio por hoja $' + precioCompiasApaisado;
        
          if(activarAnillado()){
            abrochado="anillado"
               result.value =  (parseInt(a /4 -0.25)  * precioCompiasApaisado * spanCantidadJuegos.value  + correcionPrecionporHojaImparApaisado * spanCantidadJuegos.value + precioAnillado * spanCantidadJuegos.value);
               sumaTotalDelosPdf += parseInt(result.value =  (parseInt(a /4 -0.25)  * precioCompiasApaisado  + correcionPrecionporHojaImparApaisado   + precioAnillado * spanCantidadJuegos.value));
               numeroDeOrdenPDF++
          }else{  
            abrochado="abrochado"
            sumaTotalDelosPdf += parseInt(result.value = (parseInt(a /4 -0.25)  * precioCompiasApaisado * spanCantidadJuegos.value  + correcionPrecionporHojaImparApaisado * spanCantidadJuegos.value));
            numeroDeOrdenPDF++

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
          
           if(activarAnillado()){
            abrochado="anillado"
            result.value = (parseInt(a /4 -0.50)  * precioCompiasApaisado * spanCantidadJuegos.value  + correcionPrecionporHojaImparApaisado * spanCantidadJuegos.value + precioAnillado *spanCantidadJuegos.value);
            sumaTotalDelosPdf += parseInt(result.value =  (parseInt(a /4 -0.50)  * precioCompiasApaisado  + correcionPrecionporHojaImparApaisado  + precioAnillado * spanCantidadJuegos.value));
            numeroDeOrdenPDF++

           }else{
            abrochado="abrochado"
            sumaTotalDelosPdf += parseInt(result.value =  (parseInt(a /4 -0.50)  * precioCompiasApaisado * spanCantidadJuegos.value  + correcionPrecionporHojaImparApaisado * spanCantidadJuegos.value));
            numeroDeOrdenPDF++
           }
          
        
        }
      }
  } 
   /************************************************************************************************************************************** */
   /*PRECIO APAISADO SIMPLE FAZ */
       //El numero ingresado es par, no es necesario descontar nada.
       if (option == "ApaisadoSimpleFaz" && a%2 ==0 ) {
     
        document.getElementById('precioPorHoja').innerHTML= 'Precio por hoja $' + precioCopiasSimples;
       
        if(activarAnillado()){
          abrochado="anillado"
          result.value =  (parseInt(a ) /2  *  precioCopiasSimples * spanCantidadJuegos.value + precioAnillado * spanCantidadJuegos.value);
          sumaTotalDelosPdf += parseInt( result.value =  (parseInt(a) /2  *   precioCopiasSimples + precioAnillado * spanCantidadJuegos.value));
          numeroDeOrdenPDF++
          
        }else{
         
          abrochado="abrochado"
       sumaTotalDelosPdf += parseInt( result.value =  (parseInt(a) /2  *   precioCopiasSimples * spanCantidadJuegos.value));
       numeroDeOrdenPDF++
       }
      
    }

     /************************************************************************************************************************************** */
       //le descuenta 0.25 al cociente de la divicion de los Impares 
       if (option == "ApaisadoSimpleFaz" ) {
      
        for(i=0.25; i<maximascopiasPermitidasaimprimir;i++){
            
          if( option =="ApaisadoSimpleFaz" && a/2 == i){
            
            document.getElementById('precioPorHoja').innerHTML= 'Precio por hoja $' + precioCopiasSimples;
          
            if(activarAnillado()){
              abrochado="anillado"
                 result.value =  (parseInt(a /2 -0.25)  * precioCopiasSimples * spanCantidadJuegos.value  + correcionPrecioPorHojaImparDoblefaz * spanCantidadJuegos.value + precioAnillado * spanCantidadJuegos.value);
                 sumaTotalDelosPdf += parseInt( result.value =  (parseInt(a /2 -0.25)  *   precioCopiasSimples  + correcionPrecioPorHojaImparDoblefaz + precioAnillado * spanCantidadJuegos.value));
                 numeroDeOrdenPDF++
            }else{  
              abrochado="abrochado"
              sumaTotalDelosPdf += parseInt(result.value = (parseInt(a /2 -0.25)  * precioCopiasSimples * spanCantidadJuegos.value  + correcionPrecioPorHojaImparDoblefaz * spanCantidadJuegos.value));
              numeroDeOrdenPDF++
            }
         
          }
        }
    } 
       //le descuenta 0.50 al cociente de la divicion de los Impares 
     if (option == "ApaisadoSimpleFaz" ) {
      
      for(i=0.5; i<maximascopiasPermitidasaimprimir;i++){
          
        if( option =="ApaisadoSimpleFaz" && a/2 == i){
          
          document.getElementById('precioPorHoja').innerHTML= 'Precio por hoja $' + precioCopiasSimples;
        
          if(activarAnillado()){
            abrochado="anillado"
               result.value =  (parseInt(a /2 -0.5)  * precioCopiasSimples * spanCantidadJuegos.value  + correcionPrecionporHojaImparApaisado * spanCantidadJuegos.value + precioAnillado * spanCantidadJuegos.value);
               sumaTotalDelosPdf += parseInt( result.value =  (parseInt(a /2 -0.5)  *   precioCopiasSimples  + correcionPrecioPorHojaImparDoblefaz + precioAnillado * spanCantidadJuegos.value));
               numeroDeOrdenPDF++
          }else{  
            abrochado="abrochado"
            sumaTotalDelosPdf += parseInt(result.value = (parseInt(a /2 -0.5)  * precioCopiasSimples * spanCantidadJuegos.value  + correcionPrecionporHojaImparApaisado * spanCantidadJuegos.value));
            numeroDeOrdenPDF++
          }
       
        }
      }
  } 
       //le descuenta 0.75 al cociente de la divicion de los Impares 
     if (option == "ApaisadoSimpleFaz" ) {
      
        for(i=0.75; i<maximascopiasPermitidasaimprimir;i++){
            
          if( option =="ApaisadoSimpleFaz" && a/2 == i){
            
            document.getElementById('precioPorHoja').innerHTML= 'Precio por hoja $' + precioCopiasSimples;
          
            if(activarAnillado()){
              abrochado="anillado"
                 result.value =  (parseInt(a /2 -0.75)  * precioCompiasDobleFaz * spanCantidadJuegos.value  + correcionPrecionporHojaImparApaisado * spanCantidadJuegos.value + precioAnillado * spanCantidadJuegos.value);
                 sumaTotalDelosPdf += parseInt( result.value =  (parseInt(a /2 -0.75) *   precioCopiasSimples  + correcionPrecioPorHojaImparDoblefaz + precioAnillado * spanCantidadJuegos.value));
                 numeroDeOrdenPDF++
            }else{  
              abrochado="abrochado"
              sumaTotalDelosPdf += parseInt(result.value = (parseInt(a /2 -0.75)  * precioCompiasDobleFaz * spanCantidadJuegos.value  + correcionPrecionporHojaImparApaisado * spanCantidadJuegos.value));
              numeroDeOrdenPDF++
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
          
          if(activarAnillado()){
            abrochado="anillado"
            result.value = (parseInt(a /4 -0.75)   * precioCompiasApaisado * spanCantidadJuegos.value  + correcionPrecionporHojaImparApaisado * spanCantidadJuegos.value + precioAnillado * spanCantidadJuegos.value);
            sumaTotalDelosPdf += parseInt(result.value =  (parseInt(a /4 -0.75)  * precioCompiasApaisado  + correcionPrecionporHojaImparApaisado  + precioAnillado * spanCantidadJuegos.value));
            numeroDeOrdenPDF++

          }else{
            abrochado="abrochado"
            sumaTotalDelosPdf += parseInt(result.value = (parseInt(a /4 -0.75)   * precioCompiasApaisado * spanCantidadJuegos.value  + correcionPrecionporHojaImparApaisado * spanCantidadJuegos.value));
            numeroDeOrdenPDF++;
          }
        
        }
      }
  } 
        }
  
     
  }






     
