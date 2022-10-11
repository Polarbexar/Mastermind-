
// /*----- constants -----*/
codeOptions  = [document.getElementById('option-1').innerText, document.getElementById('option-2').innerText,
   document.getElementById('option-3').innerText, document.getElementById('option-4').innerText, 
   document.getElementById('option-5').innerText, document.getElementById('option-6').innerText];

/*----- state variables -----*/
let board;
let turn;
let secretCode;
let choices;
let button;
let winner; 
// /*----- cached elements  -----*/
const turnPow = document.querySelector('h1');
const enterBtn = document.getElementById('rtn');
const replayBtn = document.getElementById('plyAgn');
const answer1El = document.getElementById('answer-1')
const answer2El = document.getElementById('answer-2')
const answer3El = document.getElementById('answer-3')
const answer4El = document.getElementById('answer-4')
const allAnswers = document.getElementById('Choices')

// // /*----- event listeners -----*/
document.getElementById('Choices').addEventListener('click', handleChoice);
document.getElementById('rtn').addEventListener('click', handleCheck);
document.getElementById('plyAgn').addEventListener('click', init);

// /*----- functions -----*/
init ();

function init() {
    board = [0,0,0,0];
    turn = 1;
    winner = false;
    getSecretCode()
    render();

};
// handle clicks (3)
function handleChoice(evt) {
    choices = [];
    button = evt.target.innerText;
    // answer1El.innerText = button;
    render()
}
function handleCheck() {
    turn++;
    getWinner();
    render();
}
function render() {
    renderBoard();
    renderMessage();
    renderReplay();
}
function renderBoard() {
    choices = [];
    answer1El.innerText = button;
    choices.push[button]
}
function getWinner() {
    if (answer1El.innerText === secretCode[0] && answer2El.innerText === secretCode[1] 
        && answer3El === secretCode[2] && answer4El === secretCode[3]) {
        return winner = true;
    } else {
        return winner = false;
    }
}
function renderMessage() { 
    if (winner === true) {
    turnPow.innerText = "You Saved The Park";
    } else if (turn == 1) {
    turnPow.innerText = '99% Power';
    } else if (turn == 2) {
    turnPow.innerText = "75% Power";
    } else if (turn == 3) {
    turnPow.innerText = "50% Power";
    } else if (turn == 4) {
    turnPow.innerText = "25% Power";
    turnPow.innerText.color = 'yellow';

    } else if (turn == 5) { 
    turnPow.innerText = "Shutting Down";
    }

}

// - show selected options

// // generate secret code order
function getSecretCode() {
    secretCode = [];
    for (let i=0; i<4; i++){
        secretCode.push(codeOptions[Math.floor(Math.random() * 5)]);
    }
    console.log(secretCode); 
}

// } 
// function handleCheck() {
//     // - show correct/almost/no colors
//     // - Keep correct options in place.
//     // - clear wrong options
//     // - start next turn - based on winner, re-init
//     // - win logic

// function renderBoard() {
//     board.forEach(function(sqVal, idx) {
//         const answerEl = document.getElementById('Choices');
//         answerEl.innerText = 
//     });
// }
function renderReplay() {
    replayBtn.style.visibility = winner ? 'visible' : 'hidden';
    replayBtn.style.visibility = turn == 5 ? 'visible' : 'hidden';
    allAnswers.style.visibility = turn == 5 ? 'hidden' : 'visible';
    enterBtn.style.visibility = turn == 5 || winner ? 'hidden' : 'visible';
}
//     // - re-init on replay
    



// Ice-box:
// Play music
// Play video on win/lose
// opening message of rules/theme situatio