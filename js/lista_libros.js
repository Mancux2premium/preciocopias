let preciocopiassimples = 4;
let precioCompiasDobleFaz =5;
let impresion_doble_faz =2;
let impresion_apaisado =4;
let precio_anillado =150;
let anillado = " Anillado";
let abrochado = " Abrochado";
let redondeo = preciocopiassimples;

/*--Lista de los libros--*/  
const lista_de_libros = [

        /*--Comienzan con Letra A--*/
        {nombre:'Aladino y la Lampara Maravillosa', paginas:aladino_y_la_lampara_maravillosa_paginas},           
        /*--Final A--*/

         /*--Comienzan con Letra B--*/
         {nombre:'Biologia 2° ',
          editorial:'Santillana ',
          paginas:biologia2_santillana_paginas, 
          precio:(biologia2_santillana_paginas/impresion_doble_faz)*precioCompiasDobleFaz+precio_anillado+anillado,
          impresion:'doble faz'},

         {nombre:'Biologia 3°',
          editorial:'Santillana ',
          paginas:biologia3_Santillana_paginas,
          precio:(biologia3_Santillana_paginas/impresion_doble_faz)*precioCompiasDobleFaz+precio_anillado+anillado ,
          impresion:'doble faz'},
          
        {nombre:'Biologia 3°',
         editorial:'Sm Nodos',
         paginas:biologia3_Sm_nodos_paginas,
         precio:(biologia3_Sm_nodos_paginas/impresion_doble_faz)*precioCompiasDobleFaz+precio_anillado+anillado,
         impresion:'doble faz',
       }, 
         /*--Final B--*/

        /*--Comienzan con Letra C--*/
         {nombre:'Caro dice',
          editorial:'Alfaguara',
          paginas:caro_dice_paginas,
          precio: parseInt((caro_dice_paginas/impresion_apaisado))*precioCompiasDobleFaz+precio_anillado +redondeo+anillado,
          impresion:'apaisado',
        },

        {nombre:'Ciencias Naturales 1°',
         editorial:'Santillana',
         paginas:ciencias_naturales1_santillana_paginas,
         precio:parseInt((ciencias_naturales1_santillana_paginas/impresion_doble_faz))*precioCompiasDobleFaz+precio_anillado+redondeo+anillado,
         impresion:'doble faz'},

        {nombre:'Ciencias Sociales 1°',
         editorial:'Santillana',
         paginas:ciencias_sociales1_santillana_paginas,
         precio:(ciencias_sociales1_santillana_paginas/impresion_doble_faz)*precioCompiasDobleFaz+precio_anillado+anillado,
         impresion:'doble faz'},

         {nombre:'Ciudadania 1°',
          editorial:'Sm',
          paginas: ciudadania1_sm_paginas,
          precio:parseInt(( ciudadania1_sm_paginas/impresion_doble_faz))*precioCompiasDobleFaz+precio_anillado+redondeo+anillado,
          impresion:'doble faz'},

          {nombre:'Ciudadania 1°',
          editorial:'Sm',
          paginas: ciudadania1_sm_paginas,
          precio:parseInt(( ciudadania1_sm_paginas/impresion_apaisado))*precioCompiasDobleFaz+precio_anillado+redondeo+anillado,
          impresion:'apaisado'},

         {nombre:'Ciudadania 1°',
          editorial:'Santillana',
          paginas:ciudadania1_santillana_paginas,
          precio:(ciudadania1_santillana_paginas/impresion_doble_faz)*precioCompiasDobleFaz+precio_anillado+anillado,
          impresion:'doble faz'},

         {nombre:'Ciudadania 1°',
          editorial:'Estrada',
          paginas:ciudadania1_estrada_paginas,
          precio:(ciudadania1_estrada_paginas/impresion_doble_faz)*precioCompiasDobleFaz+precio_anillado+anillado,
          impresion:'doble faz'},

         {nombre:'Ciudadania 2°',
          editorial:'Santillana',
          paginas:ciudadania2_santillana_paginas,
          precio:parseInt((ciudadania2_santillana_paginas/impresion_doble_faz))*precioCompiasDobleFaz+precio_anillado+redondeo+anillado,
          impresion:'doble faz'},

         {nombre:'Ciudadania 3°',
          editorial:'Santillana',
          paginas:ciudadania3_sanitalla_paginas,
          precio: (ciudadania3_sanitalla_paginas/impresion_doble_faz)*precioCompiasDobleFaz+precio_anillado+anillado,
          impresion:'doble faz'},

         {nombre:'Ciudadania 3°', 
          editorial:'Estrada',
          paginas:ciudadania3_estrada_paginas,
          precio:(ciudadania3_estrada_paginas/impresion_doble_faz)*precioCompiasDobleFaz+precio_anillado+anillado,
          impresion:'doble faz'},

         {nombre:'Casa de muñecas',
          editorial:'Epublibre',
          paginas:casa_de_muñecas_paginas,
          precio:(casa_de_muñecas_paginas/impresion_doble_faz)*precioCompiasDobleFaz+precio_anillado+anillado,
          impresion:'apaisado'},


          {nombre:'Ceremonia secreta',
           editorial:'Cantaro',
           paginas:cereminia_secreta_paginas,
           precio:parseInt((cereminia_secreta_paginas/impresion_apaisado))*precioCompiasDobleFaz+redondeo+abrochado,
           impresion:'apaisado'}, 

         {nombre:'Ceremonia secreta',
          editorial:'Cantaro',
          paginas:cereminia_secreta_paginas,
          precio:parseInt((cereminia_secreta_paginas/impresion_apaisado))*precioCompiasDobleFaz+precio_anillado+redondeo+anillado,
          impresion:'apaisado'},                       
        /*--Final C--*/

        /*--Comienzan con Letra D--*/
         {nombre:'De como Romeo se transo a Julieta',
          editorial:'Quipu',
          paginas:de_como_romeo_se_tranzo_a_julieta_paginas,
          precio:parseInt((de_como_romeo_se_tranzo_a_julieta_paginas/impresion_doble_faz))*precioCompiasDobleFaz+precio_anillado+redondeo+anillado,
          impresion:'doble faz' 
         },

        {nombre:'De como Romeo se transo a Julieta',
         editorial:'Quipu',
         paginas:de_como_romeo_se_tranzo_a_julieta_paginas,
         precio:parseInt((de_como_romeo_se_tranzo_a_julieta_paginas/impresion_apaisado))*precioCompiasDobleFaz+precio_anillado+redondeo+anillado,
         impresion:'apaisado' 
        },                       
        /*--Final D--*/

        /*--Comienzan con Letra E--*/
        {nombre:'El espejo Africano',
         editorial:'Sm',
         paginas:el_espejo_africano_paginas,
         precio:parseInt((el_espejo_africano_paginas/impresion_doble_faz))*precioCompiasDobleFaz+precio_anillado+redondeo+anillado,
         impresion:'doble faz'
        },  

        {nombre:'El espejo Africano',
         editorial:'Sm',
         paginas:el_espejo_africano_paginas,
         precio:parseInt((el_espejo_africano_paginas/impresion_apaisado))*precioCompiasDobleFaz+redondeo+abrochado,
         impresion:'apaisado'
       },

       {nombre:'El espejo Africano',
        editorial:'Sm',
        paginas:el_espejo_africano_paginas,
        precio:parseInt((el_espejo_africano_paginas/impresion_apaisado))*precioCompiasDobleFaz+precio_anillado+redondeo+anillado,
        impresion:'apaisado'
        },

        {nombre:'El principito',
         editorial:'Epublibre',
         paginas:el_principito_paginas,
         precio:parseInt((el_principito_paginas/impresion_doble_faz))*precioCompiasDobleFaz+precio_anillado+redondeo+anillado,
         impresion:'doble faz'
        }, 

        {nombre:'El principito',
         editorial:'Epublibre',
         paginas:el_principito_paginas,
         precio:parseInt((el_principito_paginas/impresion_apaisado))*precioCompiasDobleFaz+redondeo+abrochado,
         impresion:'apaisado'
       }, 

        {nombre:'El principito',
         editorial:'Epublibre',
         paginas:el_principito_paginas,
         precio:parseInt((el_principito_paginas/impresion_apaisado))*precioCompiasDobleFaz+precio_anillado+redondeo+anillado,
         impresion:'apaisado'
       },         
        /*--Final E--*/

         /*--Comienzan con Letra F--*/
         {nombre:'Fisica Quimica 2°',
          editorial:'Sm proyecto nodos',
          paginas:fisica_quimica2_proyecto_nodos_paginas,
          precio:(fisica_quimica2_proyecto_nodos_paginas/impresion_doble_faz)*precioCompiasDobleFaz+precio_anillado+anillado,
          impresion:'doble faz'
          },

         {nombre:'Fisica Quimica 2°',
          editorial:'Sm serie conectar',
          paginas:fisica_quimica2_serie_conectar_paginas,
          precio:(fisica_quimica2_serie_conectar_paginas/impresion_doble_faz)*precioCompiasDobleFaz+precio_anillado+anillado,
          impresion:'doble faz'
         },
         
         {nombre:'Fisica Quimica 3°',
          editorial:'Sm proyecto nodos',
          paginas:fisica_quimica3_proyecto_nodos_paginas,
          precio:(fisica_quimica3_proyecto_nodos_paginas/impresion_doble_faz)*precioCompiasDobleFaz+precio_anillado+anillado,
          impresion:'doble faz',
          },                           
        /*--Final F--*/
         
        /*--Comienzan con Letra G--*/
        {nombre:'Geografia 2 ',
         editorial:'Santillana ',
         paginas:geografia2_santillana_paginas,
         precio:(geografia2_santillana_paginas/impresion_doble_faz)*precioCompiasDobleFaz+precio_anillado+anillado,
         impresion:'doble faz',
         },

        {nombre:'Geografia 3 ',
         editorial:'Estrada ',
         paginas:geografia3_estrada_paginas,
         precio:parseInt((geografia3_estrada_paginas/impresion_doble_faz))*precioCompiasDobleFaz+precio_anillado+redondeo+anillado,
         impresion:'doble faz',
         },
         
         {nombre:'Geografia 4 ',
          editorial:'Estrada ',
          paginas:geografia4_estrada_paginas,
          precio:parseInt((geografia4_estrada_paginas/impresion_doble_faz))*precioCompiasDobleFaz+precio_anillado+redondeo+anillado,
          impresion:'doble faz',
         },  

         {nombre:'Geografia 4 ',
          editorial:'Estrada ',
          paginas:geografia4_estrada_paginas,
          precio:parseInt((geografia4_estrada_paginas/impresion_apaisado))*precioCompiasDobleFaz+precio_anillado+redondeo+anillado,
          impresion:'apaisado',
         },  
        /*--Final G--*/

        /*--Comienzan con Letra H--*/
        {nombre:'Historia 1°',
         editorial:'Mandioca',
         paginas:historia1_mandioca_paginas,
         precio:(historia1_mandioca_paginas/impresion_doble_faz)*precioCompiasDobleFaz+precio_anillado+anillado,
         impresion:'doble faz',
        },

        {nombre:'Historia 2°',
         editorial:'Mandioca',
         paginas:historia2_mandioca_paginas,
         precio:(historia2_mandioca_paginas/impresion_doble_faz)*precioCompiasDobleFaz+precio_anillado+anillado,
         impresion:'doble faz',
        },

        {nombre:'Historia 2°',
         editorial:'Santillana',
         paginas:historia2_santillana_paginas,
         precio:parseInt((historia2_santillana_paginas/impresion_doble_faz))*precioCompiasDobleFaz+precio_anillado+redondeo+anillado,
         impresion:'doble faz',
        },

        {nombre:'Historia 3°',
         editorial:'Santillana',
         paginas:historia3_santillana_paginas,
         precio:parseInt((historia3_santillana_paginas/impresion_doble_faz))*precioCompiasDobleFaz+precio_anillado+redondeo+anillado,
         impresion:'doble faz',
        },

        {nombre:'Historia 3°',
         editorial:'Estrada',
         paginas:historia3_estrada_paginas,
         precio:parseInt((historia3_estrada_paginas/impresion_doble_faz))*precioCompiasDobleFaz+precio_anillado+anillado,
         impresion:'doble faz',
        },
        {nombre:'Hola buen día, te quería avisar que ya esta el cuadernillo, avísame cuando pasas 👌',
         editorial:'Hola buen día, te quería avisar que ya estan los cuadernillos, avísame cuando pasas 👌',
         paginas:'no aplica',
         precio:'no aplica',
         impresion:'no aplica',
       },                        
        /*--Final H--*/

        /*--Comienzan con Letra I--*/               
        /*--Final I--*/

        /*--Comienzan con Letra J--*/       
        /*--Final J--*/

        /*--Comienzan con Letra K--*/             
        /*--Final K--*/

         /*--Comienzan con Letra L--*/               
         /*--Final L--*/  

        /*--Comienzan con Letra M--*/
        {nombre:'Mi Planta de Naranja lima',
         editorial:'El ateneo',
         paginas:mi_planta_de_naranja_lima_paginas,
         precio:(mi_planta_de_naranja_lima_paginas/impresion_doble_faz)*precioCompiasDobleFaz+precio_anillado+anillado,
         impresion:'doble faz',
        },

        {nombre:'Mitos Clasificados 1',
         editorial:'Cantaro',
         paginas:mitos_clasificados1_paginas,
         precio:(mitos_clasificados1_paginas/impresion_doble_faz)*precioCompiasDobleFaz+precio_anillado+anillado,
         impresion:'doble faz',
        },

        {nombre:'Mitos Clasificados 1',
         editorial:'Cantaro',
         paginas:mitos_clasificados1_paginas,
         precio:parseInt((mitos_clasificados1_paginas/impresion_apaisado))*precioCompiasDobleFaz+precio_anillado+redondeo+anillado,
         impresion:'apaisado',
        },

       {nombre:'Mitos Clasificados 2',
        editorial:'Cantaro',
        paginas:mitos_clasificados2_paginas,
        precio:parseInt((mitos_clasificados2_paginas/impresion_apaisado))*precioCompiasDobleFaz+precio_anillado+redondeo+anillado,
        impresion:'apaisado',
       },
       
        {nombre:'Mi Planta de Naranja lima',
         editorial:'El ateneo',
         paginas:mi_planta_de_naranja_lima_paginas,
         precio:parseInt((mi_planta_de_naranja_lima_paginas/impresion_apaisado))*precioCompiasDobleFaz+precio_anillado+redondeo+anillado,
         impresion:'apaisado',
        },

        {nombre:'Matematica 4°',
         editorial:'Profesores',
         paginas: '43',
         precio:parseInt((matematica4_porfesores_paginas/impresion_doble_faz))*precioCompiasDobleFaz+redondeo+abrochado,
         impresion:'doble faz',
        },
        
        {nombre:'Matematica 4°',
         editorial:'Profesores',
         paginas: '43',
         precio:parseInt((matematica4_porfesores_paginas/impresion_doble_faz))*precioCompiasDobleFaz+precio_anillado+redondeo+anillado,
         impresion:'doble faz',
        },

        {nombre:'Mafalda',
         editorial:'Quino',
         paginas:mafalda_paginas,
         precio: (mafalda_paginas/impresion_doble_faz)*precioCompiasDobleFaz+precio_anillado + anillado,
         impresion:'doble faz',
        },                   
        /*--Final M--*/

        /*--Comienzan con Letra N--*/
        {nombre:'Nuevas Tegnologias de la informacion y la conectividad / NTICx',
         editorial:'Maipue',
         paginas:Nuevas_Tegnologias_de_la_informacion_y_la_conectividad_NTICx,
         precio:(Nuevas_Tegnologias_de_la_informacion_y_la_conectividad_NTICx/impresion_doble_faz)*precioCompiasDobleFaz+precio_anillado + anillado,
         impresion:'doble faz',
        },

        {nombre:'Nuevas Tegnologias de la informacion y la conectividad / NTICx',
         editorial:'Maipue',
         paginas:Nuevas_Tegnologias_de_la_informacion_y_la_conectividad_NTICx,
         precio:parseInt((Nuevas_Tegnologias_de_la_informacion_y_la_conectividad_NTICx/impresion_apaisado))*precioCompiasDobleFaz+precio_anillado+redondeo+anillado,
         impresion:'apaisado',
        },           
        /*--Final N--*/

        /*--Comienzan con Letra Ñ--*/                 
        /*--Final Ñ--*/

        /*--Comienzan con Letra O--*/                 
        /*--Final O--*/

        /*--Comienzan con Letra P--*/                   
        /*--Final P--*/

        /*--Comienzan con Letra Q--*/              
        /*--Final Q--*/

        /*--Comienzan con Letra R--*/
        {nombre:'Rebelion en la granja',
         editorial:'Arenal',
         paginas:rebelion_en_la_granja_pagina,
         precio:parseInt((rebelion_en_la_granja_pagina/impresion_apaisado))*precioCompiasDobleFaz+precio_anillado+redondeo + anillado,
         impresion:'apaisado',
        },                       
        /*--Final R--*/

        /*--Comienzan con Letra S--*/                    
        /*--Final S--*/

        /*--Comienzan con Letra T--*/   
        {nombre:'Trabajo y Ciudadania',
         editorial:'Maipue',
         paginas:trabajo_y_ciudadania_maipue_paginas,
         precio:(trabajo_y_ciudadania_maipue_paginas/impresion_doble_faz)*precioCompiasDobleFaz+precio_anillado+anillado,
         impresion:'doble faz',
       },
       {nombre:'Trabajo y Ciudadania',
        editorial:'Maipue',
        paginas:trabajo_y_ciudadania_maipue_paginas,
        precio:parseInt((trabajo_y_ciudadania_maipue_paginas/impresion_apaisado))*precioCompiasDobleFaz+precio_anillado+redondeo+1+anillado,
        impresion:'apaisado',
      },                   
        /*--Final T--*/

        /*--Comienzan con Letra U--*/                   
        /*--Final U--*/

        /*--Comienzan con Letra V--*/                
        /*--Final V--*/

        /*--Comienzan con Letra W--*/                     
        /*--Final W--*/

        /*--Comienzan con Letra X--*/                 
        /*--Final X--*/

        /*--Comienzan con Letra Y--*/              
        /*--Final Y--*/

        /*--Comienzan con Letra Z--*/                      
        /*--Final Z--*/]

      