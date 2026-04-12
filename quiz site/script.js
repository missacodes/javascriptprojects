
let currentQuestion = 0
let score = 0
function checkAnswer (answerIndex)
{
    if (answerIndex === questions[currentQuestion].correct){
        score = score+1
        document.getElementById("score-box").innerHTML = "Score: " +score
    }
}
function nextQuestion(answerIndex) {
    checkAnswer(answerIndex)
    if (currentQuestion >= questions.length-1){
        document.getElementById("quiz").innerHTML = "<p id=''<b>Quiz complete! <br> The Score Is: </b>" +(score)

    }
    else {
        currentQuestion = currentQuestion + 1
        document.getElementById("questionBox").innerHTML = questions[currentQuestion].question
        for (let i = 0; i < 4; i++) {
            document.getElementById("abc" + i).innerHTML = questions[currentQuestion].answers[i]
        }
    }
}
const questions = [
    {
        question: "<b>What is 5+8 equal to</b>",
        answers: ["11", "16", "13", "14"],
        correct: 2
    },
    {
        question: "<b>What is 7+19 equal to</b>",
        answers: ["21", "26", "33", "28"],
        correct: 3
    },
    {
        question: "<b>What is 12+8 equal to</b>",
        answers: ["20", "18", "22", "24"],
        correct: 0
    }
]

document.getElementById("questionBox").innerHTML = questions[currentQuestion].question
for (let i=0; i<4; i++){
    document.getElementById("abc" +i).innerHTML = questions[currentQuestion].answers[i]
}
document.getElementById("score-box").innerHTML = "Score: "
