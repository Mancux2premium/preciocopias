/* 
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
      nombreDocumento.textContent=`-${file.name} te sale: $${result.value} `
    
  })
  })
 */

 /*  const fileInput = document.getElementById('file')
  let SubirPDF = document.getElementById('subirPDF')
  const nombreDocumento = document.getElementById('nombre')
  const precioPdf = document.getElementById('precioPdf')
  const text = document.getElementById('text') */

  /*imagenes*/

/* const fileInput = document.getElementById('file')
const images = document.getElementById('images')
const text = document.getElementById('text')

fileInput.addEventListener('change', (e)=>{

    const files = e.target.files
    const fragment = document.createDocumentFragment()

    
    for (const file of files){
      const fileReader = new FileReader()
      const img = document.createElement('IMG')

      fileReader.readAsDataURL(file)
      fileReader.addEventListener('load', (e)=>{
          img.setAttribute('src',e.target.result) 
      })
      fragment.appendChild(img)
      images.appendChild(fragment)
    }
}); */

/*Imagenes fin */

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
for(const file of files){
  const fragment = document.createDocumentFragment()
  const fileReader = new FileReader();
  const listaPdfCargados = document.createElement('div')
    /* console.log(file) */
  fileReader.readAsBinaryString(file);

fileReader.addEventListener('load', (e) =>{
  
  let cantidad_hojas_del_pdf_subido_por_el_usuario = fileReader.result.match(/\/Type[\s*]*\/Page[^s]/g); 
  
 /*  console.log('Number of Pages:',cantidad_hojas_del_pdf_subido_por_el_usuario); */
  
    a = document.getElementById("a").value=parseInt(cantidad_hojas_del_pdf_subido_por_el_usuario.length);
    calcular_precio_fotocopias();
  /*   console.log(file.name + " Pagina: " );
    nombreDocumento.innerText +=`-${file.name} te sale: $${result.value} doble faz  son:${cantidad_hojas_del_pdf_subido_por_el_usuario.length} Hojas\n`
 */  
    listaPdfCargados.textContent += `-${file.name} te sale $${result.value} ${option} son:${cantidad_hojas_del_pdf_subido_por_el_usuario.length} hojas`;

   
 
})


  fragment.appendChild(listaPdfCargados)
  ListaPdfCargados.appendChild(fragment)
}
});




