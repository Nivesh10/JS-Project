const quizQuestion=[
    {question:"Q1. Who is known as the 'Master Blaster' in cricket?",options:["Sachin","Brain Lara","MS Dhoni","Virat Kholi"],correctAnswer:"Sachin"},
    {question:"Q2. Which country won the ICC T20 inaugural World Cup?",options:["Pakistan","Australia","SouthAfrica","India"],correctAnswer:"India"},
    {question: "Q3. How many Ballon d'Or awards has Lionel Messi won as of 2022?",options: ["5", "6", "7", "8"],correctAnswer: "7"},
    {question: "Q4. Which country won the FIFA World Cup in 2022?",options: ["Germany", "Brazil", "France", "Argentina"],correctAnswer: "Argentina"},
]

let currentQuestionIndex =0;
let score =0;

function displayQuestion(){
    const questionElement=document.getElementById('question');
    const optionsElement=document.getElementById('options');

    const currentQuestion=quizQuestion[currentQuestionIndex];
    questionElement.textContent=currentQuestion.question;
    optionsElement.innerHTML='';

    currentQuestion.options.forEach(option =>{
        const button=document.createElement('button');
        button.classList.add('my-button');
        document.body.appendChild(button);
        button.textContent=option;
        button.addEventListener('click',() => checkAnswer(option));
        optionsElement.appendChild(button);
    })
}

function checkAnswer(selectedOption){
    const correctAnswer=quizQuestion[currentQuestionIndex].correctAnswer;
    if(selectedOption === correctAnswer){
        score++;
    }
    currentQuestionIndex++;
    if(currentQuestionIndex< quizQuestion.length) {
        displayQuestion();
    }
    else{
        showFinalResult();
    }
}

function showFinalResult(){
    const resultElement =document.getElementById('result');
    resultElement.textContent=`Your Final Score is ${score}/${quizQuestion.length}`;

}
displayQuestion();


