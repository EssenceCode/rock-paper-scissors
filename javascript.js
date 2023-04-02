// create a function that will get a random computer choice

function computerChoice () {
    
   const compChoice = ['rock','paper','scissors'];  
   const randomChoice = compChoice[Math.floor(Math.random() * compChoice.length)];
   
   return randomChoice;       
  
}


// create a function that will play 1 round of rps

  function playRound (player, computer) {
    
  
   if  (playerScore === 5 ) {
       document.getElementById("resultsF").textContent = 'Round:Player wins ';  
    }   
   else if (computerScore === 5) {
       document.getElementById("resultsF").textContent = 'Round:Computer wins '; 
    }
   else if (playerScore === 5 || computerScore === 5 ) {
       document.getElementById("resultsF").textContent = 'Round:Draw '; 
    }     

   if (player === "rock" && computer === "scissors" || player === "paper" && computer === "rock" || player === "scissors" && computer === "paper") {
      playerScore ++;
      document.getElementById("results").textContent = 'you win ' + playerScore;      
       
    }
   else if (computer === "rock" && player === "scissors" || computer === "paper" && player === "rock" || computer === "scissors" && player === "paper") {
       computerScore ++;
       document.getElementById("results").textContent = 'you lose '  + computerScore;       
    }
   else if (player === computer) {
       
       document.getElementById("results").textContent = 'it\'s draw ';        
    } 

}
 
// parent
const buttons = document.querySelector('#buttons');

// select the child nodes
  const rock = document.querySelector(".rock");
  const paper = document.querySelector(".paper");
  const scissors = document.querySelector(".scissors"); 
// add addeventlistener to the child nodes
  rock.addEventListener('click', () => {
     playRound("rock", computerChoice());  
   //console.log(playRound("rock", computerChoice()));   
 })  

 paper.addEventListener('click', () => {     
     playRound("paper", computerChoice());  
    //console.log(playRound("paper", computerChoice()));  
 })  

 scissors.addEventListener('click', () => {
     playRound("scissors", computerChoice());  
   //console.log(playRound("scissors", computerChoice()));  
       
 });  

// create a div to store results
  const results = document.createElement('div');
  results.setAttribute('id','results');
  buttons.appendChild(results);  
  const resultsF = document.createElement('div');
  resultsF.setAttribute('id','resultsF')
  buttons.appendChild(resultsF); 
// variable to store scores
  let playerScore = 0;
  let computerScore = 0;
//let drawScore = 0; don't need to count draw scores   