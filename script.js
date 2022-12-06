'use strict';

let x = Math.floor(Math.random() * 20) + 1;

let message = document.querySelector('.message');
let score = document.querySelector('.score');
let high;

document.querySelector('.check').addEventListener('click', dofun);

document.querySelector('.again').addEventListener('click', () => {
  message.textContent = 'Start guessing...';
  x = Math.floor(Math.random() * 20) + 1;
  score.textContent = '20';

  document.querySelector('.highscore').textContent = high > 0 ? high : '0';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = null;
});

function dofun() {
  const guessTxt = Number(document.querySelector('.guess').value);

  if (score.textContent > 1) {
    if (!guessTxt) {
      message.textContent = 'No number!';
    } else if (guessTxt > x) {
      message.textContent = 'Too High';
      reducescore();
    } else if (guessTxt < x) {
      message.textContent = 'Too Low';
      reducescore();
    } else {
      message.textContent = 'correct number';
      high =
        Number(score.textContent) >
        Number(document.querySelector('.highscore').textContent)
          ? score.textContent
          : high;
      document.querySelector('.highscore').textContent = high;
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').textContent = x;
      document.querySelector('.number').style.width = '30rem';
      x = 0;
    }
  } else {
    message.textContent = 'You lose';
  }
}

function reducescore() {
  score.textContent--;
}
