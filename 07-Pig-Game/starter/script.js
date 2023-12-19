'use strict';
let diceRoll = document.querySelector('.btn--roll');
let diceimage = document.querySelector('.dice');
let playerOne = document.querySelector('.player--0');
let playerTwo = document.querySelector('.player--1');
let playerOneInitialScore = document.getElementById('score--0');
let playerTwoInitialScore = document.getElementById('score--1');
let buttonHold=document.querySelector('.btn--hold');
let buttonNewGame=document.querySelector('.btn--new');

let scores=[0,0];
let currentScore = 0;
let activePlayer = 0;
let isplaying=true;
playerOneInitialScore.textContent = 0;
playerTwoInitialScore.textContent = 0;
diceimage.classList.add('hidden');

function switchPlayer(){
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    playerOne.classList.toggle('player--active')
    playerTwo.classList.toggle('player--active')
}

diceRoll.addEventListener('click', function () {
  if (isplaying) {
    // rolling a dice
    let number = Math.trunc(Math.random() * 6) + 1;
    // remove the hidden class of dice (to make dice visible onclick)
    diceimage.classList.remove('hidden');
    // updating the dice image
    diceimage.src = `dice-${number}.png`;
    // if number is not 1 update the current score else switch player
    if (number !== 1) {
      currentScore = currentScore + number;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});
// button hold functionality
buttonHold.addEventListener('click',function(e){
   if(isplaying){
    // updating the player score on clicking hold
     scores[activePlayer]+=currentScore;
     document.getElementById(`score--${activePlayer}`).textContent=scores[activePlayer];
    //  checking whether the score is greater than 100 and adding the player--winner class
     if(scores[activePlayer]>=100){
         document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
         document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
         isplaying=false   // to stop the game after winning
     }
     else{
         switchPlayer();
     }
   }
})
// resetting the game to initial state
buttonNewGame.addEventListener('click', function(){
    currentScore=0
    isplaying=true
    scores=[0,0]
    document.getElementById(`current--0`).textContent = 0;
    document.getElementById(`current--1`).textContent = 0;
    diceimage.classList.add('hidden');
    playerOneInitialScore.textContent=0;
    playerTwoInitialScore.textContent=0;
    document.querySelector('.player--0').classList.remove('player--winner')
    document.querySelector('.player--0').classList.add('player--active')
    document.querySelector('.player--1').classList.remove('player--winner')
})





