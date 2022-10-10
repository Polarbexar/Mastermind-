
// /*----- constants -----*/
codeOptions  = {
    '1': 'white rabbit Obj/',
    '2': '%git.push**',
    '3': 'pod2 security=>/',
    '4': 'SEI/9/26${}',
    '5': 'access/security/17-'
}

/*----- state variables -----*/
let board;
let turn;
let secretCode;

// /*----- cached elements  -----*/
turnPow = document.querySelector('h1');
options = document.getElementsByClassName('.answers');
enterBtn = document.getElementById('#rtn');
replayBtn = document.getElementById('#plyAgn');

// /*----- event listeners -----*/
// handle option click
// handle enter click
// handle replay click

// /*----- functions -----*/
// init
// generate secret code order
// handle clicks (3)
// - show selected options
// - Keep correct options in place.
// - show correct/almost/no colors
// - clear wrong options
// - start next turn - based on winner, re-init
// - win logic
// - re-init on replay


// Ice-box:
// Play music
// Play video on win/lose
// opening message of rules/theme situation
