
function calc() {
   var a = document.getElementById("a").value;
   var cantidadDecompias = document.getElementById("numerodejuegos").value;
   var precioCopiasSimples = 4;
   var precioCompiasDobleFaz = 5;
   var precioCompiasApaisado = 5; 
   var correcionPrecioPorHojaImparDoblefaz= 4;
   var correciondePrecioNumerosImparapaisadosFinalizadosen025=[0.25,1.25,2.25,3.25,4.25,5.25,6.25];

   

   var select = document.getElementById("select");
    var option = select.options[select.selectedIndex].text;
    
    var result = document.getElementById("result");
    
     
    
    
     if (option == "Simples") {
      
        document.getElementById('precioPorHoja').innerHTML= 'Precio por hoja $' + precioCopiasSimples;
        result.value = "$" + (parseInt(a) * precioCopiasSimples * parseInt(cantidadDecompias) +1);
    } 

    if (option == "Doble Faz") {
       
        document.getElementById('precioPorHoja').innerHTML= 'Precio por hoja $' + precioCompiasDobleFaz;
         result.value = "$" + (parseInt(a) /2  *  precioCompiasDobleFaz * parseInt(cantidadDecompias))  ;
        
        

       
      }


      if (option == "Doble Faz" && a %2 ==1) {
       
        document.getElementById('precioPorHoja').innerHTML= 'Precio por hoja $' + precioCompiasDobleFaz;
       result.value = "$" + (parseInt(a -1) /2  *  precioCompiasDobleFaz * parseInt(cantidadDecompias) + correcionPrecioPorHojaImparDoblefaz  * cantidadDecompias ) ;
      
    }
        
     /* if (option == "Apaisado") {

          document.getElementById('precioPorHoja').innerHTML= 'Precio por hoja $' + precioCompiasApaisado;
          result.value = "$" + (parseInt(a) /4  * precioCompiasApaisado  * parseInt(cantidadDecompias));
      } 
    */
      
      
     
      if (option == "Apaisado" && a / 4 == 1.25 ) {

        document.getElementById('precioPorHoja').innerHTML= 'Precio por hoja $' + precioCompiasApaisado;
        result.value = "$" + Math.round((parseInt(a) /4 -0.25)  * precioCompiasApaisado  + correcionPrecioPorHojaImparDoblefaz);
        
        
        
    } 

   
   
         
  }
  

