
function calc() {
   var a = document.getElementById("a").value;
   var cantidadDecompias = document.getElementById("numerodejuegos").value;
   var precioCopiasSimples = 4;
   var precioCompiasDobleFaz = 5;
   var precioCompiasApaisado = 5; 
   var correcionPrecioPorHojaImparDoblefaz= 4;
   var correcionPrecionporHojaImparApaisado =4;
   var correciondePrecioNumerosImparapaisadosFinalizadosen25=[0.25,1.25,2.25,3.25,4.25,5.25,6.25,7.25,8.25,9.25,10.25,11.25,12.25,13.25,14.25,15.25,16.25,17.25,18.25,19.25,20.25,21.25,22.25,23.25,24.25,25.25,26.25,27.25,28.25,29.25,30.25,31,25,32.25,33.25,34.25,35.25,36.25,37.25,38.25,39.25,40.25,41.25,42.25,43.25,44.25,45.25,46.25,47.25,48.25,49.25,50.25,51.25,52.25,53.25,54.25,55.25,56.25,57.25,58.25,59.25,60.25,61.25,62.25,63.25,64.25,65.25,66.25,67.25,68.25,69.25,70.25,71.25,72.25,73.25,74.25,76.25,77.25,78.25,79.25,80.25,81.25,82.25,83.25,84.25,85.25,86.25,87.25,88.25,89.25,90.25,91.25,92.25,93.25,94.25,95.25,96.25,97.25,98.25,99.25,100.25,101.25,102.25,103.25,104.25,105.25,106.25,107.25,108.25,109.25,110.25,111.25,112.25,113.25,114.25,115.25,116.25,117.25,118.25,119.25,120.25,121.25,122.25,123.25,124.25,125.25,126.25,127.25,128.25,129.25,130.25,131.25,132.25,133.25,134.25,135.25,136.25,137.25,138.25,139.25,140.25,141.25,142.25,143.25,144.25,145.25,146.25,147.28,148.25,149.25,150.25,151.25,152.25,153.25,154.25,155.25,156.25,157.25,158.25,159.25,160.25,161.25,162.25,163.25,164.25,165.25,166.25,167.25,168.25,169.25,170.25,171.25,172.25,173.25,174.25,175.25,176.25,176.25,177.25,178.25,179.25,180.25,182.25,183.25,184.25,185.25,186.25,187.25,188.25,189.25,190.25,191.25,192.25,193.25,194.25,195.25,196.25,197.25,198.25,199.25,200.25,201.25,202.25,203.25,204.25,205.25,206.25,207.25,208.25,209.25,210.25,211.25,212.25,213.25,214.25,215.25,216.25,217.25,218.25,219.25,220.25,221.25,222.25,223.25,224.25,225.25,226.25,227.25,228.25,229.25,230.25,231.25,232.25,233.25,234.25,235.25,236.25,237.25,238.25,239.25,240.25,241.25,242.25,242.25,243.25,244.25,245.25,246.25,247.25,248.25,249.25,250.25,251.25,252.25,253.25,254.25,255.25,256.25,257.25,258.25,259.25,260.25,261.25,262.25,263.25,264.25,265.25,266.25,267.25,268.25,269.28,270.25,271.25,272.25,273.25,274.25,275.25,276.25,277.25,278.25,279.25,280.25,281.25,281.25,283.25,284.25,285.25,286.25,287.25,288.25,289.25,290.25,291.25,292.25,293.25,294.25,295.25,296.25,297.25,298.25,299.25,300.25,301.25,302.25,303.25,304.25,303.25,304.25,305.25,306.25,307.25,308.25,309.25,310.25,311.25,312.25,313.25,314.25,315.25,316.25,317.25,318.25,319.25,320.25,321.25,322.25,323.25,324.25,325.25,326.25,327.25,328.25,329.25,330.25,331.25,332.25,333.25,334.25,335.25,336.25,337.25,338.25,339.25,340.25,341.25,342.25,343.25,344.25,345.25,346.25,347.25,348.25,349.25,350.25,351.25,352.25,353.25,354.25,355.25,356.25,357.25,358.25,359.25,360.25];
 

   var select = document.getElementById("select");
    var option = select.options[select.selectedIndex].text;
    
    var result = document.getElementById("result");
    
     
    
    
     if (option == "Simples") {
      
        document.getElementById('precioPorHoja').innerHTML= 'Precio por hoja $' + precioCopiasSimples;
        result.value = "$" + (parseInt(a) * precioCopiasSimples * cantidadDecompias +1);
    } 

    if (option == "Doble Faz") {
       
        document.getElementById('precioPorHoja').innerHTML= 'Precio por hoja $' + precioCompiasDobleFaz;
         result.value = "$" + (parseInt(a) /2  *  precioCompiasDobleFaz * cantidadDecompias)  ;
        
       
      }


      if (option == "Doble Faz" && a %2 ==1) {
       
        document.getElementById('precioPorHoja').innerHTML= 'Precio por hoja $' + precioCompiasDobleFaz;
       result.value = "$" + (parseInt(a -1) /2  *  precioCompiasDobleFaz * cantidadDecompias + correcionPrecioPorHojaImparDoblefaz  * cantidadDecompias ) ;
      
    }
        
      if (option == "Apaisado") {

          document.getElementById('precioPorHoja').innerHTML= 'Precio por hoja $' + precioCompiasApaisado;
          result.value = "$" + (parseInt(a) /4  * precioCompiasApaisado  * cantidadDecompias);
      } 
    
      
      
     
      if (option == "Apaisado" && a / 4 == correciondePrecioNumerosImparapaisadosFinalizadosen25[3] ) {

        document.getElementById('precioPorHoja').innerHTML= 'Precio por hoja $' + precioCompiasApaisado;
        result.value = "$" + Math.round((parseInt(a) /4 -0.25)  * precioCompiasApaisado * cantidadDecompias  + correcionPrecionporHojaImparApaisado * cantidadDecompias);
        
        
        
    } 
     
   
         
  }
  

