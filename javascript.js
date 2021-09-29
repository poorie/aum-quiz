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
var optionsIndex = 0;
var questionButtons = document.getElementsByClassName(".option-btn");
var optionButton1 = document.getElementById("option1");
var optionButton2 = document.getElementById("option2");
var optionButton3 = document.getElementById("option3");
var optionButton4 = document.getElementById("option4");
var timeLeft = 120;
var playerScore = 0;
var scorePage = document.getElementById("scorepage");
var playAgainBtn = document.getElementById("playAgainButton");
var clearHighScoresBtn = document.getElementById("clearHighScoresBtn")
var hiscoreLink = document.getElementById("highscore-link");
var highscores = [];
var highScorePage = document.getElementById("highscorepage");
var submitHighscoreBtn = document.getElementById("submitHighscoreBtn");
var highScoreList = document.getElementById("highscore-list");
var highscoresInput = document.querySelector("#highscores-text");

// functions to show or hide pages
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
// sets and displays final score
function setScore() {
    playerScore = timeLeft;
}
function displayScore() {
    var scoreContent = document.getElementById("playerscore");
    scoreContent.textContent = playerScore;

}

// function to end the game 
function endGame() {
    console.log("times up")
    timeContainer.classList.add("hide");
    setScore();
    displayScore();
    showScorePage();

}
// function for options buttons 
function optionsBtnPressed(newIndex) {
    optionsIndex = newIndex;
    checkRightOrWrong();
}
// function to check if answer is right or wrong 
function checkRightOrWrong() {
    var correct = questions[questionIndex].options[optionsIndex].correct;
    // if option[index].correct
    //     updateUi true or false
    if (correct) {
        alert("Correct!")
    } else {
        timeLeft -= 10;
        alert("WRONG! 10 seconds have been removed from the timer!")
    }
    questionIndex++;

    if (questionIndex == questions.length) {
        endGame();
    }
    setupGameRound();

}

var questions = [{
    pokemonImgSrc: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/143.png",
    options: [
        { content: "snorlax", correct: true },
        { content: "suresnacks", correct: false },
        { content: "sumosmash", correct: false },
        { content: "sleepoi", correct: false }
    ]
},
{
    pokemonImgSrc: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/069.png",
    options: [
        { content: "plantis", correct: false },
        { content: "plantra", correct: false },
        { content: "bellsprout", correct: true },
        { content: "bellsnort", correct: false }
    ]
},
{
    pokemonImgSrc: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/145.png",
    options: [
        { content: "Electro", correct: false },
        { content: "Thunderhawk", correct: false },
        { content: "Zipdas", correct: false },
        { content: "Zapdos", correct: true }
    ]
},
{
    pokemonImgSrc: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/075.png",
    options: [
        { content: "Graveler", correct: true },
        { content: "Geodude", correct: false },
        { content: "Onix", correct: false },
        { content: "Golem", correct: false }
    ]
},
{
    pokemonImgSrc: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/037.png",
    options: [
        { content: "Eevee", correct: false },
        { content: "Vulpix", correct: true },
        { content: "Dedenne", correct: false },
        { content: "Foxer", correct: false }
    ]
},
{
    pokemonImgSrc: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/084.png",
    options: [
        { content: "Ostratch", correct: false },
        { content: "Duodra", correct: false },
        { content: "Sumosmash", correct: false },
        { content: "Doduo", correct: true }
    ]
},
{
    pokemonImgSrc: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/054.png",
    options: [
        { content: "Confusduck", correct: false },
        { content: "Psychquack", correct: false },
        { content: "Psyduck", correct: true },
        { content: "Telekinequack", correct: false }
    ]
},
{
    pokemonImgSrc: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/031.png",
    options: [
        { content: "Ryhorn", correct: false },
        { content: "Nidoking", correct: false },
        { content: "Nidoqueen", correct: true },
        { content: "Ryperior", correct: false }
    ]
},
{
    pokemonImgSrc: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/014.png",
    options: [
        { content: "Kakuna", correct: true },
        { content: "Metapod", correct: false },
        { content: "Caterpie", correct: false },
        { content: "Hakuna", correct: false }
    ]
},
{
    pokemonImgSrc: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/097.png",
    options: [
        { content: "Abra", correct: false },
        { content: "Slowbro", correct: false },
        { content: "Drowzee", correct: false },
        { content: "Hypno", correct: true }
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


}
// fucntion that controls the timer 
function updateTimer() {
    if (timeLeft <= 0) {
        if (timeLeft < 0) {
            timeLeft = 0;
        }
        clearInterval(timeLeft);
        endGame();
    } else {
        document.getElementById("progressBar").value = 120 - timeLeft;
        timeLeft--;
    }
    
}


startButton.addEventListener("click", function () {

    // start button must replace pageTitle with image of pokemon
    homePage.classList.add("hide");
    showGamePage();
    setupGameRound();
    timer = setInterval(updateTimer, 1000);


})

playAgainBtn.addEventListener("click", function () {
    location.reload();
    return false;
})
// need to store scores in local storage somehow


// renders items in a highscores list 
function renderHighscores() {
    // Clear highscoresList element and update highscoresCountSpan
    highScoreList.innerHTML = "";
    // Render a new li for each highscores
    for (var i = 0; i < highscores.length; i++) {
        var highscore = highscores[i];

        var li = document.createElement("li");
        li.textContent = highscore;
        li.setAttribute("data-index", i);
        highScoreList.appendChild(li);
    }
}

// Call the funtion on page load to check for stored data
function init() {
    // Get stored highscoress from localStorage
    var storedHighscores = JSON.parse(localStorage.getItem("highscores"));

    // If highscoress were retrieved from localStorage, update the highscoress array to it
    if (storedHighscores !== null) {
        highscores = storedHighscores;
    }

    renderHighscores();
}
// store highscores in local storage
function storeHighscores() {
    // Stringify and set key in localStorage to todos array
    localStorage.setItem("highscores", JSON.stringify(highscores));
}

// Add submit event to list
submitHighscoreBtn.addEventListener("click", function (event) {
    event.preventDefault();
    var highscoresText = highscoresInput.value.trim() + "  " + playerScore;

    if (highscoresText === "") {
        return;
    }

    // Add new highscoresText to highscores array, clear the input
    highscores.push(highscoresText);
    highscoresInput.value = "";

    // Store updated highscores in localStorage, re-render the list
    storeHighscores();
    renderHighscores();
    highScorePage.classList.remove("hide");
});
highScoreLink.addEventListener("click", function () {
    endGame();
    scorePage.classList.add("hide");
    homePage.classList.add("hide");
    highScorePage.classList.remove("hide");
});
clearHighScoresBtn.addEventListener("click", function () {
    localStorage.removeItem("highscores");
    highScoreList.innerHTML = "";
})
init()

 