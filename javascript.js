var pageTitle = document.getElementById("page-title");
var descriptionHome = document.getElementById("description-home");
var startButton = document.getElementById("start-button");
var highScoreLink = document.getElementById("highscore-link");
var timer;
var timeContainer = document.getElementById("timer-container");
var pokemonImg = document.getElementById("pokemon-image");
var questionContainer = document.getElementById("question-container");
var homePage = document.getElementById("homepage");
var questionIndex = 0;
var optionsIndex = -1;
var questionButtons = document.getElementsByClassName(".option-btn");
var optionButton1 = document.getElementById("option1");
var optionButton2 = document.getElementById("option2");
var optionButton3 = document.getElementById("option3");
var optionButton4 = document.getElementById("option4");
var timeLeft = 120;
var playerScore = 0;
var scorePage = document.getElementById("scorepage");
var submitNamebtn = document.getElementById("submitNameBtn");
var highScorePage = document.getElementById("highscorepage");
var playerName = document.getElementById("playerName");
var newPlayerName = playerName.value;
var playAgainBtn = document.getElementById("playAgainButton");

function showStartPage() {
homePage.classList.remove("hide");
}
function showGamePage() {
questionContainer.classList.remove("hide");
}
function showScorePage() {
scorePage.classList.remove("hide");
questionContainer.classList.add("hide");
}

function setScore(){
    playerScore = timeLeft;
}
function displayScore(){
    var scoreContent = document.getElementById("playerscore");
    scoreContent.textContent = playerScore;

}


function endGame(){
    timeContainer.classList.add("hide");
    setScore();
    displayScore();
    showScorePage();
   
}

function optionsBtnPressed(newIndex){
    optionsIndex = newIndex;
    checkRightOrWrong();
}

function checkRightOrWrong() {
    var correct = questions[questionIndex].options[optionsIndex].correct;
    if (correct){
        // Logic for right or wrong
    }else{
        timeLeft -= 10;
    }
    
    alert(correct);
    questionIndex++;
    
    if(questionIndex == questions.length){
        endGame();
    }
    setupGameRound();
    
}

var questions = [{
    pokemonImgSrc: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/143.png", 
    options: [
        {content: "snorlax", correct: true},
        {content: "suresnacks", correct: false},
        {content: "sumosmash", correct: false},
        {content: "sleepoi", correct: false}
    ]
},
{
    pokemonImgSrc: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/069.png", 
    options: [
        {content: "plantis", correct: false},
        {content: "plantra", correct: false},
        {content: "bellsprout", correct: true},
        {content: "bellsnort", correct: false}
    ]
},
{
    pokemonImgSrc: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/145.png", 
    options: [
        {content: "electro", correct: false},
        {content: "thunderhawk", correct: false},
        {content: "zipdas", correct: false},
        {content: "zapdos", correct: true}
    ]
},
{
    pokemonImgSrc: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/075.png", 
    options: [
        {content: "graveler", correct: true},
        {content: "geodude", correct: false},
        {content: "onix", correct: false},
        {content: "golem", correct: false}
    ]
},
{
    pokemonImgSrc: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/037.png", 
    options: [
        {content: "eevee", correct: true},
        {content: "sixtails", correct: false},
        {content: "sumosmash", correct: false},
        {content: "sleepoi", correct: false}
    ]
},
{
    pokemonImgSrc: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/084.png", 
    options: [
        {content: "snorlax", correct: true},
        {content: "suresnacks", correct: false},
        {content: "sumosmash", correct: false},
        {content: "sleepoi", correct: false}
    ]
},
{
    pokemonImgSrc: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/054.png", 
    options: [
        {content: "snorlax", correct: true},
        {content: "suresnacks", correct: false},
        {content: "sumosmash", correct: false},
        {content: "sleepoi", correct: false}
    ]
}
]
// Purpose is to set the ui before each round
function setupGameRound() {
    optionButton1.innerText = questions[questionIndex].options[0].content;
    optionButton2.innerText = questions[questionIndex].options[1].content;
    optionButton3.innerText = questions[questionIndex].options[2].content;
    optionButton4.innerText = questions[questionIndex].options[3].content;
    pokemonImg.src = questions[questionIndex].pokemonImgSrc;
    

    // if option[index].correct
    //     updateUi true or false
}

function updateTimer() {
    if(timeLeft <= 0){
        endGame(); 
    }
    document.getElementById("progressBar").value = 120 - timeLeft;
    timeLeft--;
    clearInterval(timeLeft);
    
}


startButton.addEventListener("click",function(){
    
    // start button must replace pageTitle with image of pokemon
    homePage.classList.add("hide");
    showGamePage();
    setupGameRound();
    timer = setInterval(updateTimer, 1000);
    
      
})

submitNamebtn.addEventListener("click",function(event) {
    event.preventDefault();
    checkForStoredData();
    addNewHighscore();
    highScorePage.classList.remove("hide");
    scorePage.classList.add("hide");
    saveData();
})

playAgainBtn.addEventListener("click", function(){
    location.reload();
    return false;
})
// need to store scores in local storage somehow
function saveData(){
    
    
}
function checkForStoredData(){
}

function addNewHighscore(){
   var ol = document.getElementById("highscore-list");
   var li = document.createElement("li");
   li.appendChild(document.createTextNode(playerName.value + " - " + playerScore));
   ol.appendChild(li);
}

// start button must also replace start button with a list of buttons that are the options
// buttons must have a class of wrong or right 
// if wrong button is pressed display wrong below the answers and reduce the time remaining 
// then replace picture and options with new picture and options that do the same thing 
// once time reaches zero or all answers have been answered display all done page that shows final score 
// below final score have a form box to submit the initials and store that data connected to the score as an object with the name of the initals attached to the local storage 
// add highscores page that lists all the high scores 
// have clear highscores button 
// back button that returns to home page 