// DECLARED VARIABLES

var questionNumber = document.querySelector(".question-number");
var questionText = document.querySelector(".question-text");
var optionContainer = document.querySelector(".option-container");
var answerIndicatorContainer = document.querySelector(".answer-indicator")
var homeBox = document.querySelector(".home-box");
var quizBox = document.querySelector(".wrapper-quiz-box");
var scoreBox = document.querySelector(".wrapper-score-box");
var timerElement = document.querySelector(".timer");

var timer = 150;
var penalty = 10;
var holdInterval = 0; 
var questionCounter = 0;
var currentQuestion;
var availableQuestion = [];
var availableOptios = [];
var correctAnswers = 0;
var attempt = 0;
var timerInterval = setInterval(updateTimer, 1000 )



function updateTimer() {
         timerElement.innerHTML = "Timer: " + timer;
         timer = timer - 1;
          
         if(timer < 150){
             timer.innerHTML = timer;
         }
         if (timer < 1){
             document.clearInterval(update);
         }

}
update = setInterval("updateTimer()",1000)
updateTimer()
// PUSH THE QUESTION INTO availableQuestion ARRAY
function setAvailableQuestion(){
    var totalQuestion = quiz.length;

     for(var i=0; i<totalQuestion; i++){
         availableQuestion.push(quiz[i])
     }

}

// SET QUESTION, OPTIONS AND QUESTION NUMBER
 function getNewQuestion(){
      //SET QUESTION NUMBER
      questionNumber.innerHTML = "Question " + (questionCounter + 1) + " of " + quiz.length;

      //SET QUESTION TEXT AND GET RANDOM QUESTION
      var questionIndex = availableQuestion[Math.floor(Math.random() * availableQuestion.length)]
      currentQuestion = questionIndex
      questionText.innerHTML = currentQuestion.question;
      // GET THE POSITION OF "questionIndex" FROM THE availableQuestion ARRAY
      var index1= availableQuestion.indexOf(questionIndex);
      
      //REMOVE THE "questionIndex" FROM THE avilableQuestion ARRAY, SO THAT THE QUESTION DOESN'T REPEAT
      availableQuestion.splice(index1,1)
    //   SET THE ANSWER AND GET THE LENGTH OPTIONS  
      var optionLen = currentQuestion.options.length 
      // PUSH OPYIONS INTO availableOptions ARRAY
      for(var i=0; i<optionLen; i++){
          availableOptios.push(i)
      }
       optionContainer.innerHTML = "";
      var animationDelay = 0.15;
      // CREATE OPTIONS IN HTML
      for(var i=0; i<optionLen; i++){
          // RANDOM OPTION
          var optionIndex = availableOptios[Math.floor(Math.random() * availableOptios.length)];
          // GET THE POSITION OF "optionIndex" FROM THE availableOptios
          var index2 = availableOptios.indexOf(optionIndex);
          // REMOVE THE "optionIdex" FROM THE availableOptions, SO THAT THE OPTION DOESN'T REPEAT
          availableOptios.splice(index2,1);
          var option = document.createElement("div");
          option.innerHTML = currentQuestion.options[optionIndex];
          option.id = optionIndex;
          option.style.animationDelay = animationDelay + "s";
          animationDelay = animationDelay + 0.15;
          option.className = "option";
          optionContainer.appendChild(option);
          option.setAttribute("onclick","getResult(this)");
      }
      questionCounter++
      
    }

     // GET THE RESULT OF CURRENT ATTEMPT QUESTION
    function getResult(element){
        var id = parseInt(element.id);
        // GET THE ANSWER BY COMPARING THE ID OF CLICK OPTION
        
        if(id === currentQuestion.answer){
            // SET THE GREEN COLOR TO THE CORRECT OPTION
            element.classList.add("correct");
            // ADD THE INDICATOR TO CORRECT MARK
            updateAnswerIndicator("correct");
            correctAnswers++;
            console.log("correct"+correctAnswers)
        }
        else{
            // SET THE RED COLOR TO THE INCORRECT OPTION
            element.classList.add("wrong");
             // ADD THE INDICATOR TO WRONG MARK
            updateAnswerIndicator("wrong");
            
            //IF THE ANSWER IS WRONG THEN SHOW THE CORRECT OPTION BY ADDING GREEN COLOR TO THE CORRECT OPTION
            var optionLen = optionContainer.children.length;
            for(var i=0; i<optionLen; i++){
                if(parseInt(optionContainer.children[i].id) === currentQuestion.answer){
                    optionContainer.children[i].classList.add("correct");
                }
            }
        }
        attempt++;
        unclickableOptions();
     }
      //MAKE ALL THE OPTIONS UNCLICKABLE ONCE THE USER SELECT A OPTION
     function unclickableOptions(){
          var optionLen = optionContainer.children.length;
          for (var i=0; i<optionLen; i++){
            optionContainer.children[i].classList.add("already-answered");
          }

     }
    function answersIndicator(){
        answerIndicatorContainer.innerHTML = "";
        var totalQuestion = quiz.length;
        for(var i=0; i<totalQuestion; i++){
            var indicator = document.createElement("div");
            answerIndicatorContainer.appendChild(indicator);
        }
    }
    function updateAnswerIndicator(markType){
        answerIndicatorContainer.children[questionCounter-1].classList.add(markType);
    }

    function next(){
        if (questionCounter === quiz.length) {
            console.log("quiz over");
            quizOver();
        }
        else{
            getNewQuestion();
        }
    }

    function quizOver(){
      //HIDE QUIZ quizBox
      quizBox.classList.add("hide");
      // SHOW RESULT BOX
      scoreBox.classList.remove("hide");
      quizResult();
    }

      //GET THE QUIZ RESULT 
    function quizResult(){
       scoreBox.querySelector(".total-questions").innerHTML = quiz.length;
       scoreBox.querySelector(".total-attempt").innerHTML = attempt;
       scoreBox.querySelector(".total-correct").innerHTML = correctAnswers;
       scoreBox.querySelector(".total-wrong").innerHTML = attempt - correctAnswers;
       var percentage = (correctAnswers/quiz.length)*100;
       scoreBox.querySelector(".percentage").innerHTML = percentage.toFixed() + "%";
       scoreBox.querySelector(".total-score").innerHTML = correctAnswers + " / " + quiz.length;
    }

    function resetQuiz(){
       questionCounter = 0;
       correctAnswers = 0;
       attempt = 0;
    }

    function tryAgainQuiz() {
       //HIDE THE scoreBox
       scoreBox.classList.add("hide");
       // SHOW THE quizBox
       quizBox.classList.remove("hide");
       resetQuiz();
       startQuiz();
    }
    function goToHome(){
       // HIDE RESULT SCOREBOX
       scoreBox.classList.add("hide");
       // SHOW HOME BOX
       homeBox.classList.remove("hide");
       resetQuiz();

    }
    // ***** STARTING POINT *****
    function startQuiz(){
        timer = 150;
      // HIDE HOME BOX
      homeBox.classList.add("hide");
      // SHOW QUIZ BOX
      quizBox.classList.remove("hide");
      
   
     // #1 SET ALL QUESTIONS IN availableQuestion ARRAY
     setAvailableQuestion();
     // #2 CALL getNewQuestion(); FUNCTION
     getNewQuestion();
     // TO CREATE INDICATOR OF ANSWERS
     answersIndicator();
    }

    function totalQuestions(){
        homeBox.querySelector(".total-questions").innerHTML = quiz.length;
    }
    totalQuestions()