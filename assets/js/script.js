// Variables for HTML
var quizBeginning = document.getElementById('quiz-open');
var quizMain = document.getElementById('quiz');
var startQuizButton = document.getElementById('quiz-start');
var questionsEl = document.getElementById('questions');
var quizTimer = document.getElementById('timer');
var quizEnd = document.getElementById('quiz-end');
var finalScore = document.getElementById('final-score');
var scoreInputName = document.getElementById('name-submission');
var scoreSubmit = document.getElementById('submit-score');
var restart = document.getElementById('restart');
var playAgain = document.getElementById('playAgain');
var buttonA = document.getElementById('a');
var buttonB = document.getElementById('b');
var buttonC = document.getElementById('c');

// Quiz questions
var quizQuestions = [
    {
        question: "What is needed for an HTML file to read a Javascript file?",

        choiceA: 'Linking src="index.html" in the JS',
        choiceB: 'Linking src="script.js" in the HTML',
        choiceC: 'It can read from the JS file without any help',

        correctAnswer: 'b'
    },
    {
        question: "How do div's in HTML read variables from JS",

        choiceA: 'With the ID element',
        choiceB: 'With the Class element',
        choiceC: 'With with P element',

        correctAnswer: 'a'
    }
]

// General variables
var lastQuestionIndex = quizQuestions.length;
var currentQuestionIndex = 0;
var timerInterval
var timeLeft = 80;
var score = 0;

// Hides uneeded elements
quizMain.style.display = 'none';
restart.style.display = 'none';
quizEnd.style.display = 'none';

// Generates questions for quiz
function generateQuizQuestion() {
    if (currentQuestionIndex === lastQuestionIndex) {
        showScore();
    }
    var currentQuestion = quizQuestions[currentQuestionIndex];
    questionsEl.innerHTML = "<p>" + currentQuestion.question + "</p>";
    buttonA.innerHTML = currentQuestion.choiceA;
    buttonB.innerHTML = currentQuestion.choiceB;
    buttonC.innerHTML = currentQuestion.choiceC;
}

// Starts quiz
function startQuiz() {
    quizBeginning.style.display = 'none';
    quizMain.style.display = 'block';
    quizEnd.style.display = 'none';
    restart.style.display = 'none';
    generateQuizQuestion();

// Timer functionality
    timerInterval = setInterval(function() {
        timeLeft--;
        quizTimer.textContent = "Time left: " + timeLeft;

        if(timeLeft === 0) {
            clearInterval(timerInterval);
            showScore();
        }
    }, 1000);
}

// Checks answer for each question
function checkAnswer(answer) {
    correct = quizQuestions[currentQuestionIndex].correctAnswer;

    if (answer === correct) {
        score++;
        currentQuestionIndex++;
        generateQuizQuestion();
    } else if (answer !== correct) {
        currentQuestionIndex++;
        generateQuizQuestion();
    }
}

// Shows score at end of quiz
function showScore() {
    quizMain.style.display = 'none';
    quizEnd.style.display = 'flex';
    clearInterval(timerInterval);
    finalScore.innerHTML = "Your score is " + score + " out of " + quizQuestions.length;
}

// Restarts Quiz
function replayQuiz() {
    timeLeft = 80;
    score = 0;
}

// Button to start quiz
startQuizButton.addEventListener("click", startQuiz);