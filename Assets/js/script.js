const start = document.querySelector("#start");
const question = document.querySelector("#question");
const answerOptions = document.querySelector("#answerOptions");
const quizWindow = document.querySelector("#quizWindow");
const startWindow = document.querySelector("#startWindow");
const resultWindow = document.querySelector("#resultWindow");
const result = document.querySelector("#result");
const startHeader = document.querySelector("#startHeader");
const next = document.querySelector("#next");
const timerEl = document.querySelector("#timer");
const scoresEl = document.querySelector("#scores");
const bestScoresEl = document.querySelector("#bestScores");
let usedQuestions = [];
let timer;
let secondsLeft;
let scores = 0;

function setTime() {
    timer = setInterval(function () {
        secondsLeft--;
        timerEl.textContent = secondsLeft + " seconds left.";

        if (secondsLeft <= 0) {
            clearInterval(timer);
            endGame();
        }
    }, 1000);
}

function quiz() {
    if (usedQuestions.length === questions.length) {
        endGame();
        return        
    }
    let currentQuestionIndex;
    do {
        currentQuestionIndex = Math.floor(Math.random() * questions.length);
    } while (usedQuestions.includes(currentQuestionIndex));
   
    usedQuestions.push(currentQuestionIndex);

    const currentQuestion = questions[currentQuestionIndex];
    question.textContent = currentQuestion.question;
    answerOptions.innerHTML = "";
    currentQuestion.options.forEach((option, i) => {
        const li = document.createElement("li");
        li.setAttribute("data-id", i);
        li.textContent = option;
        li.addEventListener("click", function () {
            const answerIndex = Number(li.getAttribute("data-id"));
            result.textContent = answerIndex === currentQuestion.correctAnswer ? "Correct" : "Wrong";
            result.style.color = answerIndex === currentQuestion.correctAnswer ? "green" : "red"
            secondsLeft += answerIndex === currentQuestion.correctAnswer ? 15 : -5;
            scores += answerIndex === currentQuestion.correctAnswer ? 3 : 0;
            clearInterval(timer);
            quizWindow.style.display = "none";
            resultWindow.style.display = "flex"
        })
        answerOptions.appendChild(li)
    })
};

function endGame() {
    clearInterval(timer);
    scores = scores + secondsLeft + 5;
    startHeader.textContent = "Quiz finished!";
    scoresEl.textContent = `Your score ${scores}`;
    let bestScores = Number(localStorage.getItem("bestScores")) || 0;
    bestScoresEl.textContent = `Your best scores ${bestScores}`;
    if (scores > bestScores) {
        bestScores = scores;
        localStorage.setItem("bestScores", bestScores)
    };
    quizWindow.style.display = "none";
    startWindow.style.display = "flex";
    resultWindow.style.display = "none";
    usedQuestions = [];
    timerEl.textContent = ""
};

next.addEventListener("click", function () {
    quizWindow.style.display = "flex";
    resultWindow.style.display = "none";
    timerEl.textContent = secondsLeft + " seconds left.";
    setTime();
    quiz()
});

start.addEventListener("click", function () {
    clearInterval(timer);
    quizWindow.style.display = "flex";
    startWindow.style.display = "none";
    usedQuestions = [];
    secondsLeft = 45;
    scores = 0;
    setTime();
    quiz()
});

