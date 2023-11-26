console.log("hello");
// questions to be displayed
const questions = [
    {
        question: "this is placeholder text for first question?",
        choices: [
            { text: "answer1", correct: true },
            { text: "answer1", correct: true },
            { text: "answer1", correct: true },
            { text: "answer1", correct: true },
        ]
    },
    {
        question: "this is placeholder text for first question?",
        choices: [
            { text: "answer1", correct: true },
            { text: "answer1", correct: true },
            { text: "answer1", correct: true },
            { text: "answer1", correct: true },
        ]
    },
    {
        question: "this is placeholder text for first question?",
        choices: [
            { text: "answer1", correct: true },
            { text: "answer1", correct: true },
            { text: "answer1", correct: true },
            { text: "answer1", correct: true },
        ]
    },
    {
        question: "this is placeholder text for first question?",
        choices: [
            { text: "answer1", correct: true },
            { text: "answer1", correct: true },
            { text: "answer1", correct: true },
            { text: "answer1", correct: true },
        ]
    },
    {
        question: "this is placeholder text for first question?",
        choices: [
            { text: "answer1", correct: true },
            { text: "answer1", correct: true },
            { text: "answer1", correct: true },
            { text: "answer1", correct: true },
        ]
    },
    {
        question: "this is placeholder text for first question?",
        choices: [
            { text: "answer1", correct: true },
            { text: "answer1", correct: true },
            { text: "answer1", correct: true },
            { text: "answer1", correct: true },
        ]
    },
    {
        question: "this is placeholder text for first question?",
        choices: [
            { text: "answer1", correct: true },
            { text: "answer1", correct: true },
            { text: "answer1", correct: true },
            { text: "answer1", correct: true },
        ]
    },
    {
        question: "this is placeholder text for first question?",
        choices: [
            { text: "answer1", correct: true },
            { text: "answer1", correct: true },
            { text: "answer1", correct: true },
            { text: "answer1", correct: true },
        ]
    },
    {
        question: "this is placeholder text for first question?",
        choices: [
            { text: "answer1", correct: true },
            { text: "answer1", correct: true },
            { text: "answer1", correct: true },
            { text: "answer1", correct: true },
        ]
    },
    {
        question: "this is placeholder text for first question?",
        choices: [
            { text: "answer1", correct: true },
            { text: "answer1", correct: true },
            { text: "answer1", correct: true },
            { text: "answer1", correct: true },
        ]
    },
    {
        question: "this is placeholder text for first question?",
        choices: [
            { text: "answer1", correct: true },
            { text: "answer1", correct: true },
            { text: "answer1", correct: true },
            { text: "answer1", correct: true },
        ]
    }
];

// assigned variables to html elements

const questionText = document.getElementById("questiondisplay");
const questionAnswer = document.getElementById("questionanswers");
const nextQuestion = document.getElementById("next-question");

// question number and score tracker

let questionNumber = 0;
let score = 0;

// function to load next question

function loadQuestion () {
clearQuestion ()
let presentQuestion =questions[questionNumber];
let questionNum = questionNumber + 1;
questionText.innerHTML = "Question " + questionNum + " / " + questions.length + " - " + presentQuestion.question;
presentQuestion.choices.forEach(answer => {
const button = document.createElement("button");
button.innerHTML = answer.text;
button.classList.add("answerbuttons");
questionAnswer.appendChild(button);
if(answer.correct){
button.dataset.correct = answer.correct
}
button.addEventListener("click", chooseAnswer);
});

}
// function to clear the previous question

function clearQuestion () {
nextQuestion.style.display = 'none';
while (questionAnswer.firstChild) {
questionAnswer.removeChild(questionAnswer.firstChild);
}

}

//function to choose answer
function chooseAnswer () {

}

//function to show scores at end of quiz
function scoreResults () {

}

// function to show next button after question is pressed
function displaybutton () {

}

loadQuestion ()
