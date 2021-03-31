# Coding Quiz

## User Story

```
AS A coding boot camp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers
```

## Acceptance Criteria

```
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and my score
```
## Description

These are the steps I did to finish the project

1. Declare variables for each html element on the page so that I can dynamically change them in the javascript file. 

2. Created an array with a nested object with the key items question, answers, and correct answers

3. created a function to start the quiz and start the timer when the start button is pressed which is triggered by an event listener. 

4. created a function so that when wrong answer is pressed time is decremented by 10 seconds and notifies user of wrong answer, and when right answer is pressed adds one point to the score and notifies user of correct answer

5. created a function to display the question using a for loop to iterate through each item in the the questions array then compared the user selection against the right answer
```
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
```

6. created a function for each question, when the function is completed by the user selecting an answer button, the fucntion will call on the next question, until the last question which will call on the function of quizCompleted

7. created a function for when the quiz is completed which will set the visability of the questions to hidden, and notify the user that the quiz has been completed, and tell the user of their score. 

8. created a function to run when the quiz is completed to prompt the user for their name and then stop the timer. 

9. Created a function to log the user name and score into the high score table which will be visible when game is over

## Technology Used

1. HTML
2. CSS
3. Javascript

