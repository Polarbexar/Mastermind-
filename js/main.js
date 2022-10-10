
// /*----- constants -----*/
codeOptions  = [document.getElementById('option-1').innerText, document.getElementById('option-2').innerText,
   document.getElementById('option-3').innerText, document.getElementById('option-4').innerText, 
   document.getElementById('option-5').innerText, document.getElementById('option-6').innerText];

/*----- state variables -----*/
let board;
let turn;
let secretCode;
let button;
// /*----- cached elements  -----*/
const turnPow = document.querySelector('h1');
const options = document.querySelectorAll('.option');
const enterBtn = document.getElementById('rtn');
const replayBtn = document.getElementById('plyAgn');
const boardEls = document.querySelectorAll('divs');

// // /*----- event listeners -----*/
document.getElementById('Choices').addEventListener('click', handleChoice);
// document.getElementById('rtn').addEventListener('click', handleCheck);
document.getElementById('plyAgn').addEventListener('click', init);

// /*----- functions -----*/
init ();

function init() {
    board = [document.getElementById('answer-1').innerText = null, document.getElementById('answer-2'), document.getElementById('answer-3'), document.getElementById('answer-4')];
    turn = 1;
    winner = null;
    getSecretCode()
    render();

};
function render() {
    // renderBoard();
    // renderMessage();
    renderReplay();
}

// // generate secret code order
function getSecretCode() {
    secretCode = [];
  for (let i=0; i<4; i++){
    secretCode.push(codeOptions[Math.floor(Math.random() * 5)]);
}
console.log(secretCode); 
}


// // handle clicks (3)
function handleChoice(evt) {
   const button = evt.target.innerText;
   document.getElementById('answer-1').innerText = button;
   if (document.getElementById('answer-1').innerText == button)
   return;
}
//    document.getElementById('answer-1').innerText = button;
// console.log(button)
//     if ( ||
//         winner)
//     return;

// function renderBoard() {
//     board.forEach(function(idx) {
//       const cellEl = document.getElementById(`answer-${idx}`);
//       cellEl.css.innerHTML = button;
//     });

// function getWinner() {
//     if ()
// }
    // - show selected options

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
}
//     // - re-init on replay
    



// Ice-box:
// Play music
// Play video on win/lose
// opening message of rules/theme situatio