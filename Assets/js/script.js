const start = document.querySelector("#start");
const question = document.querySelector("#question");
const answerOptions = document.querySelector("#answerOptions");
const quizWindow = document.querySelector("#quizWindow");
const startWindow = document.querySelector("#startWindow");
const result = document.querySelector("#result");

function quiz() {

    answerOptions.innerHTML = "";
    const quetsionIndex = Math.floor(Math.random() * questions.length);
    const currentQuestion = questions[quetsionIndex]
    question.textContent = currentQuestion.question;
    currentQuestion.options.forEach((option, i) => {
        const li = document.createElement("li");
        li.setAttribute("data-id", i);
        li.textContent = option;
        li.addEventListener("click", function () {
            const answerIndexString = li.getAttribute("data-id");
            const answerIndex = Number(answerIndexString);
            if (answerIndex === questions[quetsionIndex].correctAnswer) {
                result.textContent = "Correct";
                quiz()
            } else {
                result.textContent = "Wrong";
                quiz()
            }
        })
        answerOptions.appendChild(li)
    });

}

start.addEventListener("click", function () {
    quizWindow.style.display = "block";
    startWindow.style.display = "none";
    quiz()
})

