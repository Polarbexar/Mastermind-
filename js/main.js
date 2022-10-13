// /*----- constants -----*/
codeOptions = {
   '0' : 'white rabbit Obj/',
   '1' :'-access main program grid',
   '2' : '%git.push**',
   '3' :  'pod2 security=>/',
   '4' : 'SEI/9/26${}',
   '5' : 'access/security/17-',
};

/*----- state variables -----*/
let turn;
let winner; 
let secretCode;
let choice;
let currentDiv;
let playerGuess;
let feedbackArray;

// /*----- cached elements  -----*/
const turnPow = document.querySelector('h1');
const enterBtn = document.getElementById('rtn');
const replayBtn = document.getElementById('plyAgn');
const answer0El = document.getElementById('answer-0');
const answer1El = document.getElementById('answer-1');
const answer2El = document.getElementById('answer-2');
const answer3El = document.getElementById('answer-3');
const allAnswers = document.getElementById('Choices');
const fadeEl = document.getElementById('compscreen');
const endMessage = document.getElementById('instructions');

// // /*----- event listeners -----*/
document.getElementById('Choices').addEventListener('click', handleChoice);
document.getElementById('rtn').addEventListener('click', handleCheck);
document.getElementById('plyAgn').addEventListener('click', init);
document.getElementById('answerGrid').addEventListener('click', updateDiv)

// /*----- functions -----*/
init ();

function init() {
    turn = 1;
    winner = false;
    playerGuess = ['', '', '', ''];
    currentDiv = 0;
    choice = 0;
    getSecretCode();
    render();
};
function updateDiv(evt) {
    currentDiv = evt.target.id[7];
    console.log(evt.target.id[7]);
}

function handleChoice(evt) {
    playerGuess[currentDiv] = evt.target.id[7];
    console.log(evt.target.id[7], playerGuess);
    render()
}

function handleCheck() {
    if (playerGuess.includes('')) return;
    winner = getWinner();
    if (!winner) setNextTurn();
    render();
}

function setNextTurn() {
    turn++;
    feedbackArray.forEach(function(val, idx) {
        let div = document.getElementById(`answer-${idx}`)
        div.style.color = val;
        setTimeout(() => {
            let div = document.getElementById(`answer-${idx}`)
            div.innerText= '';
          }, 5000);
    }) 
}

function render() {
    updateDivs();
    renderMessage();
    renderEndGame();
}

function updateDivs() {
    playerGuess.forEach(function(num, idx) {
    let currentDiv =  document.getElementById(`answer-${idx}`)
    if (num === '') {
        currentDiv.innerText = '';
    } else {
        currentDiv.innerText = codeOptions[num];
    }
    });
}

function getSecretCode() {
    secretCode = [];
    for (let i=0; i<4; i++){
        secretCode.push(Math.floor(Math.random() * 6));
    }
    console.log(secretCode); 
}

function getWinner() {
    let playerCopy = playerGuess.map(val => val)
    let codeCopy = secretCode.map(val => val)
   feedbackArray = ['', '', '', ''];
   //Check for correct code in correct spot
   playerCopy.forEach(function(val, idx) {
    if (codeCopy[idx] === parseInt(val)) {
        feedbackArray[idx] = 'green';
        playerCopy[idx] = 7;
        codeCopy[idx] = 8;
    }
   });
   //Check for correct code in wrong spot
   playerCopy.forEach(function(val, idx) {
       if (codeCopy.includes(parseInt(val))) {
           feedbackArray[idx] = 'yellow';
           codeCopy[codeCopy.indexOf(parseInt(val))] = 8;
        }
    }); 

   feedbackArray.forEach(function(val, idx) {
    console.log(val)
       if (val === '') {
           feedbackArray[idx] = 'purple';
           codeCopy[codeCopy.indexOf(parseInt(val))] = 8;
        }
    }); 
    console.log(feedbackArray)
    return feedbackArray.every((val) => val === 'green')
}


function renderRestart() {
    setTimeout(() => {
    replayBtn.style.visibility = 'visible';
    
    
    }, 12000);
} 

function renderFade() {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            fadeEl.style.display = 'none';
        }
        fadeEl.style.opacity = op;
        fadeEl.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.2;
    }, 1000);
}


function renderMessage() { 
    if (winner === true) {
        turnPow.innerText = "Power Restored!";
        turnPow.style.css = 'blue';
        endMessage.innerText = '"Clever Girl!" Great job cracking the code and saving the park. Speaking of, we need a new programmer. Interested?'
    } else if (turn === 1) {
        turnPow.innerText = '99% Power';
        turnPow.style.color = 'blue';
    } else if (turn === 2) {
        turnPow.innerText = "75% Power";
    } else if (turn === 3) {
        turnPow.innerText = "50% Power";
        turnPow.style.color = 'yellow';
    } else if (turn === 4) {
        turnPow.innerText = "25% Power";
        turnPow.style.color = 'red';
    } else { (turn === 5) 
        turnPow.innerText = "Shutting Down";
        endMessage.innerText = '"I hate this hacker crap!" Your mother weeps for your intelligence. You could have saved everyone. But, hey, everyone has a bad day every now and then.........This will, uh, probably be your last though';
        renderFade();
        renderRestart()
    }
}

function renderEndGame() {
    // replayBtn.style.visibility = 'hidden';
    allAnswers.style.visibility = turn == 5 || winner ? 'hidden' : 'visible';
    enterBtn.style.visibility = turn == 5 || winner ? 'hidden' : 'visible';
    answerGrid.style.visibility = turn == 5 || winner ? 'hidden' : 'visible';
}
