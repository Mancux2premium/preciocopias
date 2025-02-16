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


for(let file of files){
  let pdfFileURL = URL.createObjectURL(file)+"#controls";
  const fragment = document.createDocumentFragment()
  const fileReader = new FileReader();
  const listaPdfCargados = document.createElement('div')
   fileReader.readAsBinaryString(file);
 

fileReader.addEventListener('load', (e) =>{
  let hojasPdf 
  const carritoPdf = document.getElementById('CarritoPdf')
  try {
    // Utilizamos la expresión regular para buscar la cantidad de páginas en el archivo
     hojasPdf  = fileReader.result.match(/\/Type[\s*]*\/Page[^s]/g).length;
    // Mostramos la cantidad de páginas en la consola
    console.log("El archivo tiene " + numPaginas + " páginas.");
  } catch (error) {
    // Si se produce un error al utilizar la expresión regular, lo mostramos en la consola
    //console.error("No se pudo obtener la cantidad de páginas del archivo: " + error +`${file.name}`);
  }

    /*saca mal el precio en doble faz porque esta dividiendo las hojas del pdf en 2 */
    a = document.getElementById("a").value=hojasPdf;
    calcular_precio_fotocopias(); 
  
  carritoPdf.innerHTML +=` <table class="table table-striped">
  <tbody>
    <tr scope="row"> #Paginas: <strong style="color:red;font-size:2em;">(${hojasPdf})</strong >   </tr>
    <tr>
      <td scope="row"> *${numeroDeOrdenPDF})* ${file.name.slice(0,-4)}
      *te sale* *$<strong style="color:red;font-size:2em;">${result.value} Blanco y Negro</strong>* *${option}* *${abrochado}*
      </td><embed  class="vistaPreviaPDF mostrarOcultarsVistaPDF" src="${pdfFileURL}"type="application/pdf" >
      <td></td>
      <td>  </td>
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
