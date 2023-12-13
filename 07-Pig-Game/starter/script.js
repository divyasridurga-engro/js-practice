'use strict';
// on clicking a roll a dice =
// 1. generate a random number =
// 2. update the image =
//  3. if 1 switch player
// 5 if not add the current score

let diceRoll = document.querySelector('.btn--roll');
let diceimage= document.querySelector('.dice');
let playerOne= document.querySelector('.player--0');
let playerTwo= document.querySelector('.player--1');
let currentScore=0;
diceimage.classList.add('hidden')

diceRoll.addEventListener('click', function () {
    let number = Math.trunc(Math.random() * 6)+1;
    diceimage.classList.remove('hidden')
    // diceimage.setAttribute('src',`dice-${number}.png`);
    diceimage.src= `dice-${number}.png`;
    if(number !==1){
        // add to the current score
        currentScore= currentScore+number;
        document.querySelector('.current-score').textContent=currentScore;

    }else{
        // switch the user
    }
})
