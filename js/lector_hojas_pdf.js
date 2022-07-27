const fileInput=document.getElementById("file");let SubirPDF=document.getElementById("subirPDF");const precioPdf=document.getElementById("precioPdf"),text=document.getElementById("text"),ListaPdfCargados=document.getElementById("ListaPdfCargados"),totalCarrito=document.getElementById("totalCarrito");fileInput.addEventListener("change",f=>{let a=f.target.files,b=document.getElementById("select"),i=b.options[b.selectedIndex].text;preciosArray=[];let c=0,j=0;for(console.log(a.length);c<a.length;)console.log("Hola"),preciosArray.push(10),calcular_precio_fotocopias(),c++;for(let g of(console.log(preciosArray),a)){let d=document.createDocumentFragment(),e=new FileReader,h=document.createElement("div");e.readAsBinaryString(g),e.addEventListener("load",d=>{let b=document.getElementById("CarritoPdf"),c=e.result.match(/\/Type[\s*]*\/Page[^s]/g).length;a=document.getElementById("a").value=c,calcular_precio_fotocopias(),console.log(j),b.innerHTML+=` <table class="table table-striped">
<tbody>
  <tr>
    <td scope="row">${g.name}</td>
    <td>te sale $${result.value}</td>
    <td>${i}</td>
  </tr>
</tbody>
</table>
`,result.innerHTML=sumaTotalDelosPdf,totalCarrito.innerHTML=`<ul class="list-group">
    <li class="list-group-item active fs-2" aria-current="true">Total $${sumaTotalDelosPdf}</li>
    <li class="list-group-item active .fs-4 text" aria-current="true">PDF CARGADOS: ${a.length}</li>
  </ul>
    `}),d.appendChild(h),ListaPdfCargados.appendChild(d)}})