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

let modosDeimpresion = document.querySelectorAll('.contenedor__imagenes');

    modosDeimpresion.forEach(elemento =>{
        elemento.addEventListener('click',()=>{

            modosDeimpresion.forEach(element =>{
                element.classList.remove('--active');
            })
        elemento.classList.add('--active');
        let select = document.getElementById("select");
        let option = select.options[select.selectedIndex].text =elemento.getAttribute('alt');
        calcular_precio_fotocopias();
        })
      
    })