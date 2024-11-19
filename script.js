const rockSelector = document.querySelector(".rock-button");
const paperSelector = document.querySelector(".paper-button");
const scissorSelector = document.querySelector(".scissor-button"); 

const rockSwitch = document.getElementById(".rock-switch");
const paperSwitch = document.getElementById(".paper-switch");
const scissorSwitch = document.getElementById(".scissor-switch"); 

let rps = 0;

function playerSelection() {
    document.querySelector('#rock-button button').addEventListener('click', () => {
        rps = 1;
        console.log("rock");
    })
    document.querySelector('#paper-button button').addEventListener('click', () => {
        rps = 2; 
        console.log("paper");
    })
    document.querySelector('#scissor-button button').addEventListener('click', () => {
        rps = 3; 
        console.log("scissor");
    })
};
playerSelection();

if (rps = 1) {
    alert("your selection is rock!")
} else if (rps = 2) {
    alert("your selection is paper")
} else (rps = 3) {
    alert("your selection is scissors")
}
