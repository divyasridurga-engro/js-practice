'use strict';
// on clicking a roll a dice =
// 1. generate a random number =
// 2. update the image =
//  3. if 1 switch player
// 5 if not add the current score

let diceRoll = document.querySelector('.btn--roll');
let diceimage = document.querySelector('.dice');
let playerOne = document.querySelector('.player--0');
let playerTwo = document.querySelector('.player--1');
let playerCurrentScore1 = document.getElementById("current--0");
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
    if(isplaying){
        let number = Math.trunc(Math.random() * 6) + 1;
    diceimage.classList.remove('hidden')
    // diceimage.setAttribute('src',`dice-${number}.png`);
    diceimage.src = `dice-${number}.png`;
    if (number !== 1) {
        // add to the current score
        currentScore = currentScore + number;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    } else {
        // reset the current score
        switchPlayer()

    }
    }
})
buttonHold.addEventListener('click',function(e){
   if(isplaying){
     // add the current score to the total score
     scores[activePlayer]+=currentScore;
     document.getElementById(`score--${activePlayer}`).textContent=scores[activePlayer];
     
     // check if the score is greater than 100
     if(scores[activePlayer]>=10){
         document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
         document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
         isplaying=false
     }
     else{
         switchPlayer();
     }
   }
})

buttonNewGame.addEventListener('click', function(){
    currentScore=0
    isplaying=true
    document.getElementById(`current--0`).textContent = 0;
    document.getElementById(`current--1`).textContent = 0;
    diceimage.classList.add('hidden');
    document.getElementById(`score--0`).textContent=0;
    document.getElementById(`score--1`).textContent=0;
    document.querySelector('.player--0').classList.remove('player--winner')
    document.querySelector('.player--0').classList.add('player--active')
    document.querySelector('.player--1').classList.remove('player--winner')
})





