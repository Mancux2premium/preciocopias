var caja_activada =false;

function modo_impresion_msj(){
        
        caja_activada =!caja_activada;

        if(caja_activada){
    
            document.getElementById("ayuda_opciones_de_impresion").style.display = "block";
        
        }
        if(caja_activada==false){
            document.getElementById("ayuda_opciones_de_impresion").style.display = "none";
        }
     console.log(caja_activada);
}
