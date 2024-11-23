const question = document.querySelector("#question");
const answerOptions = document.querySelector("#answerOptions");

const quetsionIndex = Math.floor(Math.random()*questions.length);

question.textContent = questions[quetsionIndex].question;


for (let i= 0; i < questions[quetsionIndex].options.length; i++) {
    const li = document.createElement("li");
    li.id = `option ${i}`
    li.textContent = questions[quetsionIndex].options[i];
    answerOptions.appendChild(li)
} 


