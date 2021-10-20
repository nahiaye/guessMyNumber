'use strict';
// between 1-20
let number = Math.floor(Math.random()*20) + 1
// document.querySelector('.number').textContent = number
let score = 20


document.querySelector('.check').addEventListener('click',function(){
    const guess = Number(document.querySelector('.guess').value)
    console.log(guess, typeof guess)

    // Support for not entering a number by the player
    if(!guess){
        document.querySelector('.message').textContent = 'Please input valid number !!'
    }
    else if(guess === number){
        document.body.style.backgroundColor = "#60b347";
        document.querySelector('.message').textContent = 'Correct number 😄👍!!'
    }
    else if(guess > number){
        if(score > 1){
            document.body.style.backgroundColor = "#222";
            document.querySelector('.message').textContent = 'Too high 😪!!'
            score--
            document.querySelector('.score').textContent = score
        }else{
            document.body.style.backgroundColor = "#222";
            document.querySelector('.message').textContent = 'You lost the game 😪!!'
            score = 0
            document.querySelector('.score').textContent = score
        }
    }
    else if(guess < number){
        if(score > 1){
            document.body.style.backgroundColor = "#222";
            document.querySelector('.message').textContent = 'Too low 😪!!'
            score--
            document.querySelector('.score').textContent = score
        }else{
            document.body.style.backgroundColor = "#222";
            document.querySelector('.message').textContent = 'You lost the game 😪!!'
            score = 0
            document.querySelector('.score').textContent = score
        }
    }
})
document.querySelector('.again').addEventListener('click',function(){
    window. location. reload();
})