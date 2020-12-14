var name;
var names =[];
var highScores=[];
var timer;
var seconds;
var answerTimer; 
var answerSeconds =1;
var score;
var finalScore;
var wrongAnswers;
var rightAnswer;
var rightAnswer =document.querySelector(".rightAnswer");
var wrongAnswers =document.querySelector(".wrongAnswer");
var time = document.querySelector(".timer");
var start = document.querySelector("#startButton");
var question= document.querySelector("#question");
var div= document.querySelector("#second-box");
// var home=document.querySelector("#home");

//Questions for the exam//
var questions = [
    {
    question: "Inside which HTML element do we put the JavaScript?",
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
]

start.addEventListener("click", function() {
startgame()

})
var selection

div.addEventListener("click", function(e) {
console.log(e.target.value)
if (e.target.matches("button")) {
 selection = e.target.textContent 
}


})

function startgame(){
$("#home").hide()
$("#startButton").hide()
$("#HighScores").hide()
question.textContent= questions[0].question

var allAnswer = questions[0].wrongAnswers
allAnswer.push(questions[0].rightAnswer)


console.log (allAnswer)

for (let index = 0; index < allAnswer.length; index++) {
 var answerButton=$("<button>")
 $("#list-answers").append(answerButton)
 answerButton.text(allAnswer[index])
}

}






// // Adding Time//
// rightAnswer.addEventListener ("click" ,function(){
// answer.textContent = "You got this!"
// seconds= seconds + 10;
// score = score + 10;
// questions();
// }

// // Decrease in time
// wrongAnswers.addEventListener ("click", function(){
// answer.textContent ="I dont think that was right"
// seconds= seconds -10;
// question();
// }

//     () => {
//         start.addEventListener("click", function () {
//             questions();
//         });
//     }