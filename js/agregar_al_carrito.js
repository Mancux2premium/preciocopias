function agregar_al_carrito(){

    tabla_de_copias = document.getElementById('lista_de_copias');
    tabla_de_cantidad = document.getElementById('lista_de_cantidad');
    tabla_de_precio = document.getElementById('lista_de_precio');

    if(a.value<=0)return
    tabla_de_copias.innerHTML +=  `
    <td> </td> <td>${a.value}</td>`;

    tabla_de_cantidad.innerHTML +=  `
    <td> </td> <td>${numerodejuegos.value}</td>`;

    tabla_de_precio.innerHTML +=  `
    <td> </td> <td>${a.value}</td>  <td>Cantidad</td>  <td>Precio</td>  <td class:"hola">Total: ${result.value}</td>`;


}
