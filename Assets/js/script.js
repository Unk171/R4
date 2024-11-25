const start = document.querySelector("#start");
const question = document.querySelector("#question");
const answerOptions = document.querySelector("#answerOptions");
const quizWindow = document.querySelector("#quizWindow");
const startWindow = document.querySelector("#startWindow");
const resultWindow = document.querySelector("#resultWindow");
const result = document.querySelector("#result");
const startHeader = document.querySelector("#startHeader");
const next = document.querySelector("#next");
let usedQuestions = [];

function quiz() {
    if (usedQuestions.length === questions.length) {
        startHeader.textContent = "Quiz finished!";
        quizWindow.style.display = "none";
        startWindow.style.display = "block";
        usedQuestions = []
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
            quizWindow.style.display = "none";
            resultWindow.style.display = "block"
        })
        answerOptions.appendChild(li)
    })
};


next.addEventListener("click", function () {
    quizWindow.style.display = "block";
    resultWindow.style.display = "none";
    quiz()
})
start.addEventListener("click", function () {
    quizWindow.style.display = "block";
    startWindow.style.display = "none";
    usedQuestions = []
    quiz()
})

