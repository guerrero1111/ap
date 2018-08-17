jQuery(document).ready(function($) {
	/**
 * Created with JetBrains WebStorm.
 * User: pwanwu
 * Date: 18/09/2013
 * Time: 17:41
 * To change this template use File | Settings | File Templates.
 */

var questions = [{
    question: "Es momento de compartir con tus amigos, ¿en dónde prefieres estar?",
    choices: ["preguntas/lugar/13.png", "preguntas/lugar/14.png", "preguntas/lugar/15.png", "preguntas/lugar/14.png"],
    correctAnswer: 0
}, {
    question: "Llegó el fin de semana, ¿a quién llamas para ver qué plan?",
    choices: ["preguntas/compania/10.png", "preguntas/compania/11.png", "preguntas/compania/12.png", "preguntas/lugar/14.png"],
    correctAnswer: 1
}, {
    question: "En una salidita a comer, ¿cuál es tu primera elección ?",
    choices: ["preguntas/comida/7.png", "preguntas/comida/8.png", "preguntas/comida/9.png", "preguntas/lugar/14.png"],
    correctAnswer: 2
}, {
    question: "Cuando pones tu playlist, ¿qué es lo primero que suena?",
    choices: ["preguntas/musica/4.png", "preguntas/musica/5.png", "preguntas/musica/6.png", "preguntas/lugar/14.png"],
    correctAnswer: 3
}, {
    question: "¿Cómo imaginas un fin de semana perfecto?",
    choices: ["preguntas/plan/1.png", "preguntas/plan/2.png", "preguntas/plan/3.png", "preguntas/lugar/14.png"],
    correctAnswer: 0
}];

var currentQuestion = 0;
var correctAnswers = 0;
var quizOver = false;
var arr = [];
i = 0;

$(document).ready(function () {



    // Display the first question
    //selectordesexo();
    displayCurrentQuestion();
    $(this).find(".quizMessage").hide();

    // On clicking next, display the next question
    //$(this).find(".nextButton").on("click", function () {
    $(this).on("click",'.pregunt', function () {	
        if (!quizOver) {

            value = $("input[type='radio']:checked").val();

            if (value == undefined) {
                $(document).find(".quizMessage").text("Seleccione una respuesta");
                $(document).find(".quizMessage").show();
            } else {
                // TODO: Remove any message -> not sure if this is efficient to call this each time....
                $(document).find(".quizMessage").hide();
                
                // if (value == questions[currentQuestion].correctAnswer) {
                //     correctAnswers++;

                // }

                
				arr.push(value);
				        //I should store id in an array
				//alert(arr);

                currentQuestion++; // Since we have already displayed the first question on DOM ready
                if (currentQuestion < questions.length) {
                    displayCurrentQuestion();
                } else {
                    displayScore();
                    //                    $(document).find(".nextButton").toggle();
                    //                    $(document).find(".playAgainButton").toggle();
                    // Change the text in the next button to ask if user wants to play again
                    $(document).find(".nextButton").text("Jugar de nuevo");
                    quizOver = true;
                }
            }
        } else { // quiz is over and clicked the next button (which now displays 'Play Again?'
            quizOver = false;
            $(document).find(".nextButton").text("Siguiente Pregunta");
            resetQuiz();
            displayCurrentQuestion();
            hideScore();
        }
    });

});

// This displays the current question AND the choices
function displayCurrentQuestion() {

    console.log("In display current Question");

    var question = questions[currentQuestion].question;
    var questionClass = $(document).find(".quizContainer > .question");
    var choiceList = $(document).find(".quizContainer > .choiceList");
    var numChoices = questions[currentQuestion].choices.length;

    // Set the questionClass text to the current question 
    $(questionClass).text(question);

    // Remove all current <li> elements (if any)
    $(choiceList).find("div").remove();

    var choice;
    for (i = 0; i < numChoices; i++) {
        choice = questions[currentQuestion].choices[i];
        $('<div class="col-md-6 col-sm-6 col-xs-6 pregunt text-center"><label><input type="radio" value=' + i + ' name="dynradio" /><img src="' + choice + '"></label></div>').appendTo(choiceList);
    }
}

function selectordesexo() {
    
 
        
 
}

function resetQuiz() {
    currentQuestion = 0;
    correctAnswers = 0;
    hideScore();
}

function displayScore() {
	var choiceList = $(document).find(".quizContainer > .choiceList");
	$(choiceList).find("div").remove();
    //$(document).find(".quizContainer > .result").html("<span style='font-size:30px'>Lograste: " + correctAnswers + " de: " + questions.length + "</span>");
    $(document).find(".quizContainer > .result").html("<span style='font-size:30px'>Tus respuestas: " + arr + "</span>");
    $(document).find(".quizContainer > .result").show();
}

function hideScore() {
    $(document).find(".result").hide();
}




}); //fin