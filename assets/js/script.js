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

    if (playerChoice === computerChoice) {
        return document.getElementById("messages").innerText = "It is a draw!";
    } else if (playerChoice === "Rock") {
        if (computerChoice === "Paper") {
            return document.getElementById("messages").innerText = "Paper covers rock. Computer Wins!";
        } else if (computerChoice === "Scissors") {
            return document.getElementById("messages").innerText = "Rock crushes scissors. Player Wins!";
        } else if (computerChoice === "Lizard") {
            return document.getElementById("messages").innerText = "Rock crushes Lizard. Player wins!";
        } else if (computerChoice === "Spock") {
            return document.getElementById("messages").innerText = "Spock vapozes rock. Computer wins!";
        }
    } else if (playerChoice === "Paper") {
        if (computerChoice === "Rock") {
            return document.getElementById("messages").innerText = "Paper covers rock. Player wins!";
        } else if (computerChoice === "Scissors") {
            return document.getElementById("messages").innerText = "Scissors cut paper. Computer wins!";
        } else if (computerChoice === "Lizard") {
            return document.getElementById("messages").innerText = "Lizard eats paper. Computer wins!";
        } else if (computerChoice === "Spock") {
            return document.getElementById("messages").innerText = "Paper disproves spock. Player wins!";
        } 
    } else if (playerChoice === "Scissors") {
        if (computerChoice === "Rock") {
            return document.getElementById("messages").innerText = "Rock crushes Scissors. Computer Wins!";
        } else if (computerChoice === "Paper") {
            return document.getElementById("messages").innerText = "Scissors cut paper. Player wins!";
        } else if (computerChoice === "Lizard") {
            return document.getElementById("messages").innerText = "Scissors decapitate lizard. Player wins!";
        } else if (computerChoice === "Spock") {
            return document.getElementById("messages").innerText = "Spock smashes scissors. Computer wins!";
        }
    } else if (playerChoice === "Lizard") {
        if (computerChoice === "Rock") {
            return document.getElementById("messages").innerText = "Rock crushes lizard. Computer wins!";
        } else if (computerChoice === "Paper") {
            return document.getElementById("messages").innerText = "Lizard eats paper. Player wins!";
        } else if (computerChoice === "Scissors") {
            return document.getElementById("messages").innerText = "Scissors decapitate lizard. Computer wins!";
        } else if (computerChoice === "Spock") {
            return document.getElementById("messages").innerText = "Lizard posions spock. Player wins!";
        }
    }

}