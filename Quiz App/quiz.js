//stores the quiz data as an array of objects
const question = [
    {
        question: "Which is the largest animal in the World?",
        answers: [
            { text: "Shark", correct: false},
            { text: "Blue whale", correct: true},
            { text: "Elephant", correct: false},
            { text: "Giraffe", correct: false},
        ]
    }, 
    {
         question: "Which is the largest desert in the World?",
        answers: [
            {text: "Kalahari" , correct: false},
            {text: "Gobi" , correct: false},
            {text: "Sahara" , correct: false},
            {text: "Antarctica" , correct: true},
        ]
    },
    {
      question: "Which is the smallest continet in the World?",
        answers: [
            {text: "Asia", correct: false},
            {text: "Australia", correct: true},
            {text: "Arctic", correct: false},
            {text: "Africa", correct: false},
        ]  
    },
    {
      question: "Which animal is known as the 'Ship of the Desert'?",
        answers: [
            {text: "Shark", correct: false},
            {text: "Blue whale", correct: false},
            {text: "Camel", correct: true},
            {text: "Giraffe", correct: false},
        ]  
    }
];

//dom
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

//track the state of the quiz
let currentQuestionIndex = 0;
let score = 0;

//initializes or restarts the quiz
function startQuiz(){
    currentQuestionIndex = 0; 
    score = 0;
    nextButton.innerHTML = "Next"; 
    showQuestion(); //to display the first question
}


//display the current question and its answer options
function showQuestion(){
    resetState(); //Clear the previous answer and hise the "next" button
    let currentQuestion = question [currentQuestionIndex];//get the current ques from
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion. 
    question;//set the question text with numbered element

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button"); //creates a button for each answer
        button.innerHTML = answer.text; //sets the button text to answer text
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

//clears the previous ques state to prepare for the next ques
function resetState(){
    nextButton.style.display = "none"; // to hide the next button
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild); 
    }
}

//handles the user's answer
function selectAnswer(e){
    const selectedBtn = e.target; // gets the clickedd button from the event object
    const isCorrect = selectedBtn.dataset.correct === "true"; // check if the answer is correct
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");//highlights the correctt answer
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";//showing the next button
}

//displays the final score
function showScore(){
    resetState();
    questionElement.innerHTML = `You Scored ${score} out of ${question.
        length}!`;//shows the final score
        nextButton.innerHTML = "Play Again";//changes next button to play again 
        nextButton.style.display = "block";//showing the next button
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < question.length){
        showQuestion();
    }else{
        showScore()
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < question.length){
        handleNextButton();
    } else{
        startQuiz();
    }
})

startQuiz();