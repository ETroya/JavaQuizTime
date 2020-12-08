var name;
var names =[];
var highScores=[];
var timer;
var seconds;
var answerTimer; 
var answerSeconds =1;
var score;
var finalScore;
var questions;
var wrongAnswers;
var rightAnswer;
var question = document.querySelector (".question");
var rightAnswer =document.querySelector(".rightAnswer");
var wrongAnswers =document.querySelector(".wrongAnswer");
var time = document.querySelector(".timer");
var start = document.querySelector("#startButton");

//Questions for the exam//
let questions = [
    {
    question:"Inside which HTML element do we put the JavaScript?",
    rightAnswer:"<script>",
    wrongAnswers:["java", "Java.index", "scripting.index"],

},
{
    question:"Which of the following would not create a varible",
    rightAnswer: "function",
    wrongAnswers: ["const","let","var"],
},
{
    question:"Where is the correct place to insert a JavaScript?",
    rightAnswer: "Both the <head> section and the <body> section are correct", 
    wrongAnswers: ["The <body> section","The <head> section"],
},
{
    question:"What is the correct syntax for referring to an external script called xxx.js?",
    rightAnswer:"<script name=”xxx.js”>", 
    wrongAnswers: ["<script href=”xxx.js”>","<script href=”xxx.js”>"],
},
{
    question:"The external JavaScript file must contain the <script> tag",
    rightAnswer:"False",
    wrongAnswers: "True",
},
{
    question:"How do you write HelloWorld in an alert box?",
    rightAnswer:"alert(Hello World”)",
    wrongAnswers:["msgBox(“Hello World”);", "msg Box((Hello world”);","alertBox(“Hello World);"],
},
{
    question:"How do you create a function in JavaScript?",
    rightAnswer:"Function myFunction ()",
    wrongAnswers: ["Function:myFuncation()","Function= myFunction()"],
},
{
    question:"How do you call a function named: myFunction?",
    rightAnswer: "myFunction()",
    wrongAnswers: "call myFunction", "call function myFunction()"
},
{
    question:"What is the correct way to write a JavaScript array?",
    rightAnswer:"var colors = ["red","green", "blue"],
    wrongAnswers: "var colors = ""red", "green", "blue" ", "var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")" ,"var colors = (1:"red", 2:"green", 3:"blue")",
},
{
    question:"Which event occurs when the user clicks on an HTML element?",
    rightAnswer: "onclick",
    wrongAnswers: "onmouseover", "onmouseclick", "onchange",
},
]

// Adding Time//
rightAnswer.addEventListener ("click" ,function(){
answer.textContent = "You got this!"
seconds= seconds + 10;
score = score + 10;
questions();
}

// Decrease in time
wrongAnswers.addEventListener ("click", function(){
answer.textContent ="I dont think that was right"
seconds= seconds -10;
question();
}

function startQuiz() {
    start.addEventListener("click", function(){
        questions();