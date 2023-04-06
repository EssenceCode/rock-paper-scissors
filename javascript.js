// create a function that will get a random computer choice

// make a function for computer random choice
function computerChoice () { 
   const compChoice = ['pyro','hydro','dendro'];  
   const randomChoice = compChoice[Math.floor(Math.random() * compChoice.length)];
   
   return randomChoice;       
  
}

// function for selecting choice
function playRound (player, computer) {
  if (playerScore === 3 ) {
      disableBtn();
      document.querySelector('.game-result').textContent = 'PLAYER WINS';
     //reset();
 }   
  else if (computerScore === 3) {
      disableBtn();  
      document.querySelector('.game-result').textContent = 'COMPUTER WINS';
     //reset();
 }
  else if (playerScore === 3 && computerScore === 3 ) {
      document.querySelector('.game-result').textContent = 'DRAW';
     disableBtn();
     //reset();
 }
  
  if (player === "pyro" && computer === "dendro" || player === "hydro" && computer === "pyro" || player === "dendro" && computer === "hydro") {
      playerScore++;
      document.querySelector('.round-result').textContent = 'you win';
      document.querySelector('.player-score').textContent = `${playerScore}`;
   }
   else if (computer === "pyro" && player === "dendro" || computer === "hydro" && player === "pyro" || computer === "dendro" && player === "hydro") {
      computerScore++;
      document.querySelector('.round-result').textContent = 'you lose';
      document.querySelector('.computer-score').textContent = `${computerScore}`;
   }
 // else if (player === computer) {
 //  document.querySelector('.round-result').textContent = 'it\'s draw ';
 //  } 
}

// score variable
let playerScore = 0;
let computerScore = 0;


// button nodes and event listener
const pyro = document.querySelector('.pyro');
pyro.addEventListener('click', () => {
   playRound('pyro', computerChoice());
   score();
});
const hydro = document.querySelector('.hydro');
hydro.addEventListener('click', () => {
   playRound('hydro', computerChoice());
   score();
});
const dendro = document.querySelector('.dendro');
dendro.addEventListener('click', () => {
   playRound('hydro', computerChoice());
   score();
});
const resetBtn = document.querySelector('.reset-button');
resetBtn.addEventListener('click', () => {
   reset();
})
// function that will display the score
function score () {
   document.querySelector('.player-score').textContent = `${playerScore}`;
   document.querySelector('.computer-score').textContent = `${computerScore}`;
}

// create a function to disable the buttons when the winner is announced
function disableBtn () {
   let arrNodes = document.querySelectorAll('#btn-rps');
   for(let i = 0; i < arrNodes.length; i++) {
      arrNodes[i].disabled = true;
   }
}

function reset() {
  //
   computerScore = 0;
   document.querySelector('.computer-score').textContent = `${computerScore}`;
   
   playerScore = 0;
   document.querySelector('.player-score').textContent = `${playerScore}`;
   document.querySelector('.game-result').textContent = '';
   let arrNodes = document.querySelectorAll('#btn-rps');
   for(let i = 0; i < arrNodes.length; i++) {
      arrNodes[i].disabled = false;
   }
  
 }