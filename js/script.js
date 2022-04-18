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
    /*
     * 
     * Both draw if...
     * 
     * both have the same selection...both draw
     * 
     * computer wins if...
     * 
     * computer selected rock and user selected scissors
     * computer selected paper and user selected rock
     * computer selected scissors and user selected paper
     * 
     * user wins if...
     * 
     * computer selected paper and user selected scissors
     * computer selected scissors and user selected rock
     * computer selected rock and user selected paper
     * 
     */
// Output the winner

