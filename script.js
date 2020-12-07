// 
const question = document.querySelector("#question");
const question = Array.from(document.querySelectorAll("choice-text"));
const progressText = document.querySelector("#progressText");
const scoreText = document.querySelector("#score");
const progressBarFull = document.querySelector("#progressBarFull");

let currentQuestions = {};
let acceptingAnswers = true;
let score = 0 ;
let questionCounter =0;
let availableQuestions=[];

//Questions for the exam//

let questions = [
    {
    question:"Inside which HTML element do we put the JavaScript?",
    rightanswer:"<script>",
    wronganswers: ["<scripting.index>","<java>","<Java.index>","None of the above <bootstrap></bootstrap>"],   
},
{
    question:"Which of the following would not create a varible",
    rightanswer: "function"
    wronganswers: ["const","let","var"],
},
{
    question:"Where is the correct place to insert a JavaScript?",
    rightanswer: "Both the <head> section and the <body> section are correct", 
    wronganswers: ["The <body> section","The <head> section"],
},
{
    question:"What is the correct syntax for referring to an external script called "xxx.js"?",
    rightanswer:"<script name=”xxx.js”>", 
    wronganswers: ["<script href=”xxx.js”>","<script href=”xxx.js”>"],
},
{
    question:"The external JavaScript file must contain the <script> tag",
    rightanswer:"False",
    wronganswers: "True",
},
{
    question:"How do you write "HelloWorld" in an alert box?",
    rightanswer:"alert(Hello World”)"
    wronganswers:["msgBox(“Hello World”);", "msg Box((Hello world”);","alertBox(“Hello World);"],
},
{
    question:"How do you create a function in JavaScript?",
    rightanswer:"Function myFunction ()",
    wronganswers: ["Function:myFuncation()","Function= myFunction()"],
},
{
    question:
    rightanswer:
    wronganswers: 
},
{
    question:
    rightanswer:
    wronganswers: 
},
{
    question:
    rightanswer:
    wronganswers: 
},

]