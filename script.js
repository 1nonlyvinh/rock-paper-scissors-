// variables +query selectors + ids for buttons + onclick funcs
let rockSelector = document.querySelector("#rock-selector");
let paperSelector = document.querySelector("#paper-selector");
let scissorSelector = document.querySelector("#scissors-selector");
const resetButton = document.getElementById("reset-button");
console.log(resetButton); // Check if this logs the button element
const playerScoreElement = document.getElementById("player-score");
const computerScoreElement = document.getElementById("computer-score");

let playerSelection = 0;
let playerScore = 0;
let computerScore = 0;

// on click event listener, marks users choice + updates player selection variable based on which of the three they selected
function playerChoice() {

    // user picks rock
    rockSelector.addEventListener('click', () => {
        playerSelection = 1;
        alert('you chose rock!');
        computerSelection = computerChoice(); // Call the function to get the computer's choice
        console.log('Player Selection:', playerSelection);
        console.log('Computer Selection:', computerSelection);
        let winner = checkWinner(playerSelection, computerSelection);
        displayResults(playerSelection, computerSelection, winner);
        displayComputerChoice(playerSelection, computerSelection, winner)
        updateScores(winner);
    });

    //user picks paper

    paperSelector.addEventListener('click', () => {
        playerSelection = 2;
        alert('you chose paper!');
        computerSelection = computerChoice(); // Call the function to get the computer's choice
        console.log('Player Selection:', playerSelection);
        console.log('Computer Selection:', computerSelection);
        let winner = checkWinner(playerSelection, computerSelection);
        displayResults(playerSelection, computerSelection, winner);
        displayComputerChoice(playerSelection, computerSelection, winner)
        updateScores(winner);

    });

    // user picks scissor
    scissorSelector.addEventListener('click', () => {
        playerSelection = 3;
        alert('you chose scissors!');
        computerSelection = computerChoice(); // Call the function to get the computer's choice
        console.log('Player Selection:', playerSelection);
        console.log('Computer Selection:', computerSelection);
        let winner = checkWinner(playerSelection, computerSelection);
        displayResults(playerSelection, computerSelection, winner);
        displayComputerChoice(playerSelection, computerSelection, winner)
        updateScores(winner);

});

}
playerChoice();

// random function to make computer choice 1-3
function computerChoice() {
    return Math.floor(Math.random() * 3) + 1;
}


// function to check who won, returns diff messages based on win, loss, tie
function checkWinner(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log('Result: tie');
        return 'tie';
    }

    if (
        (playerSelection === 1 && computerSelection === 3) ||
        (playerSelection === 2 && computerSelection === 1) ||
        (playerSelection === 3 && computerSelection === 2)
    ) {
        console.log('Result: win');
        return 'win';
    } else {
        console.log('Result: lose');
        return 'lose';
    }

}

// translates the number to a string 
function choiceToString(choice) {
    if (choice === 1) return 'rock';
    if (choice === 2) return 'paper';
    if (choice === 3) return 'scissors';
}

// displays an alert based on if you won, lost, or tied w/ computer
function displayResults(playerChoice, computerChoice, winner) {
    if (winner === 'tie') {
        alert('tie!');
    } else if (winner === 'win') {
        alert('you win!');
    } else if (winner === 'lose'){
        alert('you lose!');
    }
}

// changes computer selection img based on random computer choice
function displayComputerChoice(playerSelection, computerSelection, winner) {
    const computerChoiceImage = document.getElementById('computerChoiceImage');
    computerChoiceImage.style.display = 'block';

    if (computerSelection === 1) {
        computerChoiceImage.src = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1bee66ba-7191-4b0c-9f0b-d43ea813cb5a/dfmtaji-296c0c8e-95e9-45e8-9c45-b24347ac99ab.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzFiZWU2NmJhLTcxOTEtNGIwYy05ZjBiLWQ0M2VhODEzY2I1YVwvZGZtdGFqaS0yOTZjMGM4ZS05NWU5LTQ1ZTgtOWM0NS1iMjQzNDdhYzk5YWIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.r4x0_sk7ZQxrfzVcpJL1pznzhnUs4vHBuPis8C5ulNs';
    } else if (computerSelection === 2) {
        computerChoiceImage.src = 'https://static.vecteezy.com/system/resources/thumbnails/018/743/042/small_2x/white-ripped-piece-of-paper-isolated-on-transparent-background-file-png.png';
    } else if (computerSelection === 3) {
        computerChoiceImage.src = 'https://clipart-library.com/new_gallery/907044_scissor-clip-art-png.png';
    }

}

// function 2 update scores based on who won (computer/user)
function updateScores(winner) {
    if (winner === 'win') {
        playerScore++;
    } else if (winner === 'lose') {
        computerScore++;
    }

    playerScoreElement.textContent = `Player: ${playerScore}`;
    computerScoreElement.textContent = `Computer: ${computerScore}`;
}

// event listener 2 reset player + computer scores 
resetButton.addEventListener("click", () => {
    alert('reset game!');
    playerScore = 0;
    computerScore = 0; 
    
    playerScoreElement.textContent = `Player: ${playerScore}`;
    computerScoreElement.textContent = `Computer: ${computerScore}`;

    console.log("Scores reset:", playerScore, computerScore);
});
function scissorSelector() {
    alert('your selection is scissors');
};

