'use strict';

// between 1-20
let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // Support for not entering a number by the player
  if (!guess) {
    document.querySelector('.message').textContent =
      'Please input valid number !!';
  } else if (guess === number) {
    document.body.style.backgroundColor = '#60b347';
    document.querySelector('.message').textContent = 'Correct number 😄👍!!';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess > number) {
    if (score > 1) {
      document.body.style.backgroundColor = '#222';
      document.querySelector('.message').textContent = 'Too high 😪!!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.body.style.backgroundColor = '#222';
      document.querySelector('.message').textContent = 'You lost the game 😪!!';
      score = 0;
      document.querySelector('.score').textContent = score;
    }
  } else if (guess < number) {
    if (score > 1) {
      document.body.style.backgroundColor = '#222';
      document.querySelector('.message').textContent = 'Too low 😪!!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.body.style.backgroundColor = '#222';
      document.querySelector('.message').textContent = 'You lost the game 😪!!';
      score = 0;
      document.querySelector('.score').textContent = score;
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  
});
