var timeBox = document.querySelector(".time");
var startBtn = document.querySelector("#start");
var mainEl = document.getElementById("main");
var flashCard = document.getElementById("flashcard");
var scoreChart = document.getElementById("high-scores");
var question = document.querySelector(".question")
var answer1 = document.querySelector("#answer1");
var answer2 = document.querySelector("#answer2");
var answer3 = document.querySelector("#answer3");
var answer4 = document.querySelector("#answer4");
var result = document.querySelector(".result");
var scoreResult = document.querySelector(".score");
var scoreBoards = document.querySelector("#scoreboard");
var score=0;
var secondsLeft = 100;
var userName;
var tdUserName = document.querySelector("#username");
var tdHighScore = document.querySelector("#userscore");
var playAgain;
var timeValue = null;
var questions = [{quizQuestion: "what color is grass",
                answers: ["red","green","brown","purple"],
                correctAnswer: "green"}, 
                
                {quizQuestion: "what color is a strawberry",
                answers: ["red","blue","brown","yellow"],
                correctAnswer: "red"}, 
                
                {quizQuestion: "what color is a lemon",
                answers: ["purple","yellow","brown","purple"],
                correctAnswer: "yellow"}, 
                
                {quizQuestion: "what color is the sky",
                answers: ["red","green","brown","blue"],
                correctAnswer: "blue"}]


// think about using a for loop for this
// function startQuestions(){
//     for (i=0; i<questions.length; i++)
//     {question.textContent=JSON.stringify(questions[i])}

function displayQuestion(questions, no, previousQuestion, nextQuestion)
{
    var answerElements = [answer1, answer2, answer3, answer4];
    question.textContent = questions[no].quizQuestion;
    for (var i=0; i<answerElements.length; i++)
    {

        if (no > 0)
        {
            var wasItTheRightAnswer = questions[no-1].answers[i] == questions[no-1].correctAnswer;
            answerElements[i].removeEventListener("click", wasItTheRightAnswer ? addScore : minusScore)
            if (previousQuestion) answerElements[i].removeEventListener("click", previousQuestion)
        }
        
        var isThisTheRightAnswer = questions[no].answers[i] == questions[no].correctAnswer;
        answerElements[i].textContent = questions[no].answers[i];
        answerElements[i].setAttribute("value", questions[no].answers[i]);
        answerElements[i].addEventListener("click", isThisTheRightAnswer ? addScore : minusScore)
        if (nextQuestion) answerElements[i].addEventListener("click", nextQuestion);

    }
}

function startQuestions()
{
    displayQuestion(questions, 0, null, secondQuestion);
}

function secondQuestion()
{
    displayQuestion(questions, 1, secondQuestion, thirdQuestion);
}

function thirdQuestion()
{
    displayQuestion(questions, 2, thirdQuestion, fourthQuestion);
}

function fourthQuestion()
{
    displayQuestion(questions, 3, fourthQuestion, quizCompleted);
}

function addScore(){
    result.textContent="right answer";
    score +=1;
    scoreResult.textContent= score;

}

function minusScore(){
    result.textContent="wrong answer";
    secondsLeft-=10;
}

function startTimer() {
startBtn.setAttribute("style", "visibility: hidden; ");
flashCard.setAttribute("style","visibility: visible; ");
  timeValue = setInterval(function() {
  secondsLeft--;
  timeBox.textContent = secondsLeft + " seconds left";
  if(secondsLeft <= 0) {
      clearInterval(timerValue);
      gameOver();
    }
  }, 1000);
}

function stopTimer() {
    clearInterval(timeValue);
 }


function gameOver() {
  timeBox.textContent = " ";
  var h4el = document.createElement("h4");
  h4el.textContent = "your time is up";
  mainEl.appendChild(h4el);
  flashCard.setAttribute("style","visibility: hidden; ");



}

function getUserName(){
    userName = prompt("Please enter your name");
    var liElname = document.createElement("li");
    liElname.textContent= userName;
    tdUserName.appendChild(liElname);



    var liElscore = document.createElement("li");
    liElscore.textContent= score;
    tdHighScore.appendChild(liElscore)


}

function replay(){
    var replayResponse = window.confirm("play again?");
        if (replayResponse==true) {
        playAgain=true;
        score = 0;
        startQuiz();
        }
        else {
                
        playAgain=false;
        return;}
            }


function quizCompleted(){
    flashCard.setAttribute("style","visibility: hidden; ");
    mainEl.textContent = "you have finished the quiz your score is " + score;
    scoreChart.setAttribute("style","visibility: visible; ");
    getUserName();
    stopTimer();
   
    
}







function startQuiz(){
    startTimer();
    startQuestions();
}
startBtn.addEventListener("click", startQuiz);

