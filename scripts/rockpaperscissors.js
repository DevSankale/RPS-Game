
let score = JSON.parse(localStorage.getItem('score'))

if (!score) {
  score = {
    wins: 0,
    losses: 0,
    ties: 0

  };
}


updateScoreElement();

function playGame(playerMove) {

  const computerMove = pickComputerMove();
  let result = '';

  if (playerMove === 'scissors') {


    if (computerMove === 'rock') {
      result = 'Sorry you lose';

    } else if (computerMove === 'paper') {
      result = 'Congrats You win';

    } else if (computerMove === 'scissors') {
      result = 'Game is a tie';

    }


  } else if (playerMove === 'paper') {


    if (computerMove === 'rock') {
      result = 'Congrats You win';

    } else if (computerMove === 'paper') {
      result = 'Game is a tie';

    } else if (computerMove === 'scissors') {
      result = 'Sorry you lose';

    }

  } else if (playerMove === 'rock') {



    if (computerMove === 'rock') {
      result = 'Game is a tie';

    } else if (computerMove === 'paper') {
      result = 'Sorry you lose';

    } else if (computerMove === 'scissors') {
      result = 'Congrats You win';

    }


  }

  if (result === 'Congrats You win') {
    score.wins = score.wins + 1;
  } else if (result === 'Sorry you lose') {
    score.losses = score.losses + 1;
  } else if (result === 'Game is a tie') {
    score.ties = score.ties + 1;
  }



  localStorage.setItem('score', JSON.stringify(score));


  updateScoreElement();

  document.querySelector('.js-result').innerHTML = result;

  document.querySelector('.js-moves').innerHTML = ` you
  <img src="images/${playerMove}-emoji.png" class="move-icon">
  <img src="images/${computerMove}-emoji.png" class="move-icon">
  computer
</p>`;


}




function updateScoreElement() {
  document.querySelector('.js-score').innerHTML = `Wins : ${score.wins},Losses : ${score.losses} ,Ties : ${score.ties} `

};



function pickComputerMove() {

  const randomNumber = Math.random();
  let computerMove = '';

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'rock';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'paper';
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = 'scissors';
  }


  return computerMove;
};