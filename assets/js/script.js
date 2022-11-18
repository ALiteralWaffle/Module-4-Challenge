// Variables for HTML
var quizBeginning = document.getElementById('quiz-open');
var quizMain = document.getElementById('quiz');
var startQuizButton = document.getElementById('quiz-start');
var quizTimer = document.getElementById('timer');
var quizEnd = document.getElementById('quiz-end');
var finalScore = document.getElementById('final-score');
var scoreInputName = document.getElementById('name-submission');
var scoreSubmit = document.getElementById('submit-score');
var restart = document.getElementById('restart');
var playAgain = document.getElementById('playAgain');
var buttonA = document.getElementById('button-a');
var buttonB = document.getElementById('button-b');
var buttonC = document.getElementById('button-c');
var buttonD = document.getElementById('button-d');

// General variables
var timerInterval
var timeLeft = 80;
var score = 0;

function startQuiz() {
    quizBeginning.style.display = 'none';
    quizEnd.style.display = 'none';
// Timer functionality
    timerInterval = setInterval(function() {
        timeLeft--;
        quizTimer.textContent = "Time left: " + timeLeft;
    }, 1000);
}

// Restarts Quiz
function replayQuiz() {
    timeLeft = 80;
    score = 0;
}

// Button to start quiz
startQuizButton.addEventListener("click", startQuiz);