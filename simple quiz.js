const quesion = [ 
    {
        quesion:"Which is the largest animal in the world ?",
        answers : [
            { text: "Shark", correct : false},
            { text: "Blue whale", correct: true},
            { text: "Elephant", correct : false},
            { text: "Giraffe", correct : false},
        ]
    },

    {
        quesion:"Which is the smallest animal in the list ?",
        answers : [
            { text: "Ant", correct : true},
            { text: "Blue whale", correct: false},
            { text: "Elephant", correct : false},
            { text: "Giraffe", correct : false},
        ]
    },

    {
        quesion:"Which is the smallest continent in the world ?",
        answers : [
            { text: "Asia", correct : false},
            { text: "Australia", correct: true},
            { text: "Atlantic", correct : false},
            { text: "Africa", correct : false},
        ]
    },

    {
        quesion:"Which is the largest  country in the world ?",
        answers : [
            { text: "Nigeria", correct : false},
            { text: "Russia", correct: true},
            { text: "America", correct : false},
            { text: "India", correct : false},
        ]
    },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currrentQuestionIndex = 0;
let score = 0;

 function startQuiz(){
    currrentQuestionIndex =0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
 }

 function showQuestion(){
    resetState();
    let currrentQuestion = quesion[currrentQuestionIndex];
    let quesionNo = currrentQuestionIndex + 1;
    questionElement.innerHTML = quesionNo + "." + currrentQuestion.quesion;

    currrentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
 }

function resetState(){
    nextButton.style.display ="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct ==="true"){
            button.classList.add("correct");
        }
    button.disabled = true; 
    });
    nextButton.style.display = "block";
}
function  showScore(){
    resetState();
    questionElement.innerHTML = `you scored ${score} out of ${quesion.length}`;
    nextButton.innerHTML = "PLay Again" ;
    nextButton.style.display ="block";
}


 
function  handleNextButton(){
    currrentQuestionIndex++;
    if(currrentQuestionIndex < quesion.length) {
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", () =>{
    if(currrentQuestionIndex< quesion.length){
        handleNextButton();
    } else{  
        startQuiz;
    }
})
 startQuiz();




