/*document.querySelector('#pdf').addEventListener('change', () =>{
    let pdffile = document.querySelector('#pdf').files[0];
    let pdfFileUrl = URL.createObjectURL(pdffile);
    document.querySelector('#vistaPrevia').setAttribute('src', pdfFileUrl);
    console.log(pdffile);
  
});


document.getElementById("myBtn").addEventListener("click", function() {

    let pdffile = document.querySelector('#pdf').files[0];
    let pdfFileUrl = URL.createObjectURL(pdffile);
    document.querySelector('#vistaPrevia').setAttribute('src', pdfFileUrl);
    console.log(pdffile);
    
    var input =document.querySelector('#pdf').files[0];
    var reader = new FileReader();
    reader.readAsBinaryString(input.files[0]);
  
  });
*/

const fileInput = document.getElementById('file')
const text = document.getElementById('text')
var precioCopiasSimples=4;
var precioCompiasDobleFaz = 5;

fileInput.addEventListener('change',(e) =>{

const file = e.target.files[0];
const fileReader = new FileReader();
fileReader.readAsBinaryString(file);
fileReader.addEventListener('load', (e) =>{

  var cantidad_hojas_del_pdf_subido_por_el_usuario =  fileReader.result.match(/\/Type[\s*]*\/Page[^s]/g); 
  console.log('Number of Pages:',cantidad_hojas_del_pdf_subido_por_el_usuario);
  
  var a = document.getElementById("a").value= parseInt(cantidad_hojas_del_pdf_subido_por_el_usuario.length);


    console.log(result.value=(parseInt(a) * precioCopiasSimples));
    console.log(file.name + " Pagina: " + result.value);
  
})
})
     
