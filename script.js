'use strict';

// Display dice roll
const diceImages = ['imgs/dice-1.png', 'imgs/dice-2.png','imgs/dice-3.png','imgs/dice-4.png','imgs/dice-5.png','imgs/dice-6.png'];
const diceDisplay = document.querySelector('.dice');

// Starting coditions
diceDisplay.classList.add('hidden');
let diceRandom = 0;
let scoreCurrent = 0;
const scoreDisplay = document.querySelector('.current-score');

/* // Random dice
let diceRandom = Math.trunc(Math.random() * 6 + 1);
console.log(diceRandom) */



// Score current dice


/* // Show dice value
diceDisplay.src = diceImages[diceRandom - 1]; */

// Switch Player
const switchPlayer = function(){
    const player = document.querySelectorAll('.player');
    console.log(player[1]);
    const playerActive = document.querySelector('.player--active');

}

// Show score display
/* const scoreDisplay = document.querySelector('.current-score');
let score = 0;
scoreDisplay.textContent = score;
diceScore(); */

// Roll Dice Again

const btnDice = document.querySelector('.btn--roll');
btnDice.addEventListener('click', function(){
    diceRandom = Math.trunc(Math.random() * 6 + 1);
    console.log(diceRandom)
    diceDisplay.src = diceImages[diceRandom -1];
    diceScore();
});

const diceScore = function(){
    if(diceRandom === 1){
        switchPlayer();
    } else if(diceRandom > 1){
        scoreCurrent += diceRandom;
        scoreDisplay.textContent = scoreCurrent;
    }
}
