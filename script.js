const rockSelector = document.querySelector(".rock-button");
const paperSelector = document.querySelector(".paper-button");
const scissorSelector = document.querySelector(".scissor-button"); 

const rockSwitch = document.getElementById(".rock-switch");
const paperSwitch = document.getElementById(".paper-switch");
const scissorSwitch = document.getElementById(".scissor-switch"); 

const rps = 0;

function playerSelection() {
    document.querySelector('#rock-button button').addEventListener('click', () => {
        rps++;
    })
    document.querySelector('#paper-button button').addEventListener('click', () => {
        rps + 2; 
    })
    document.querySelector('#scissor-button button').addEventListener('click', () => {
        rps + 3; 
    })
};
playerSelection();

if (rps = 1) {
    html.style.backgroundcolor = "purple";
}