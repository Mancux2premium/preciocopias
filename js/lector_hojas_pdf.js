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
//var result = document.getElementById("result");

fileInput.addEventListener('change',(e) =>{

const files  = e.target.files;
let select = document.getElementById("select");
let option = select.options[select.selectedIndex].text;

preciosArray =[];
let random =0;
/*Ver si ´puedo agregar el precio finalaun array y mandarlo abajo dende esta la funcion de load*/
console.log(files.length)
  while(random < files.length){
    console.log("Hola");
    preciosArray.push(10)
    calcular_precio_fotocopias(); 
    random++;
  }
  console.log(preciosArray)
for(let file of files){
  const fragment = document.createDocumentFragment()
  const fileReader = new FileReader();
  const listaPdfCargados = document.createElement('div')
  fileReader.readAsBinaryString(file);

fileReader.addEventListener('load', (e) =>{
  
  let hojasPdf = fileReader.result.match(/\/Type[\s*]*\/Page[^s]/g).length; 
/*crear un array para poder almacenar los precios de cada pdf y luego sumarlos*/
 
  let precio=0;
      precio = hojasPdf *4;
      let precioFinal=0;
      precioFinal+= precio + parseInt(result.value);

    a = document.getElementById("a").value=hojasPdf;
    calcular_precio_fotocopias(); 
  

/*     console.log(file.name + " Pagina: " );
    nombreDocumento.innerText +=`-${file.name} te sale: $${result.value} doble faz  son:${hojasPdf} Hojas\n` 

  */
    listaPdfCargados.textContent += `-${file.name} te sale $${precio} ${option} son:${hojasPdf} `;

      result.innerHTML = contador;
 
})
  fragment.appendChild(listaPdfCargados)
  ListaPdfCargados.appendChild(fragment)
}
});

/*Fin original*/
