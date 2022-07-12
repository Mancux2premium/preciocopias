const fileInput = document.getElementById('file')
let SubirPDF = document.getElementById('subirPDF')
const nombreDocumento = document.getElementById('nombre')
const precioPdf = document.getElementById('precioPdf')
const text = document.getElementById('text')


fileInput.addEventListener('change',(e) =>{

const file  = e.target.files[0];
const fileReader = new FileReader();
fileReader.readAsBinaryString(file);

fileReader.addEventListener('load', (e) =>{

  let cantidad_hojas_del_pdf_subido_por_el_usuario =  fileReader.result.match(/\/Type[\s*]*\/Page[^s]/g); 

  console.log('Number of Pages:',cantidad_hojas_del_pdf_subido_por_el_usuario);
  
    a = document.getElementById("a").value=parseInt(cantidad_hojas_del_pdf_subido_por_el_usuario.length);
    calcular_precio_fotocopias();

    console.log(file.name + " Pagina: " );
    nombreDocumento.textContent=`-${file.name} te sale: $${precioPdf.textContent= parseInt(result.value)} `

})
})

  

     
