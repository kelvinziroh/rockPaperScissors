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

// Store computerPlay return value
const computerSelection = computerPlay();

// Get user input
const playerSelection = prompt("Please select one between Rock, Paper and Scissors:").toLowerCase();

// Compare user input with the random selection from the computer

if (computerSelection === playerSelection) {
    // When it's a draw
    console.log(`You draw! You both selected ${computerSelection}!`); 
} else if (computerSelection === "rock" && playerSelection === "scissors" || computerSelection === "paper" && playerSelection === "rock" || computerSelection === "scissors" && playerSelection === "paper"){
    // When the computer wins
    console.log(`You lose, ${computerSelection} beats ${playerSelection}`); 
} else {
    // When the player wins
    console.log(`You win, ${playerSelection} beats ${computerSelection}`); 
}
   
// Output the winner

