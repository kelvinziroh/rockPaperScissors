const buttonsDiv = document.querySelector('.buttons');
const buttons = document.querySelectorAll('button');
const resultsDiv = document.querySelector('.results');
const para = document.createElement('p');
const playerDiv = document.querySelector('.player-score');
const computerDiv = document.querySelector('.computer-score');
let playerScore = 0;
let computerScore = 0;

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
    } else if (computerSelection === "rock" && playerSelection === "scissors" || 
               computerSelection === "paper" && playerSelection === "rock" || 
               computerSelection === "scissors" && playerSelection === "paper") {
        // When the computer wins
        return `You lose, ${computerSelection} beats ${playerSelection}`; 
    } else {
        // When the player wins
        return `You win, ${playerSelection} beats ${computerSelection}`;  
    }
}

function scoreCount(results){
    if (results.includes('You draw')) {
        playerScore += 1;
        computerScore += 1;
    } else if (results.includes('You lose')) {
        computerScore += 2;
    } else {
        playerScore += 2;
    }
}

function checkScore(playerScore, computerScore){
    if (playerScore >= 10 || computerScore >= 10) {
        buttons.forEach(button => button.setAttribute('disabled', 'True'));
        if (playerScore > computerScore) {
            para.textContent = `Congratulations, You won ${playerScore} to ${computerScore} against the computer!`;
        } else if (playerScore === computerScore){
            para.textContent = `Oops, That was closed. You tied at ${playerScore}!`;
        } else {
            para.textContent = `Sorry, better luck next time, The computer beat you ${computerScore} to ${playerScore}!`;
        }
    } 
}

// capture the user's selection and compare it to computer's upon selection
buttonsDiv.addEventListener('click', (e) => {
    if (e.target.nodeName == 'BUTTON') {
        let playerSelection = e.target.textContent.toLowerCase();
        let computerSelection = computerPlay();
        let results = playRound(computerSelection, playerSelection);
        scoreCount(results);
        playerDiv.textContent = `${playerScore}`;
        computerDiv.textContent = `${computerScore}`;
        para.textContent = results;
        resultsDiv.appendChild(para);
        checkScore(playerScore, computerScore);
    }
});