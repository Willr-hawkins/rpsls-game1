/**
 * Declare constants for the DOM elements
 * Declare the possible choices for the user
 */

const buttons = document.getElementsByClassName("control");
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
const playerImage = document.getElementById("player-image");
const computerImage = document.getElementById("computer-image");
const restart = document.getElementById("restart");
const playerChoices = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
const message = document.getElementById("messages");

/**
 * Ensure the restart button is hidden during the game
 */
restart.style.visibility = "hidden"; 

/**
 * Add event listener to all the buttons
 */
for (let button of buttons) {
    button.addEventListener("click", function () {
        let playerChoice = this.getAttribute("data-choice");
        playGame(playerChoice);
    });
}

/**
 * The main game function
 */ 
function playGame(playerChoice) {

    playerImage.src = `assets/images/${playerChoices[playerChoice]}.png`;
    playerImage.alt = playerChoices[playerChoice];

    let computerChoice = Math.floor(Math.random() * 5);

    computerImage.src = `assets/images/${playerChoices[computerChoice]}.png`;
    computerImage.alt = playerChoices[playerChoice];
}


/**
 * Check whether the player or the computer is the winner
 */
function checkWinner(computerChoice, playerChoice) {

    if (playerChoice === computerChoice) {
        return message.innerText = "It is a draw!";
    } else if (playerChoice === "Rock") {
        if (computerChoice === "Paper") {
            incrementComputerScore();
            return message.innerText = "Paper covers rock. Computer Wins!";
        } else if (computerChoice === "Scissors") {
            incrementPlayerScore();
            return message.innerText = "Rock crushes scissors. Player Wins!";
        } else if (computerChoice === "Lizard") {
            incrementPlayerScore();
            return message.innerText = "Rock crushes Lizard. Player wins!";
        } else if (computerChoice === "Spock") {
            incrementComputerScore();
            return message.innerText = "Spock vapozes rock. Computer wins!";
        }
    } else if (playerChoice === "Paper") {
        if (computerChoice === "Rock") {
            incrementPlayerScore();
            return message.innerText = "Paper covers rock. Player wins!";
        } else if (computerChoice === "Scissors") {
            incrementComputerScore();
            return message.innerText = "Scissors cut paper. Computer wins!";
        } else if (computerChoice === "Lizard") {
            incrementComputerScore();
            return message.innerText = "Lizard eats paper. Computer wins!";
        } else if (computerChoice === "Spock") {
            incrementPlayerScore();
            return message.innerText = "Paper disproves spock. Player wins!";
        } 
    } else if (playerChoice === "Scissors") {
        if (computerChoice === "Rock") {
            incrementComputerScore();
            return message.innerText = "Rock crushes Scissors. Computer Wins!";
        } else if (computerChoice === "Paper") {
            incrementPlayerScore();
            return message.innerText = "Scissors cut paper. Player wins!";
        } else if (computerChoice === "Lizard") {
            incrementPlayerScore();
            return message.innerText = "Scissors decapitate lizard. Player wins!";
        } else if (computerChoice === "Spock") {
            incrementComputerScore();
            return message.innerText = "Spock smashes scissors. Computer wins!";
        }
    } else if (playerChoice === "Lizard") {
        if (computerChoice === "Rock") {
            incrementComputerScore();
            return message.innerText = "Rock crushes lizard. Computer wins!";
        } else if (computerChoice === "Paper") {
            incrementPlayerScore();
            return message.innerText = "Lizard eats paper. Player wins!";
        } else if (computerChoice === "Scissors") {
            incrementComputerScore();
            return message.innerText = "Scissors decapitate lizard. Computer wins!";
        } else if (computerChoice === "Spock") {
            incrementPlayerScore();
            return message.innerText = "Lizard posions spock. Player wins!";
        }
    } else if (playerChoice === "Spock") {
        if (computerChoice === "Rock") {
            incrementPlayerScore();
            return message.innerText = "Spock vaporizes rock. Player wins!";
        } else if (computerChoice === "Paper") {
            incrementComputerScore();
            return message.innerText = "Paper disproves spock. Computer wins!";
        } else if (computerChoice === "Scissors") {
            incrementPlayerScore();
            return message.innerText = "Spock smashes scissors. Player wins!";
        } else if (computerChoice === "Lizard") {
            incrementComputerScore();
            return message.innerText = "Lizard posions spock. Computer wins!";
        }
    }

}

/**
 * Get the current player score from the DOM and increment it by 1
 */
function incrementPlayerScore () {
    
    let oldScoreP = parseInt(playerScore.innerText);
    playerScore.innerText = ++oldScoreP;

    if (oldScoreP === 5) {
        endGame("Well Done! You are the winner.");
    }

}

/**
 * Get the current computer score from the DOM and increment it by 1
 */
function incrementComputerScore () {

    let oldScoreC = parseInt(computerScore.innerText);
    computerScore.innerText = ++oldScoreC;

    if (oldScoreC === 5) {
        endGame("Unlucky! The computer is the winner.");
    }

}

/**
 *  Show the restart button once the game ends
 */
function endGame(message) {
    const area = document.querySelector(".game-area");
    area.innerText = message;
    restart.style.visibility = "visible";
}