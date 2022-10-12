// /*----- constants -----*/
codeOptions = {
   '0' : 'white rabbit Obj/',
   '1' :'-access main program grid',
   '2' : '%git.push**',
   '3' :  'pod2 security=>/',
   '4' : 'SEI/9/26${}',
   '5' : 'access/security/17-',
};
codeAnswers = ['', '', '' , '']

/*----- state variables -----*/
let turn;
let winner; 
let secretCode;
let choice;
let answer;

// /*----- cached elements  -----*/
const turnPow = document.querySelector('h1');
const enterBtn = document.getElementById('rtn');
const replayBtn = document.getElementById('plyAgn');
const answer0El = document.getElementById('answer-0');
const answer1El = document.getElementById('answer-1');
const answer2El = document.getElementById('answer-2');
const answer3El = document.getElementById('answer-3');
const allAnswers = document.getElementById('Choices');

// // /*----- event listeners -----*/
document.getElementById('Choices').addEventListener('click', handleChoice);
document.getElementById('rtn').addEventListener('click', handleCheck);
document.getElementById('plyAgn').addEventListener('click', init);
document.getElementById('answerGrid').addEventListener('click', handleAnswer)

// /*----- functions -----*/
init ();

function init() {
    turn = 1;
    winner = false;
    getSecretCode()
    render();
};
function handleAnswer(evt) {
    answer = evt.target
}

function handleChoice(evt) {
    choice = evt.target.innerText;
    answer.innerText = choice;
    render()
    }

function handleCheck() {
    turn++;
    buildArray()
    colorCheck1();
    colorCheck2();
    colorCheck3();
    colorCheck4();
    getWinner();
    render();
}
function render() {
    renderMessage();
    renderReplay();
}
function buildArray() {
    codeAnswers.unshift(answer0El.innerText);
    codeAnswers.splice(1, 2, answer1El.innerText);
    codeAnswers.splice(2, 1, answer2El.innerText);
    codeAnswers.splice(3, 1, answer3El.innerText)
    console.log(codeAnswers)
}
function getSecretCode() {
    secretCode = [];
    for (let i=0; i<4; i++){
        secretCode.push(codeOptions[Math.floor(Math.random() * 6)]);
    }
    console.log(secretCode); 
}

function getWinner() {
    // for (var i = 0; i < secretCode.length; i++)
    //     if (codeAnswers[i] === secretCode[i])
    //         return winner = true;
// secretCode.length === codeAnswers.length &&
// secretCode.every(function (element, index) {
//   // compare if the element matches in the same index
//   if (element === codeAnswers[index]);
//   return winner = true
// });
if (secretCode[0] === codeAnswers[0]
    && secretCode[1] === codeAnswers[1]
    && secretCode[2] === codeAnswers[2]
    && secretCode[3] === codeAnswers[3])
    return winner = true;
}

function colorCheck1() {
    if (codeAnswers[0] === secretCode[0]) {
    answer0El.style.color = 'green'
    }
    else if ( codeAnswers[0] === secretCode[1] || secretCode[2] || secretCode[3]) {
        answer0El.style.color = 'yellow'
    }
    else {(codeAnswers[0] !== secretCode[0] || secretCode[1] || secretCode[2] || secretCode[3]) 
        answer0El.style.color = 'purple'
    }
}
function colorCheck2() {
    if (codeAnswers[1] === secretCode[1]) {
    answer1El.style.color = 'green'
    }
    else if (codeAnswers[1] === secretCode[0] || secretCode[2] || secretCode[3]) {
        answer1El.style.color = 'yellow'
    }
    else if (codeAnswers[1] !== secretCode[0] || secretCode[1] || secretCode[2] || secretCode[3]) {
        answer1El.style.color = 'purple'
    }
} 
function colorCheck3() {
    if (codeAnswers[2] === secretCode[2]) {
    answer2El.style.color = 'green'
    }
    else if (codeAnswers[2] === secretCode[0] || secretCode[1] || secretCode[3]) {
    answer2El.style.color = 'yellow'
    }
    else if (codeAnswers[2] !== secretCode[0] || secretCode[1] || secretCode[2] || secretCode[3]) {
    answer2El.style.color = 'purple';
    }
} 
function colorCheck4() {
    if (codeAnswers[3] === secretCode[3]) {
        answer3El.style.color = 'green'
    }
    else if (codeAnswers[3] === secretCode[0] || secretCode[1] || secretCode[2]) {
        answer3El.style.color = 'yellow'
    }
    else {(codeAnswers[3] !== secretCode[0] || secretCode[1] || secretCode[2] || secretCode[3]) 
        answer3El.style.color = 'purple';
    }
}


function renderMessage() { 
    if (winner === true) {
        turnPow.innerText = "You Saved The Park";
        turnPow.style.css = 'blue';
    } else if (turn === 1) {
        turnPow.innerText = '99% Power';
        turnPow.style.color = 'blue';
    } else if (turn === 2) {
        turnPow.innerText = "75% Power";
    } else if (turn === 3) {
        turnPow.innerText = "50% Power";
    } else if (turn === 4) {
        turnPow.innerText = "25% Power";
        turnPow.style.color = 'yellow';
    } else if (turn === 5) { 
        turnPow.innerText = "Shutting Down";
        turnPow.style.color = 'red';
    }
    
}
function renderReplay() {
    replayBtn.style.visibility = turn === 5 ? 'visible' : 'hidden';
    allAnswers.style.visibility = turn == 5 || winner ? 'hidden' : 'visible';
    enterBtn.style.visibility = turn == 5 || winner ? 'hidden' : 'visible';
    answerGrid.style.visibility = turn == 5 || winner ? 'hidden' : 'visible';

}
