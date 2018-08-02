/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores , roundScore , activePlayer, gamePlaying ;

//scores = [0,0];
//roundScore = 0;
//activePlayer = 0;
init();


// document.getElementById('current-0').textContent = 0;
// document.getElementById('current-1').textContent = 0;
// document.getElementById('score-0').textContent = 0;
// document.getElementById('score-1').textContent = 0;
// document.querySelector('.dice').style.display = 'none';

//var x = document.querySelector('#score-1').textContent;
//document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';


//function btn(){}
//btn();
//document.querySelector('.btn-roll').addEventListener('click',btn);
document.querySelector('.btn-roll').addEventListener('click',function(){    //Annonymous function
if(gamePlaying){                  //for the state of the condition i.e. on win this will not work
  //1. Random Number
  var dice = Math.floor(Math.random() * 6) + 1;

  //2. display the result
  var diceDom = document.querySelector('.dice');
  diceDom.style.display = 'block';
  diceDom.src = 'dice-' + dice + '.png';

  //3. update the roundScore if the dice is not rolled to one
    if(dice != 1){
      //Add the dice numbers
      roundScore += dice;
      document.querySelector('#current-' + activePlayer).textContent = roundScore;
    }else{

      nextPlayer();
    }
  }
});

document.querySelector('.btn-hold').addEventListener('click', function(){
  if(gamePlaying){
  //1. Add the score  current score to the Golbal scores
  scores[activePlayer] += roundScore;

  //2. change the UI
  document.querySelector('#score-'+ activePlayer).textContent = scores[activePlayer];
  //3.check if the player has won
  if( scores[activePlayer] >= 30){
    document.querySelector('#name-'+activePlayer).textContent = 'WINNER!';
      document.querySelector('.dice').style.display = 'none';
      document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
      document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
      gamePlaying = false;
  }else {
    //Next Player
    nextPlayer();
  }
}
});

function nextPlayer(){
  //second Player
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  roundScore = 0;

  document.getElementById('current-0').textContent = 0;
  document.getElementById('current-1').textContent = 0;

  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');

//      document.querySelector('.player-0-panel').classList.remove('active');
//      document.querySelector('.player-1-panel').classList.add('active');

  document.querySelector('.dice').style.display = 'none';
}
document.querySelector('.btn-new').addEventListener('click', init);
function init(){
  scores = [0,0];
  roundScore = 0;
  activePlayer = 0;

  gamePlaying = true;
  document.getElementById('current-0').textContent = 0;
  document.getElementById('current-1').textContent = 0;
  document.getElementById('score-0').textContent = 0;
  document.getElementById('score-1').textContent = 0;
  document.querySelector('.dice').style.display = 'none';
  document.getElementById('name-0').textContent = 'Player1';
  document.getElementById('name-1').textContent = 'Player2';
  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.add('active');

}
