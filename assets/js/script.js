/**
 * Declare constants for the DOM elements
 * Declare the possible choices for the user
 */

const buttons = document.getElementsByClassName("control");
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
const playerImage = document.getElementById("player-image");
const computerImage = document.getElementById("computer-image");
const playerChoices = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
 
/**
 * Add event listener to all the buttons
 */ 

for (let button of buttons) {
    button.addEventListener("click", function () {
        let playerChoice = this.getAttribute("data-choice");
        playGame(playerChoice);
    })
}

/**
 * The main game function
 */ 

function playGame(playerChoice) {

    playerImage.src = `assets/images/${playerChoices[playerChoice]}.png`;
    playerImage.alt = playerChoices[playerChoice];

    let computerChoice = Math.floor(Math.random() * 5);

    computerImage.src = `assets/images/${playerChoices[computerChoice]}.png`
    computerImage.alt = playerChoices[playerChoice]

    let result = checkWinner(playerChoices[computerChoice], playerChoices[playerChoice])

    upadateScores(result);
}

/**
 * Check whether the player or the computer is the winner
 */

function checkWinner(computerChoice, playerChoice) {

    if (playerChoice === "Rock" && computerChoice === "Lizard" || computerChoice === "Scissors") {
        return [document.getElementById("messages").innerText = "Player Wins!"];
    } else if (playerChoice === "Paper" && computerChoice === "Rock" ||  computerChoice === "Spock") {
        return [document.getElementById("messages").innerText = "Player Wins!"]
    } else if (playerChoice === "Scissors" && computerChoice === "Paper" || computerChoice === "Lizard") {
        return [document.getElementById("messages").innerText = "Player Wins!"]
    } else if (playerChoice === "Lizard" && computerChoice === "Spock" || computerChoice === "Paper") {
        return [document.getElementById("messages").innerText = "Player Wins!"]
    } else if (playerChoice === "Spock" && computerChoice === "Scissors" || computerChoice === "Rock") {
        return [document.getElementById("messages").innerText = "Player Wins!"]
    } else if (computerChoice === "Rock" && playerChoice === "Lizard" || playerChoice === "Scissors") {
        return [document.getElementById("messages").innerText = "Computer Wins!"]
    } else if (computerChoice === "Paper" && playerChoice === "Rock" || playerChoice === "Spock") {
        return [document.getElementById("messages").innerText = "Computer Wins!"]
    } else if (computerChoice === "Scissors" && playerChoice === "Paper" || playerChoice === "Lizard") {
        return [document.getElementById("messages").innerText = "Computer Wins!"]
    } else if (computerChoice === "Lizard" && playerChoice === "Spock" || playerChoice === "Paper") {
        return [document.getElementById("messages").innerText = "Computer Wins!"]
    } else if (computerChoice === "Spock" && playerChoice === "Scissors" || playerChoice === "Rock") {
        return [document.getElementById("messages").innerText = "Computer Wins!"]
    } else {
        alert (`Unimplemnted Choice ${playerChoices}`);
        throw `Unimplemented Choice ${playerChoices}`;
    }

}