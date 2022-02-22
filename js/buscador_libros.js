const buscador_libros = document.querySelector('#buscador_libros');
const resultado_libro = document.querySelector('#resultado_libro');

/*--Lista de los libros--*/
const lista_de_libros = [

                {nombre:'El espejo Africano', valor:500},
                {nombre:'Mi Planta de Naranja lima', valor:500},
                {nombre:'Edipo Rey', valor:500},
]
/*--Final--*/

//funcion para filtrar los libros
const filtrar_libros = ()=>{

     
           /*--Muestra los resultado de los libros encontrados--*/
            resultado_libro.innerHTML = ' ';
            /*--Final--*/

            /*--Almacena el nombre del libro ingresado por el usuario--*/
            const libro_escrito = buscador_libros.value.toLowerCase();
            /*--Final--*/
            
            /*--definimos una variable para almacenar la lista de libros y recorrelo en el for--*/
         for(let libros of lista_de_libros){

            /*--Definimos una variable que almacena los nombres de la lista de libros y los pasa a minusculas--*/
                let nombres = libros.nombre.toLowerCase();
            /*--Final--*/

            /*--Compara si el nombre de la lista de libros defaul es igual a el nombre del libro ingresado por el usuario  --*/
                if(nombres.indexOf(libro_escrito) !== -1){
                        resultado_libro.innerHTML += `
                        <li> ${libros.nombre} - valor: ${libros.valor} </li>`
                        ocultarlibros();
            }
            /*--Final--*/
        }
        /*--Final for--*/

        /*--En caso que el usuario ingrese un nombre de libro que no este en la lista aparece el mensaje Producto no encontrado--*/
        if(resultado_libro.innerHTML ===' '){
           
            resultado_libro.innerHTML += `
            
                <li> Producto no encontrado... </li> 
            `
        }
        /*--Final--*/
    }   
/*--Final filtrar libros--*/

/*--Pone a la escucha el input buscador de libros cada ves que se precione una tecla--*/
buscador_libros.addEventListener('keyup',filtrar_libros);
/*--Final--*/
 
/*--Ejecuta la funcio por primera ves para que apareca todo el catalogo--*/
filtrar_libros();
/*--Final--**/


function ocultarlibros(){
   
    var africano = document.getElementById("africano");

    if(buscador_libros.value=="el espejo africano" || buscador_libros.value=="africano" ){
        africano.style.display="block";
    }else{
        africano.style.display="none";
    }
     
}
