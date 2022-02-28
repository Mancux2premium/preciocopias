function agregar_al_carrito(){

    tabla_de_copias = document.getElementById('lista_de_copias');
    tabla_de_cantidad = document.getElementById('lista_de_cantidad');
    tabla_de_precio = document.getElementById('lista_de_precio');
    tabla_de_impresion = document.getElementById('lista_de_impresion');
    tabla_de_anillado = document.getElementById('lista_de_anillado');

    /*--Tabla donde se muestra y agrega el numero de hojas que posee el documento--*/
    if(a.value<=0)return
        tabla_de_copias.innerHTML +=  `
            <td>${a.value}</td>`;
/*---------------------------------Final -----------------------------------*/

    /*--Tabla donde se agrega y muestra  la cantidad de  juegos que desea el usuario--*/
    if(numerodejuegos.value<=0){
        tabla_de_cantidad.innerHTML +=  `
         <td>${numerodejuegos.value=1}</td>`;

    }else{
        tabla_de_cantidad.innerHTML +=  `
        <td>${numerodejuegos.value}</td>`;
    }
/*---------------------------------Final -----------------------------------*

    /*--Tabla donde se muestra  el precio de las copias --*/
    tabla_de_precio.innerHTML +=  `
         <td>${result.value}</td>`;
/*---------------------------------Final -----------------------------------*/

    /*--Tabla donde se muestra si el documento es anillado o no --*/     
    tabla_de_impresion.innerHTML +=  `
        <td>${select.options[select.selectedIndex].text}</td>`;

     if(document.getElementById("activarAnillados").checked){
            
        tabla_de_anillado.innerHTML +=  `
        <td>Si</td>`;
      
          }else{
            tabla_de_anillado.innerHTML +=  `
            <td>No</td>`;
          }
/*---------------------------------Final -----------------------------------*/
}
