var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");
var options = document.getElementById("answer-buttons").children;
var question = document.getElementById("question");
var optionBtns = document.getElementsByClassName("optionBtn");
var startButton = document.getElementById("start-btn");
var nextButton = document.getElementById("next-btn");
var scoreBtn = document.getElementById("scoreBtn");
var questionContainer = document.getElementById("question-container");
var displayScore = document.getElementById("displayScore");

//Creating questions 
const questions = [
    {
        question: "What is the Meaning of CSS?",
        choiceA:  "Call Style Section", 
        choiceB:  "Cannot Style Stylish", 
        choiceC:  "Cascading Style Sheet",
        choiceD:  "None of the Above", 
        correct:   "C"
    },
    {
        
        question: "What is the Meaning of HTML?",
        choiceA:  "Hyper Text Markup Language", 
        choiceB:  "i am test", 
        choiceC:  "get out",
        choiceD:  "now", 
        correct:   "A"
    },
    {
        question: "What is it fustrating?",
        choiceA:  "Call Style Section", 
        choiceB:  "never never never", 
        choiceC:  "Cascading Style Sheet",
        choiceD:  "None of the Above", 
        correct:     "B"
    },
    {
        question: "i hate fustration?",
        choiceA:  "call me the beast", 
        choiceB:  "Cannot Style Stylish", 
        choiceC:  "Cascading Style Sheet",
        choiceD:  "None of the Above", 
        correct:    "D"
    },
    {
        question: "This is the Last Question?",
        choiceA:  "call me the beast", 
        choiceB:  "Cannot Style Stylish", 
        choiceC:  "Cascading Style Sheet",
        choiceD:  "None of the Above", 
        correct:    "A"
    }
];

//Variables declarations
var lastQuestionIndex = questions.length - 1;
var  currentQuestion = 0;
var score = 0;
var totalQuestions = questions.length;

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", chooseNextquestion)

function startGame(){
    startButton.classList.add("hide");
   questionContainer.classList.remove("hide");
   scoreBtn.classList.remove("hide");
   nextButton.classList.remove("hide");
   setNextQuestion();
   }
   
   function  setNextQuestion(){
       var questionIndex = questions[currentQuestion];
       question.innerHTML = "Question "+ (currentQuestion + 1)+":" +  questionIndex.question;
       choiceA.innerHTML = questionIndex.choiceA;
       choiceB.innerHTML = questionIndex.choiceB;
       choiceC.innerHTML = questionIndex.choiceC;
       choiceD.innerHTML = questionIndex.choiceD;
   
   }//Function that set the questions
   
 
 scoreCounter();

 function checkAnswer(answer){
    if(answer == questions[currentQuestion].correct){
            score++

            var newVar =  document.getElementById(answer);
            //Correct Answer
            newVar.classList.add("correct");
            
            scoreCounter();

            
            //change
            // answerIsCorrect();
            
    }else{
        var newVar =  document.getElementById(answer);
        // answerIsWrong();
        newVar.classList.add("wrong");
    }
    
    for(var i = 0; i<options.length; i++){
        
        options[i].classList.add('no-click');
    }
    
 }

 function scoreCounter(){
    //  for(var index = 0; index <= lastQuestionIndex; index++){
    //      scoreBtn.textContent = index;
    //  }
    scoreBtn.textContent = "Score " + score + "/ " + questions.length;
 }  


 function chooseNextquestion(){

    if(currentQuestion < lastQuestionIndex){

        currentQuestion++;
        setNextQuestion();        
    }else if(currentQuestion == lastQuestionIndex){
        quizOver();
    }

    document.querySelector(".btn1").classList.remove("wrong", "correct");
    document.querySelector(".btn2").classList.remove("wrong", "correct");
    document.querySelector(".btn3").classList.remove("wrong", "correct");
    document.querySelector(".btn4").classList.remove("wrong", "correct");
 }

function quizOver(){
    displayScore.classList.remove("hide");
    questionContainer.classList.add("hide")
    nextButton.classList.add("hide");
    scoreBtn.classList.add("hide");
    document.getElementById("endScoreContainer").textContent = "Your Score is " + score;
}
/* 
 function answerIsCorrect(){
     document.getElementById(currentQuestion).style.backgroundColor("green");
 }

 function answerIsWrong(){
    document.getElementById(currentQuestion).style.backgroundColor("red");
} */