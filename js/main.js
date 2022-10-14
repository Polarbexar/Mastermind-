codeOptions = {
   '0' : 'white rabbit Obj/',
   '1' :'-access main program grid',
   '2' : '%git.push**',
   '3' :  'pod2 security=>/',
   '4' : 'SEI/9/26${}',
   '5' : 'access/security/17-',
};

let turn;
let winner; 
let secretCode;
let currentDiv;
let playerGuess;
let feedbackArray;

const turnCount = document.querySelector('h1');
const enterBtn = document.getElementById('rtn');
const replayBtn = document.getElementById('plyAgn');
const allChoices = document.getElementById('Choices');
const fadeEl = document.getElementById('compscreen');
const MessageEl = document.getElementById('inspiration');
const splashEl = document.querySelector('.splash');

document.getElementById('Choices').addEventListener('click', handleChoice);
document.getElementById('rtn').addEventListener('click', handleCheck);
document.getElementById('plyAgn').addEventListener('click', init);
document.getElementById('answerGrid').addEventListener('click', updateDiv)
document.addEventListener('DOMContentLoaded', (e) => {
    setTimeout(() => {
        splashEl.classList.add('displayNone');
    }, 20000);
})

init ();

function init() {
    fadeEl.style.opacity = 1;
    turn = 1;
    winner = false;
    playerGuess = ['', '', '', ''];
    currentDiv = 0;
    getSecretCode();
    render();
}

function getSecretCode() {
    secretCode = [];
    for (let i=0; i<4; i++){
        secretCode.push(Math.floor(Math.random() * 6));
    }
}

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
        div.style.color = 'white';
        playerGuess = ['', '', '', '']
        }, 5000);
    }) 
}

function getWinner() {
    let playerCopy = playerGuess.map(val => val)
    let codeCopy = secretCode.map(val => val)
    feedbackArray = ['', '', '', ''];
    
    playerCopy.forEach(function(val, idx) {
    if (codeCopy[idx] === parseInt(val)) {
        feedbackArray[idx] = 'green';
        playerCopy[idx] = 7;
        codeCopy[idx] = 8;
    }
    });
    
    playerCopy.forEach(function(val, idx) {
        if (codeCopy.includes(parseInt(val))) {
            feedbackArray[idx] = 'yellow';
            codeCopy[codeCopy.indexOf(parseInt(val))] = 8;
        }
    }); 

    feedbackArray.forEach(function(val, idx) {
        if (val === '') {
            feedbackArray[idx] = 'black';
            codeCopy[codeCopy.indexOf(parseInt(val))] = 8;
        }
    }); 
    return feedbackArray.every((val) => val === 'green')
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

function renderMessage() { 
    if (winner === true) {
        turnCount.innerText = 'Power Restored!';
        turnCount.style.css = 'blue';
        MessageEl.innerText = '"Clever Girl!" Congrats on cracking the code and saving the park! On a related note, we need a new programmer. You want the job? We spare no expense!';
    } else if (turn === 1) {
        turnCount.innerText = '99% Power';
        turnCount.style.color = 'blue';
        MessageEl.innerText = 'Fences are still on-line';
    } else if (turn === 2) {
        turnCount.innerText = "75% Power";
        MessageEl.innerText = "Actually, now they're not. Must work faster.";
    } else if (turn === 3) {
        turnCount.innerText = "50% Power";
        turnCount.style.color = 'yellow';
        MessageEl.innerText = 'Hold on to your butts...';
    } else if (turn === 4) {
        turnCount.innerText = "25% Power";
        turnCount.style.color = 'red';
        MessageEl.innerText = 'Coffee maker is definitely dead. So is Fred. Is that handle turning or is it just in my head?';
    } else if (turn === 5) {
        turnCount.innerText = "1%";
        MessageEl.innerText = "Our lives are in your hands and you've got butterfingers?";
    } else { (turn === 6) 
        turnCount.innerText = "Shutting Down";
        MessageEl.innerText = '"I hate this hacker crap!" Welp, at least you tried. Everyone has a bad day every once in a while. But this will, uh, probably be your last.';
        renderFade();
        renderRestart()
    }
}

function renderFade() {
    let op = 1;  
    let timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            fadeEl.style.opacity = -1;
        }
        fadeEl.style.opacity = op;
        fadeEl.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.2;
    }, 1000);
}

function renderRestart() {
    setTimeout(() => {
        replayBtn.style.visibility = 'visible';
    }, 12000);
    replayBtn.style.opacity = 1;
} 

function renderEndGame() {
    replayBtn.style.visibility = winner ? 'visible' : 'hidden'; 
    allChoices.style.visibility = turn == 5 || winner ? 'hidden' : 'visible';
    enterBtn.style.visibility = turn == 5 || winner ? 'hidden' : 'visible';
    answerGrid.style.visibility = turn == 5 || winner ? 'hidden' : 'visible';
}
