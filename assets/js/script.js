// Variables for HTML
var quizBeginning = $('quiz-open');
var quizMain = $('quiz');
var startQuiz = $('quiz-start');
var quizTimer = $('#timer');
var quizEnd = $('quiz-end');
var finalScore = $('final-score');
var scoreInputName = $('name-submission');
var scoreSubmit = $('submit-score');
var restart = $('restart');
var playAgain = $('playAgain');
var buttonA = $('button-a');
var buttonB = $('button-b');
var buttonC = $('button-c');
var buttonD = $('button-d');

// General variables
var timerInterval
var timeLeft = 80;
var score = 0

// Timer functionality
timerInterval = setInterval(function() {
    timeLeft--;
    quizTimer.textContent = "Time left: " + timeLeft;
});

// Button to start quiz
startQuizButton.addEventListener("click", startQuiz);