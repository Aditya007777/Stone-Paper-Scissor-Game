// Selecting the button elements 
const btnStone = document.querySelector(".stone");
const btnPaper = document.querySelector(".paper");
const btnScissor = document.querySelector(".scissor");

// Selecting the player's choice and computer's choice h2 elements
const playerChoiceText = document.querySelector(".playerChoice");
const computerChoiceText = document.querySelector(".computerChoice");

// Selecting the result showing field i.e the h1 element
const result = document.querySelector(".result");

// Declaring the variable names for the functions
let playerChoice = "";
let computerChoice = "";
let randCompChoice = ['stone', 'paper', 'scissor'];

// Function to generate random computer's choices
function randcompgenerator() {
    let choice = randCompChoice[Math.floor(Math.random() * 3)];
    computerChoiceText.innerHTML = "Computer's choice: " + choice;
    return choice;
}

// Function of all winning/losing/draw possibilities
function winningLogic(player, computer) {
    if (player == computer) { 
        result.innerHTML = "DRAW";
    } else if ((player == 'stone' && computer == 'paper') || 
               (player == 'paper' && computer == 'scissor') || 
               (player == 'scissor' && computer == 'stone')) {
        result.innerHTML = "Computer wins";
    } else {
        result.innerHTML = "Player wins";
    }
}

// Adding event listeners to each button
btnStone.addEventListener('click', function() {
    playerChoice = 'stone';
    playerChoiceText.innerHTML = "Player's choice: " + playerChoice;
    computerChoice = randcompgenerator();
    winningLogic(playerChoice, computerChoice);
});

btnPaper.addEventListener('click', function() {
    playerChoice = 'paper';
    playerChoiceText.innerHTML = "Player's choice: " + playerChoice;
    computerChoice = randcompgenerator();
    winningLogic(playerChoice, computerChoice);
});

btnScissor.addEventListener('click', function() {
    playerChoice = 'scissor';
    playerChoiceText.innerHTML = "Player's choice: " + playerChoice;
    computerChoice = randcompgenerator();
    winningLogic(playerChoice, computerChoice);
});
