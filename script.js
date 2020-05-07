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
        option1:  "Call Style Section", 
        option2:  "never never never", 
        option3:  "Cascading Style Sheet",
        option4:  "None of the Above", 
        correct:     "2"
    },
    {
        question: "i hate fustration?",

        option1:  "call me the beast", 
        option2:  "Cannot Style Stylish", 
        option3:  "Cascading Style Sheet",
        option4:  "None of the Above", 
        correct:    "2"
    }
];

startButton.addEventListener("click", startGame);

//Function to start Game
function startGame(){
    startButton.classList.add("hide");
   questionContainer.classList.remove("hide");
   scoreBtn.classList.remove("hide");
   nextButton.classList.remove("hide");
   setNextQuestion(countQuestion);
   }

   //Variables declarations
var lastQuestionIndex = questions.length - 1;
var  currentQuestion = 0;
var score = 0;
var totalQuestions = questions.length;

function  setNextQuestion(questionIndex){
    var questionIndex = questions[currentQuestion];
    question.innerHTML = "Question: " + questionIndex.question;
    choiceA.innerHTML = questionIndex.choiceA;
    choiceB.innerHTML = questionIndex.choiceB;
    choiceC.innerHTML = questionIndex.choiceC;
    choiceD.innerHTML = questionIndex.choiceD;

}//Function that set the questions