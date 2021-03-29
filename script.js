// Selects element by class
//We store the interval in a variable. This is an important step, so that we can get the interval to stop. 
var timeBox = document.querySelector(".time");
var startBtn = document.querySelector("#start");
var mainEl = document.getElementById("main");
var flashCard = document.getElementById("flashcard");
var question = document.querySelector(".question")
var answer1 = document.querySelector("#answer1");
var answer2 = document.querySelector("#answer2");
var answer3 = document.querySelector("#answer3");
var answer4 = document.querySelector("#answer4");
var result = document.querySelector(".result");
var scoreResult = document.querySelector(".score");
var scoreBoards = document.querySelector("#scoreboard");
var score=0;
var secondsLeft = 50;


function addScore(){
    result.textContent="right answer";
    score = score + 1;
    scoreResult.textContent= score;

}

function minusScore(){
    result.textContent="wrong answer";
    
}

function startTimer() {
startBtn.setAttribute("style", "visibility: hidden; ");
flashCard.setAttribute("style","visibility: visible; ");
  var timerInterval = setInterval(function() {
  secondsLeft--;
  timeBox.textContent = secondsLeft + " seconds left";
  if(secondsLeft <= 0) {
      clearInterval(timerInterval);
      gameOver();
    }
  }, 1000);
}


    


function gameOver() {
  timeBox.textContent = " ";
  var h4el = document.createElement("h4");
  h4el.textContent = "your time is up";
  mainEl.appendChild(h4el);
  flashCard.setAttribute("style","visibility: hidden; ");



}

function quizCompleted(){
    flashCard.setAttribute("style","visibility: hidden; ");

}
function fifthQuestion() {
    question.textContent = "what color is the sky";
    answer1.textContent = "green";
    answer2.textContent = "brown";
    answer3.textContent = "yellow";
    answer4.textContent = "blue";
    answer1.addEventListener("click", minusScore);
    answer1.addEventListener("click", quizCompleted);
    answer2.addEventListener("click", minusScore);
    answer2.addEventListener("click", quizCompleted);
    answer3.addEventListener("click", minusScore);
    answer3.addEventListener("click", quizCompleted);
    answer4.addEventListener("click", addScore);
    answer4.addEventListener("click", quizCompleted);
}

function fourthQuestion() {
    question.textContent = "what color is a tangerine";
    answer1.textContent = "violet";
    answer2.textContent = "orange";
    answer3.textContent = "maroon";
    answer4.textContent = "cyan";
    answer1.addEventListener("click", minusScore);
    answer1.addEventListener("click", fifthQuestion);
    answer2.addEventListener("click", addScore);
    answer2.addEventListener("click", fifthQuestion);
    answer3.addEventListener("click", minusScore);
    answer3.addEventListener("click", fifthQuestion);
    answer4.addEventListener("click", minusScore);
    answer4.addEventListener("click", fifthQuestion);
    return;
}

function thirdQuestion() {
    question.textContent = "what color is a lemon";
    answer1.textContent = "magenta";
    answer2.textContent = "turquiose";
    answer3.textContent = "blue";
    answer4.textContent = "yellow";
    answer1.addEventListener("click", minusScore);
    answer1.addEventListener("click", fourthQuestion);
    answer2.addEventListener("click", minusScore);
    answer2.addEventListener("click", fourthQuestion);
    answer3.addEventListener("click", minusScore);
    answer3.addEventListener("click", fourthQuestion);
    answer4.addEventListener("click", addScore);
    answer4.addEventListener("click", fourthQuestion);
    return;
}

function secondQuestion() {
    question.textContent = "what color is a strawberry";
    answer1.textContent = "purple";
    answer2.textContent = "blue";
    answer3.textContent = "red";
    answer4.textContent = "orange";
    
    answer1.addEventListener("click", minusScore);
    answer1.addEventListener("click", thirdQuestion);
    answer2.addEventListener("click", minusScore);
    answer2.addEventListener("click", thirdQuestion);
    answer3.addEventListener("click", addScore);
    answer3.addEventListener("click", thirdQuestion);
    answer4.addEventListener("click", minusScore);
    answer4.addEventListener("click", thirdQuestion);
    return;
}


function firstQuestion() {
    question.textContent = "what color is grass";
    answer1.textContent = "green";
    answer2.textContent = "orange";
    answer3.textContent = "red";
    answer4.textContent = "pink";

    answer1.addEventListener("click", addScore);
    answer1.addEventListener("click", secondQuestion);
    answer2.addEventListener("click", minusScore);
    answer2.addEventListener("click", secondQuestion);
    answer3.addEventListener("click", minusScore);
    answer3.addEventListener("click", secondQuestion);
    answer4.addEventListener("click", minusScore);
    answer4.addEventListener("click", secondQuestion);
return;}









function startGame(){
    startTimer();
    firstQuestion();
}
startBtn.addEventListener("click", startGame);




