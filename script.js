const rockSelector = document.querySelector(".rock-button");
const paperSelector = document.querySelector(".paper-button");
const scissorSelector = document.querySelector(".scissor-button"); 
const rockSwitch = document.getElementById(".rock-switch");
const paperSwitch = document.getElementById(".paper-switch");
const scissorSwitch = document.getElementById(".scissor-switch"); 

let selection = 0;

function playerSelection() {
    document.querySelector('.rock-button button').addEventListener('click', () => {
        selection === 1; 
        rockSelector();
    });
    document.querySelector('.paper-button button').addEventListener('click', () => {
        selection === 2;
        paperSelector();
    });
    document.querySelector('.scissor-button button').addEventListener('click', () => {
        selection === 3;
        scissorSelector();
    });
}
playerSelection();

function rockSelector() {
    alert('your slection is rock');
};

function paperSelector() {
    alert('your selection is paper');
};

function scissorSelector() {
    alert('your selection is scissors');
};

