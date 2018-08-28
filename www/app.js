jQuery(document).ready(function($) {
    $('.configuraciones').hide();


if (localStorage.getItem("conteo") !== null) {    //sino existe la variable configuraciones q la cree
    $('#conteo').text(localStorage.getItem('conteo'));
} else {
    $('#conteo').text('0');
}
if (localStorage.getItem("hombres") !== null) {    //sino existe la variable configuraciones q la cree
    $('#hombres').text(localStorage.getItem('hombres'));
} else {
    $('#hombres').text('0');
}
if (localStorage.getItem("mujeres") !== null) {    //sino existe la variable configuraciones q la cree
    $('#mujeres').text(localStorage.getItem('mujeres'));
} else {
    $('#mujeres').text('0');
}

if (localStorage.getItem("venue") !== null) {    //sino existe la variable configuraciones q la cree
    $('#venue').val(localStorage.getItem('venue'));
} else {
    $('#venue').val('Aún no se guarda un Venue');
}

if (localStorage.getItem("1plata") !== null) {    //sino existe la variable configuraciones q la cree
    $('#1plata').text(localStorage.getItem('1plata'));
} else {
    $('#1plata').text('0');
}
if (localStorage.getItem("1anejo") !== null) {    //sino existe la variable configuraciones q la cree
    $('#1anejo').text(localStorage.getItem('1anejo'));
} else {
    $('#1anejo').text('0');
}
if (localStorage.getItem("1reposado") !== null) {    //sino existe la variable configuraciones q la cree
    $('#1reposado').text(localStorage.getItem('1reposado'));
} else {
    $('#1reposado').text('0');
}
if (localStorage.getItem("1innovador") !== null) {    //sino existe la variable configuraciones q la cree
    $('#1innovador').text(localStorage.getItem('1innovador'));
} else {
    $('#1innovador').text('0');
}


if (localStorage.getItem("plata") !== null) {    //sino existe la variable configuraciones q la cree
    $('#plata').text(localStorage.getItem('plata'));
} else {
    $('#plata').text('0');
}
if (localStorage.getItem("anejo") !== null) {    //sino existe la variable configuraciones q la cree
    $('#anejo').text(localStorage.getItem('anejo'));
} else {
    $('#anejo').text('0');
}
if (localStorage.getItem("reposado") !== null) {    //sino existe la variable configuraciones q la cree
    $('#reposado').text(localStorage.getItem('reposado'));
} else {
    $('#reposado').text('0');
}
if (localStorage.getItem("innovador") !== null) {    //sino existe la variable configuraciones q la cree
    $('#innovador').text(localStorage.getItem('innovador'));
} else {
    $('#innovador').text('0');
}

                    
                    


$( ".activarsi" ).click(function() {
   $('.configuraciones').show();
   $('.icong').hide();
});

    var preguntas = [{
        lapregunta: "Es momento de compartir con tus amigos, ¿en dónde prefieres estar?",
        opciones: ["preguntas/lugar/13.png", "preguntas/lugar/14.png", "preguntas/lugar/15.png", "preguntas/lugar/16.png"],
        respuesta_correcta: 0
    }, {
        lapregunta: "Llegó el fin de semana, ¿a quién llamas para ver qué plan?",
        opciones: ["preguntas/compania/10.png", "preguntas/compania/11.png", "preguntas/compania/12.png", "preguntas/compania/12a.png"],
        respuesta_correcta: 1
    }, {
        lapregunta: "En una salidita a comer, ¿cuál es tu primera elección ?",
        opciones: ["preguntas/comida/7.png", "preguntas/comida/8.png", "preguntas/comida/9.png", "preguntas/comida/9a.png"],
        respuesta_correcta: 2
    }, {
        lapregunta: "Cuando pones tu playlist, ¿qué es lo primero que suena?",
        opciones: ["preguntas/musica/4.png", "preguntas/musica/5.png", "preguntas/musica/6.png", "preguntas/musica/6a.png"],
        respuesta_correcta: 3
    }, {
        lapregunta: "¿Cómo imaginas un fin de semana perfecto?",
        opciones: ["preguntas/plan/1.png", "preguntas/plan/2.png", "preguntas/plan/3.png", "preguntas/plan/3a.png"],
        respuesta_correcta: 0
    }];

    var lapregunta_actual = 0;
    var respuesta_correctas = 0;
    var quizOver = false;
    var arr = [];
    i = 0;
    var orden = [];

    var imagen_eliminar = [3,1,0,2];


    //if (typeof(localStorage.getItem('configuraciones')) != "undefined") {
    if (localStorage.getItem("configuraciones") === null) {    //sino existe la variable configuraciones q la cree

          $.each($('.configuraciones > div > input[type="checkbox"]:checked'), function(indice, valor){
             orden.push(  parseInt($(this).val())   ) ;
          });

          localStorage.setItem('configuraciones',orden);
    }

    //quitar todos los checked
      $('.configuraciones > div > input[type="checkbox"]:checked').prop('checked', false);

     //crear la variable orden 
     arreglo_temp = localStorage.getItem('configuraciones').split(',');
     for ( var i=0; i<preguntas.length-1; i++ ) {
      if  (arreglo_temp[i]!=undefined) 
      {
        orden.push( parseInt(arreglo_temp[i]) ); // = localStorage.getItem('configuraciones').split(',');
        //lo dibujo nuevamente
        $('.configuraciones > div > input[type="checkbox"][value="'+arreglo_temp[i]+'"]').prop('checked', true);      


      }


     } 



     

     $(this).on("click",'input[type="button"][value="Guardar"]', function () {    
       // alert('sad');
          orden =[]; //vacio orden y guardo uno nuevo
          $.each($('.configuraciones > div > input[type="checkbox"]:checked'), function(indice, valor){
             orden.push(  parseInt($(this).val())   ) ;
          });
          venue = $('#venue').val();
          
       
          localStorage.setItem('venue',venue);
                                  
        
          localStorage.setItem('configuraciones',orden);

          window.location.reload();
          $('.configuraciones').hide();
          $('.icong').show();
     });


     
     //console.log(orden);
    //[2,1,3,0];
    

//////////

    todo = [0,1,2,3]; //sirve como base solo para eliminar opciones "imagenes"
    //var orden = [2,1,3,0];
    var  temporal = [];
     Object.assign(temporal,orden);
  

    orden.sort();
                     //todo.filter(value => -1 !== orden.indexOf(value)) // los bueno
   var eliminar = todo.filter(value => -1 == orden.indexOf(value)) //los que hay q eliminar
   eliminar.reverse();

  // console.log(eliminar);

    var definitivo_eliminar = [];

    
        for ( var j=0; j<=eliminar.length-1; j++ )  {
            definitivo_eliminar.push(imagen_eliminar[eliminar[j]]); 
        }
    


    definitivo_eliminar.reverse();
    //definitivo_eliminar=[1,0];
    console.log(definitivo_eliminar);
    for ( var i=0; i<preguntas.length; i++ ) {
        for ( var j=0; j<=definitivo_eliminar.length-1; j++ )  {
          preguntas[i].opciones.splice(  definitivo_eliminar[j]  ,1);
          //console.log(i);
          //console.log(definitivo_eliminar[j]);
        }
    }


    orden= temporal; //[2,1,3,0];

  /*console.log(preguntas);
  console.log(orden);
  */

///////////




    var persona = 0;
    var cantJuegos=5;  
    var niveles = 1; //6;  //4+1(hombre)+1(resultado)  son 6niveles



    
    $(this).on("click",'.pregunt', function () {    

        var campo = ( $(this).find("input[type='radio']").attr('name') );
        var valor = ( $(this).find("input[type='radio']").val() );

        

        switch ( campo ) {
           case "persona": 
           
                  persona = valor;
                  niveles++;
               break;

            case "radioopcion":  
                   arr.push(valor);
               break;


           default: 
               
               break;
        }

          //eliminar el body
          $('.principal').children().remove();
          
          //agregar 2 contenedores "preguntas" y "opciones"
          $('.principal').append('<div class="container lapregunta preguntaestulos"></div>');
          $('.principal').append('<div class="container bloque_opciones"></div>');    

        
        //poner el proximo body
        switch ( niveles ) {  //el 1 no hace falta porq era hombre o mujer
           case 2:  //pintar los 1ros cuadrados de preguntas 
               
                  
                  
                  if (arr.length>=cantJuegos)  {  //La respuesta
                     niveles++;

                        //encontrar los elementos que se repiten
                        
                        var recipientsArray = arr.sort(); 

                        //console.log(recipientsArray);

                        var elemDuplicados = [];
                        for (var i = 0; i < recipientsArray.length - 1; i++) {
                            if (recipientsArray[i + 1] == recipientsArray[i]) {
                                    elemDuplicados.push(recipientsArray[i]);
                            }
                        }

                        var segundaVuelta = [];
                        for (var i = 0; i < elemDuplicados.length - 1; i++) {
                            if (elemDuplicados[i + 1] == elemDuplicados[i]) {
                                    segundaVuelta.push(elemDuplicados[i]);
                            }
                        }

                        
                         elemDuplicados= (segundaVuelta.length>0) ? segundaVuelta  : elemDuplicados;
                        


                        //console.log(elemDuplicados);

                        //alert(  arr );
                        var menor = 100;  

                       // console.log(elemDuplicados);
                         $.each(elemDuplicados, function( index, value ) {
                           if (menor>orden[value]) {
                                menor = orden[value];
                           }

                        });
                         //console.log(menor);
                     



                       var imagen = 'img/resultados/'+persona+'/c'+menor+'.png'+ '?' + (new Date()).getTime();   // lo ultimo despues del ? es para limpiar cache d imagen
                       
                       $('.contlogo').remove();
                       $('.principal').append('<div class="container resultado"></div>');


                       var bloque_pregunta = $(document).find(".quizContainer > .principal > .resultado");  //busca el contenedor donde poner la pregunta


                       
                       bloque_pregunta.append('<div class="col-md-12 col-sm-12 col-xs-12 text-center imagenresultado"><img src="' + imagen + '"></div>');
                       bloque_pregunta.append('<div class="col-md-12 col-sm-12 col-xs-12 text-center"><button id="inicio" type="button" onclick="javascript:window.location.reload();">REINICIAR</button></div>');

                       
                  if (localStorage.getItem("conteo") === null) {    //sino existe la variable configuraciones q la cree
                      localStorage.setItem('conteo',1);
                  }  else {
                       localStorage.setItem('conteo', (parseInt(localStorage.getItem('conteo'))+1) );
                  }

                   if (persona==="1") {
                           if (localStorage.getItem("hombres") === null) {    //sino existe la variable configuraciones q la cree
                                      localStorage.setItem('hombres',1);
                                  }  else {
                                       localStorage.setItem('hombres', (parseInt(localStorage.getItem('hombres'))+1) );
                                  }
                        }
                        if (persona==="2") {
                           if (localStorage.getItem("mujeres") === null) {    //sino existe la variable configuraciones q la cree
                                      localStorage.setItem('mujeres',1);
                                  }  else {
                                       localStorage.setItem('mujeres', (parseInt(localStorage.getItem('mujeres'))+1) );
                                  }
                        }

                        if (menor===2 && persona==="1") {
                           if (localStorage.getItem("1plata") === null) {    //sino existe la variable configuraciones q la cree
                                      localStorage.setItem('1plata',1);
                                  }  else {
                                       localStorage.setItem('1plata', (parseInt(localStorage.getItem('1plata'))+1) );
                                  }
                        }
                        if (menor===1 && persona==="1") {
                           if (localStorage.getItem("1reposado") === null) {    //sino existe la variable configuraciones q la cree
                                      localStorage.setItem('1reposado',1);
                                  }  else {
                                       localStorage.setItem('1reposado', (parseInt(localStorage.getItem('1reposado'))+1) );
                                  }
                        }
                        if (menor===3 && persona==="1") {
                           if (localStorage.getItem("1anejo") === null) {    //sino existe la variable configuraciones q la cree
                                      localStorage.setItem('1anejo',1);
                                  }  else {
                                       localStorage.setItem('1anejo', (parseInt(localStorage.getItem('anejo'))+1) );
                                  }
                        }
                         if (menor===0 && persona==="1") {
                           if (localStorage.getItem("1innovador") === null) {    //sino existe la variable configuraciones q la cree
                                      localStorage.setItem('1innovador',1);
                                  }  else {
                                       localStorage.setItem('1innovador', (parseInt(localStorage.getItem('innovador'))+1) );
                                  }
                        }



                        if (menor===2 && persona==="2") {
                           if (localStorage.getItem("plata") === null) {    //sino existe la variable configuraciones q la cree
                                      localStorage.setItem('plata',1);
                                  }  else {
                                       localStorage.setItem('plata', (parseInt(localStorage.getItem('plata'))+1) );
                                  }
                        }
                        if (menor===1 && persona==="2") {
                           if (localStorage.getItem("reposado") === null) {    //sino existe la variable configuraciones q la cree
                                      localStorage.setItem('reposado',1);
                                  }  else {
                                       localStorage.setItem('reposado', (parseInt(localStorage.getItem('reposado'))+1) );
                                  }
                        }
                        if (menor===3 && persona==="2") {
                           if (localStorage.getItem("anejo") === null) {    //sino existe la variable configuraciones q la cree
                                      localStorage.setItem('anejo',1);
                                  }  else {
                                       localStorage.setItem('anejo', (parseInt(localStorage.getItem('anejo'))+1) );
                                  }
                        }
                         if (menor===0 && persona==="2") {
                           if (localStorage.getItem("innovador") === null) {    //sino existe la variable configuraciones q la cree
                                      localStorage.setItem('innovador',1);
                                  }  else {
                                       localStorage.setItem('innovador', (parseInt(localStorage.getItem('innovador'))+1) );
                                  }
                        }




                    //console.log(  localStorage.getItem('conteo')  );
                    $('#conteo').text(localStorage.getItem('conteo'));
                    } else {  //jugar
                          pregunta_actual();
                          lapregunta_actual++;
                    }

               break;
        


           default: 
                 
               break;


        }    
       
       

    });  






function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}



// Start file download.



$("#reset").click(function() {



// var currentDate = new Date(),
//       day = currentDate.getDate(),
//       month = currentDate.getMonth() + 1,
//       year = currentDate.getFullYear(),
//        hours = currentDate.getHours(),
//       minutes = currentDate.getMinutes();

// date = new Date();
// ndate = date.getTime();
// contenido = day + '/' + month + '/' + year + ' - ' + hours + ':' + minutes + ' - Conteo total:' + localStorage.getItem('plata') + ', Hombres:' + localStorage.getItem('hombres')+ ', Mujeres:' + localStorage.getItem('mujeres')+ ', Hombres Plata:' + localStorage.getItem('1plata')+ ', Hombres Añejo:' + localStorage.getItem('1anejo')+ ', Hombres Reposado:' + localStorage.getItem('1reposado')+ ', Hombres Innovador:' + localStorage.getItem('1innovador')+ ', Mujeres Plata:' + localStorage.getItem('plata')+ ', Mujeres Añejo:' + localStorage.getItem('anejo')+ ', Mujeres Reposado:' + localStorage.getItem('reposado')+ ', Mujeres Innovador:' + localStorage.getItem('innovador'); 
// download(ndate,contenido);


  localStorage.setItem('conteo',0);
  localStorage.setItem('hombres',0);
  localStorage.setItem('mujeres',0);
  localStorage.setItem('plata',0);
  localStorage.setItem('anejo',0);
  localStorage.setItem('reposado',0);
  localStorage.setItem('innovador',0);
    localStorage.setItem('1plata',0);
  localStorage.setItem('1anejo',0);
  localStorage.setItem('1reposado',0);
  localStorage.setItem('1innovador',0);
  localStorage.setItem('venue',' ');
 window.location.reload();

});
$(".regresar").click(function() {  
  window.location.reload();

});




        // Mostrar la pregunta y las opciones
    function pregunta_actual() {

        
        var bloque_pregunta = $(document).find(".quizContainer > .principal > .lapregunta");  //busca el contenedor donde poner la pregunta
        var bloque_opciones = $(document).find(".quizContainer  > .principal > .bloque_opciones");   //busca el contenedor donde poner las opciones
        var numopciones = preguntas[lapregunta_actual].opciones.length;  //obtiene la cantidad de opciones q en este caso son 4
        

        var lapregunta = preguntas[lapregunta_actual].lapregunta;  //texto de la pregunta actual

        // Set the bloque_pregunta text to the current lapregunta 
        $(bloque_pregunta).text(lapregunta);

        // Remove all current <li> elements (if any)
        $(bloque_opciones).find("div").remove();

        var choice;
        for (i = 0; i < numopciones; i++) {
            choice = preguntas[lapregunta_actual].opciones[i]+ '?' + (new Date()).getTime();
            //console.log(choice);
            $('<div class="col-md-6 col-sm-6 col-xs-6 pregunt text-center"><label><input type="radio" value=' + i + ' name="radioopcion" /><img src="' + choice + '"></label></div>').appendTo(bloque_opciones);
        }

        


    }


// $("#uname").on('change', function(){
//     document.getElementById("demo").innerHTML = "";
//       varial = $("#uname").val();
//       var numchk = new RegExp("^[0-9]*$");     /* Using this expression console.log() will display "Numeric value" if the input field value is blank or if it is numeric */  
//         $("#uname").blur( function() {                   /* This function is called whenever input field with id "number" loses focus */
//             if( numchk.test( $("#uname").val() ) ){
//                 if (varial < 18) {
//                     $("#uname").val("");
                     
//                     text = "Debes ser mayor de Edad";
//                     document.getElementById("demo").innerHTML = text;
//                     $('.esa img').hide();
                     
//                 } else {
//                   $('.esa img').show();
//                   $('.guardabtna').hide();
//                 }
//             }else{
//               $("#uname").val("");
              
//                 text = "Dato inválido";
//                     document.getElementById("demo").innerHTML = text;
//                     $('.esa img').hide();
                     
//             }
//         });


      

// });
$(".guardabtna").on( "click", function() {
  varial = $("#uname").val();       
      var numchk = new RegExp("^[0-9]*$");     /* Using this expression console.log() will display "Numeric value" if the input field value is blank or if it is numeric */  
            if( numchk.test( $("#uname").val() ) ){
                if (varial < 18) {
                    $("#uname").val("");
                     
                    text = "Debes ser mayor de Edad";
                    document.getElementById("demo").innerHTML = text;
                    $('.esa img').hide();
                     
                } else {
                  $('.esa img').show();
                  $('.guardabtna').hide();
                }
            }else{
              $("#uname").val("");
              
                text = "Dato inválido";
                    document.getElementById("demo").innerHTML = text;
                    $('.esa img').hide();
                     
            }
       
 });       



    document.getElementById("downloadFile").addEventListener("click", downloadFile);

function downloadFile() {
   var fileTransfer = new FileTransfer();
   var uri = encodeURI("http://s14.postimg.org/i8qvaxyup/bitcoin1.jpg");
   var fileURL =  "///storage/emulated/0/DCIM/myFile";

   fileTransfer.download(
      uri, fileURL, function(entry) {
         console.log("download complete: " + entry.toURL());
      },
        
      function(error) {
         console.log("download error source " + error.source);
         console.log("download error target " + error.target);
         console.log("download error code" + error.code);
      },
        
      false, {
         headers: {
            "Authorization": "Basic dGVzdHVzZXJuYW1lOnRlc3RwYXNzd29yZA=="
         }
      }
   );
}


   

// $("#uname").keypress(function (e) {
//      if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
      
//                return false;
//     }
//    });

}); //fin


