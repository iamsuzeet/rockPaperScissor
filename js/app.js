const choices = document.querySelectorAll('.choice');
const score = document.getElementById('score');
const result = document.getElementById('result');
const restart = document.getElementById('restart');
const modal = document.querySelector('.modal');
const scoreBoard = {
  player:0,
  computer:0
}

//Play game
function play(e){
  restart.style.display = 'inline-block';
  const playerChoice = e.target.id;
  const computerChoice = getComputerChoice();

  
  const winner = getWinner(playerChoice, computerChoice);
  

  displayModal(playerChoice,computerChoice,winner);

 

}

//Get computer choice
function getComputerChoice(){
  const rand = Math.random();
  if(rand < 0.34){
    return 'rock';
  } else if(rand <= 0.67){
    return 'paper';
  } else {
    return 'scissors';
  }
}

//get Game winner
function getWinner(pc, cc){
  if(pc === cc){
    return 'draw';
  } else if((pc === 'rock' && cc === 'paper') || 
            (pc === 'scissors' && cc === 'rock') ||
            (pc === 'paper' && cc === 'scissors')){
    return 'computer';
  } else{
    return 'player';
  }
}

//get modal 
function displayModal(playerChoice,computerChoice,winner){
  if(winner === 'computer'){
    scoreBoard.computer++;
    result.innerHTML = `<h1 class="text-lose">You                           Lose</h1>
                        <i class="fas fa-hand-${computerChoice} fa-10x"></i>
                        <p>Computer Chose ${computerChoice.charAt(0).toUpperCase()+ computerChoice.slice(1)}</p>
                        `;
  } else  if(winner === 'player'){
    scoreBoard.player++;
    result.innerHTML = `<h1 class="text-win">You                           Win</h1>
                        <i class="fas fa-hand-${playerChoice} fa-10x"></i>
                        <p>Computer Chose ${computerChoice.charAt(0).toUpperCase()+ computerChoice.slice(1)}</p>
                        `;
  } else{
    result.innerHTML = `<h1 class="text-win">Tie                          Game</h1>
                        <i class="fas fa-hand-${playerChoice} fa-10x"></i>
                        <p>Computer Chose ${computerChoice.charAt(0).toUpperCase()+ computerChoice.slice(1)}</p>
                        `;
  }
  score.innerHTML = `
                      <p>Player: ${scoreBoard.player}
                      <p>Computer: ${scoreBoard.computer}
                    `;

  //display block
  modal.style.display = 'block';
}

//restart game
function restartGame(){
  scoreBoard.player = 0;
  scoreBoard.computer = 0;
  score.innerHTML = `
  <p>Player: 0</p>
  <p>Computer: 0</p>
  `;
  restart.style.display = 'none';
}

//hide modal back
function clearModal(e){
  // console.log(e.target);
  if(e.target == modal){
    modal.style.display = 'none';
  }
}



//Event Listeners
choices.forEach(choice => {
  choice.addEventListener('click', play);
});

window.addEventListener('click', clearModal);

restart.addEventListener('click', restartGame);