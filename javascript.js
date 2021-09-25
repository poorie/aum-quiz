var pageTitle = document.getElementById("page-title");
var descriptionHome = document.getElementById("description-home");
var startButton = document.getElementById("start-button");
var highScoreLink = document.getElementById("highscore-link");
var timer = document.getElementById("timer");
var pokemonImg = document.getElementById("pokemon-image");
var options = document.getElementById("options-container");
var option1 = document.getElementById("option1");
var option2 = document.getElementById("option2");
var option3 = document.getElementById("option3");
var option4 = document.getElementById("option4");

function game() {
    pokemonImg.src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/143.png" ;
    options.style.display = "block";
    option1.innerText = "1.Snorlax";
    option2.innerText = "2.Smorecrax";
    option3.innerText = "3.Slarsmacks";
    option4.innerText = "4.Suresnacks";
    

    
}


startButton.addEventListener("click",function(){
    // start button must replace pageTitle with image of pokemon
    pageTitle.style.display = "none";
    descriptionHome.style.display = "none";
    startButton.style.display = "none";
   
    game();
})

// start button must also replace start button with a list of buttons that are the options
// buttons must have a class of wrong or right 
// if wrong button is pressed display wrong below the answers and reduce the time remaining 
// then replace picture and options with new picture and options that do the same thing 
// once time reaches zero or all answers have been answered display all done page that shows final score 
// below final score have a form box to submit the initials and store that data connected to the score as an object with the name of the initals attached to the local storage 
// add highscores page that lists all the high scores 
// have clear highscores button 
// back button that returns to home page 