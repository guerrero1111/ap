jQuery(document).ready(function($) {
    

    var preguntas = [{
        lapregunta: "1-Es momento de compartir con tus amigos, ¿en dónde prefieres estar?",
        opciones: ["preguntas/lugar/13.png", "preguntas/lugar/14.png", "preguntas/lugar/15.png", "preguntas/lugar/14.png"],
        respuesta_correcta: 0
    }, {
        lapregunta: "2- Llegó el fin de semana, ¿a quién llamas para ver qué plan?",
        opciones: ["preguntas/compania/10.png", "preguntas/compania/11.png", "preguntas/compania/12.png", "preguntas/lugar/14.png"],
        respuesta_correcta: 1
    }, {
        lapregunta: "3- En una salidita a comer, ¿cuál es tu primera elección ?",
        opciones: ["preguntas/comida/7.png", "preguntas/comida/8.png", "preguntas/comida/9.png", "preguntas/lugar/14.png"],
        respuesta_correcta: 2
    }, {
        lapregunta: "4- Cuando pones tu playlist, ¿qué es lo primero que suena?",
        opciones: ["preguntas/musica/4.png", "preguntas/musica/5.png", "preguntas/musica/6.png", "preguntas/lugar/14.png"],
        respuesta_correcta: 3
    }, {
        lapregunta: "5- ¿Cómo imaginas un fin de semana perfecto?",
        opciones: ["preguntas/plan/1.png", "preguntas/plan/2.png", "preguntas/plan/3.png", "preguntas/lugar/14.png"],
        respuesta_correcta: 0
    }];

    var lapregunta_actual = 0;
    var respuesta_correctas = 0;
    var quizOver = false;
    var arr = [];
    i = 0;


    var orden = [2,1,3,0];  

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
          $('.principal').append('<div class="container lapregunta"></div>');
          $('.principal').append('<div class="container bloque_opciones"></div>');    

        
        //poner el proximo body
        switch ( niveles ) {  //el 1 no hace falta porq era hombre o mujer
           case 2:  //pintar los 1ros cuadrados de preguntas 
               
                  
                  
                  if (arr.length>=cantJuegos)  {  //La respuesta
                     niveles++;

                        //encontrar los elementos que se repiten
                        
                        var recipientsArray = arr.sort(); 

                        var elemDuplicados = [];
                        for (var i = 0; i < recipientsArray.length - 1; i++) {
                            if (recipientsArray[i + 1] == recipientsArray[i]) {
                                elemDuplicados.push(recipientsArray[i]);
                            }
                        }


                        var menor = 100;  
                         $.each(elemDuplicados, function( index, value ) {
                           //alert(  orden[value] );
                           if (menor>orden[value]) {
                                menor = value;
                           }
                        });

                       var imagen = 'img/resultados/'+persona+'/c'+menor+'.png'+ '?' + (new Date()).getTime();   // lo ultimo despues del ? es para limpiar cache d imagen

                       $('.principal').append('<div class="container resultado"></div>');


                       var bloque_pregunta = $(document).find(".quizContainer > .principal > .resultado");  //busca el contenedor donde poner la pregunta

                       bloque_pregunta.append('<div class="col-md-6 col-sm-6 col-xs-6"><img src="' + imagen + '"></div>');
                       
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


}); //fin


