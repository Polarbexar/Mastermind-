// Previous Code Array
// codeOptions  = [document.getElementById('option-1').innerText, document.getElementById('option-2').innerText,
//    document.getElementById('option-3').innerText, document.getElementById('option-4').innerText, 
//    document.getElementById('option-5').innerText, document.getElementById('option-6').innerText];

// /*----- constants -----*/
codeOptions = {
    'white rabbit Obj' : '0',
    '-access main program grid' : '1',
    '%git.push' : '2',
    'pod2 security=>/' : '3',
    'SEI/9/26${}' : '4',
    'access/security/17-' : '5',
};
// let result;
let secretCode;

function getSecretCode() {
    secretCode = [];
    for (let i=0; i<4; i++){
        secretCode.push(codeOptions[Math.floor(Math.random() * 6)]);
    }
    console.log(secretCode); 
}
// getSecretCode(codeOptions, 4);

// function getSecretCode(sourceArray, neededElements) {
//     let secretCode = [];
//     for (let i = 0; i < neededElements; i++) {
//         secretCode.push(sourceArray[Math.floor(Math.random()*sourceArray.length)]);
//     }
//     return secretCode;
    
// }


// const getRnd = (a, n) => new Array(n).fill(null).map(() => a[Math.floor(Math.random() * a.length)]);


// const random_code = Math.floor(Math.random() * 4);
// let randomObject = codeOptions2[Math.floor(Math.random() * 4)];
/*----- state variables -----*/
let board;
let turn;
let button;
let winner; 

// /*----- cached elements  -----*/
const turnPow = document.querySelector('h1');
const enterBtn = document.getElementById('rtn');
const replayBtn = document.getElementById('plyAgn');
const answer1El = document.getElementById('answer-1');
const answer2El = document.getElementById('answer-2');
const answer3El = document.getElementById('answer-3');
const answer4El = document.getElementById('answer-4');
const allAnswers = document.getElementById('Choices');

// // /*----- event listeners -----*/
document.getElementById('Choices').addEventListener('click', handleChoice);
document.getElementById('rtn').addEventListener('click', handleCheck);
document.getElementById('plyAgn').addEventListener('click', init);

// /*----- functions -----*/
init ();

function init() {
    turn = 1;
    winner = false;
    getSecretCode()
    render();
};
// handle clicks (3)
function handleChoice(evt) {
    button = evt.target.id.replace('option-','');
    console.log(button);
    render()
}
// function renderBoard() {
//     board.forEach(function(sqVal, idx) {
//       const cellEl = document.getElementById.innerText(`${idx}`);
//       cellEl.style.backgroundColor = players[sqVal];
//     });
//   }



function handleCheck() {
    turn++;
    colorCheck();
    getWinner();
    render();
}
function render() {
    renderBoard();
    renderMessage();
    renderReplay();
}
function renderBoard() {
    answer1El.innerText = button;
    
}
function getWinner() {
    if (answer1El.innerText === secretCode[0] && answer2El.innerText === secretCode[1] 
        && answer3El === secretCode[2] && answer4El === secretCode[3]) {
            return winner = true;
        }
}
function colorCheck() {
if (answer1El.innerText == secretCode[0]) {
    answer1El.style.color = 'green';
}
if (answer1El.innerText == secretCode[1] || secretCode[2] || secretCode[3]) {
    answer1El.style.color = 'yellow';
}
if (answer2El.innerText == secretCode[1]) {
    answer1El.style.color = 'green';
}
if (answer2El.innerText == secretCode[0] || secretCode[2] || secretCode[3]) {
    answer1El.style.color = 'yellow';
}
if (answer3El.innerText == secretCode[2]) {
    answer1El.style.color = 'green';
}
if (answer3El.innerText == secretCode[0] || secretCode[1] || secretCode[3]) {
    answer1El.style.color = 'yellow';
}
if (answer4El.innerText == secretCode[3]) {
    answer1El.style.color = 'green';
}
if (answer4El.innerText == secretCode[0] || secretCode[1] || secretCode[2]) {
    answer1El.style.color = 'yellow';
}
if (answer1El.innerText !== secretCode[0] || secretCode[1] || secretCode[2] || secretCode[3]) {
    answer1El.style.color = 'black'; 
}
if (answer2El.innerText !== secretCode[0] || secretCode[1] || secretCode[2] || secretCode[3]) {
    answer1El.style.color = 'black'; 
}
if (answer3El.innerText !== secretCode[0] || secretCode[1] || secretCode[2] || secretCode[3]) {
    answer1El.style.color = 'black'; 
}
if (answer4El.innerText !== secretCode[0] || secretCode[1] || secretCode[2] || secretCode[3]) {
    answer1El.style.color = 'black'; 
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
        turnPow.style.color = 'yellow';
    } else if (turn == 5) { 
        turnPow.innerText = "Shutting Down";
        turnPow.style.color = 'red';
    }
    
}
function renderReplay() {
    replayBtn.style.visibility = winner ? 'visible' : 'hidden';
    replayBtn.style.visibility = turn == 5 ? 'visible' : 'hidden';
    allAnswers.style.visibility = turn == 5 || winner ? 'hidden' : 'visible';
    enterBtn.style.visibility = turn == 5 || winner ? 'hidden' : 'visible';
}
    //     // - re-init on replay
    
    
    
    
    // Ice-box:
    // Play music
    // Play video on win/lose
    // opening message of rules/theme situatio
    
                
                
                
                
                
                
                
                
                // // generate secret code order - Previous getSecretCode
                
                
                















