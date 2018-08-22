jQuery(document).ready(function($) {
    $('.configuraciones').hide();


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
           
                  persona= valor;
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



                       
                  } else {  //jugar
                        pregunta_actual();
                        lapregunta_actual++;
                  }

               break;
        


           default: 
                 
               break;


        }    
       
       

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


$("#uname").on('change', function(){
    document.getElementById("demo").innerHTML = "";
      varial = $("#uname").val();
      if (varial < 18) {
          text = "Debes ser mayor de Edad";
          document.getElementById("demo").innerHTML = text;
          $('.esa img').hide();
    } else {
        $('.esa img').show();
        $('.guardabtna').hide();
      }

});
$(".guardabtna").click(function() {
  document.getElementById("demo").innerHTML = "";
      varial = $("#uname").val();
      if (varial < 18) {
          text = "Debes ser mayor de Edad";
          document.getElementById("demo").innerHTML = text;
          $('.esa img').hide();
    } else {
        $('.esa img').show();
        $('.guardabtna').hide();
      }

});

   

}); //fin


