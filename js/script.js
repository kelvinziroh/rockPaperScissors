// Create a function with an array for the math.random function to select from 
let computerPlay = function (){
    // Create choice array for computer to randomly select from
    const choiceArray = [
        "rock",
        "paper",
        "scissors"
    ];

    // Return random selection from the choiceArray
    return choiceArray[Math.floor(Math.random()*choiceArray.length)];
};

// Compare user input with the random selection from the computer
function playRound(computerSelection, playerSelection){
    if (computerSelection === playerSelection) {
        // When it's a draw
        return `You draw! You both selected ${computerSelection}!`; 
    } else if (computerSelection === "rock" && playerSelection === "scissors" || computerSelection === "paper" && playerSelection === "rock" || computerSelection === "scissors" && playerSelection === "paper"){
        // When the computer wins
        return `You lose, ${computerSelection} beats ${playerSelection}`; 
    } else {
        // When the player wins
        return `You win, ${playerSelection} beats ${computerSelection}`; 
    }
}

// Game function loops the game 5 times
function game(){
    // Intialize the computer and player score
    let computerScore = 0;
    let playerScore = 0;

    // Loop the game five times
    for (let count = 0; count < 5; count++){
        // Store computerPlay return value and get player input
        const computerSelection = computerPlay();
        const playerSelection = prompt("Please select one between Rock, Paper and Scissors:").toLowerCase();

        // Call the playRound function to compare the inputs and store the output in a variable
        let output = playRound(computerSelection, playerSelection);

        // Check the output to update the scores
        if (output === `You win, ${playerSelection} beats ${computerSelection}`) {
            playerScore += 2;
        } else if (output === `You lose, ${computerSelection} beats ${playerSelection}`) {
            computerScore += 2;
        } else {
            playerScore += 1;
            computerScore += 1;
        }
    }

    return (playerScore > computerScore) ? 
        `Congratulations, You won ${playerScore} to ${computerScore} against the computer!` : 
        `Sorry, better luck next time, The computer beat you ${computerScore} to ${playerScore}!`;
}

console.log(game());
