/*Codigo original*/
/*
const fileInput = document.getElementById('file')
let SubirPDF = document.getElementById('subirPDF')
//const nombreDocumento = document.getElementById('nombre')
const precioPdf = document.getElementById('precioPdf')
const text = document.getElementById('text')
const ListaPdfCargados = document.getElementById('ListaPdfCargados')

fileInput.addEventListener('change',(e) =>{

const files  = e.target.files;
let select = document.getElementById("select");
let option = select.options[select.selectedIndex].text;

for(let file of files){
  const fragment = document.createDocumentFragment()
  const fileReader = new FileReader();
  const listaPdfCargados = document.createElement('div')
  fileReader.readAsBinaryString(file);

fileReader.addEventListener('load', (e) =>{
  
  let cantidad_hojas_del_pdf_subido_por_el_usuario = fileReader.result.match(/\/Type[\s*]*\/Page[^s]/g).length; 


    a = document.getElementById("a").value=cantidad_hojas_del_pdf_subido_por_el_usuario;
    calcular_precio_fotocopias(); 

/*     console.log(file.name + " Pagina: " );
    nombreDocumento.innerText +=`-${file.name} te sale: $${result.value} doble faz  son:${cantidad_hojas_del_pdf_subido_por_el_usuario.length} Hojas\n` 

  
    listaPdfCargados.textContent += `-${file.name} te sale $${result.value} ${option} son:${cantidad_hojas_del_pdf_subido_por_el_usuario} hojas`;

   
 
})
  fragment.appendChild(listaPdfCargados)
  ListaPdfCargados.appendChild(fragment)
}
});
*/
/*Fin original*/


/*Codigo original*/


const fileInput = document.getElementById('file')
let SubirPDF = document.getElementById('subirPDF')
//const nombreDocumento = document.getElementById('nombre')
const precioPdf = document.getElementById('precioPdf')
const text = document.getElementById('text')
const ListaPdfCargados = document.getElementById('ListaPdfCargados')
const totalCarrito = document.getElementById('totalCarrito')
//var result = document.getElementById("result");

fileInput.addEventListener('change',(e) =>{

const files  = e.target.files;
let select = document.getElementById("select");
let option = select.options[select.selectedIndex].text;


/*Ver si ´puedo agregar el precio finalaun array y mandarlo abajo dende esta la funcion de load*/


for(let file of files){
  const fragment = document.createDocumentFragment()
  const fileReader = new FileReader();
  const listaPdfCargados = document.createElement('div')
 fileReader.readAsBinaryString(file);

fileReader.addEventListener('load', (e) =>{
  const carritoPdf = document.getElementById('CarritoPdf')
  let hojasPdf = fileReader.result.match(/\/Type[\s*]*\/Page[^s]/g).length; 
/*crear un array para poder almacenar los precios de cada pdf y luego sumarlos*/
 
    /*saca mal el precio en doble faz porque esta dividiendo las hojas del pdf en 2 */
    a = document.getElementById("a").value=hojasPdf;
    calcular_precio_fotocopias(); 
  
/*     console.log(file.name + " Pagina: " );
    nombreDocumento.innerText +=`-${file.name} te sale: $${result.value} doble faz  son:${hojasPdf} Hojas\n` 

  */
   /* listaPdfCargados.textContent += `-${file.name} te sale $${result.value} ${option} son:${hojasPdf} `;*/
  
 
  /*   
    listaPdfCargados.innerHTML +=` <table class="table table-striped">
  
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td scope="row">${file.name}</td>
        <td>te sale $${result.value}</td>
        <td>${option}</td>
      </tr>
    </tbody>
  </table>
` */

  carritoPdf.innerHTML +=` <table class="table table-striped">
  <tbody>
    <tr>
      <td scope="row"> #Paginas: (${hojasPdf}) -${file.name.slice(0,-4)} te sale $${result.value} ${option}</td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
  </table>
  `
      
result.innerHTML = sumaTotalDelosPdf; 
totalCarrito.innerHTML = `<ul class="list-group">
<li class="list-group-item active fs-2" aria-current="true">Sumando todo el total es $${sumaTotalDelosPdf}</li>
<li class="list-group-item active .fs-4 text" aria-current="true">PDF CARGADOS: ${files.length}</li>
</ul>
`
 
})
  fragment.appendChild(listaPdfCargados)
  ListaPdfCargados.appendChild(fragment)
}

});

/*Fin original*/
