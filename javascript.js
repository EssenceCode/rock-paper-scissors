// create a function that will get a random computer choice

function computerChoice () {
    
   const compChoice = ['rock','paper','scissors'];  
   const randomChoice = compChoice[Math.floor(Math.random() * compChoice.length)];
   
   return randomChoice;       
  
}


// create a function that will play 1 round of rps

  function playRound (player, computer) {
 
   if (player === "rock" && computer === "scissors" || player === "paper" && computer === "rock" || player === "scissors" && computer === "paper") {
       return "win"; 
    }
   else if (computer === "rock" && player === "scissors" || computer === "paper" && player === "rock" || computer === "scissors" && player === "paper") {
       return "lose"; 
    }
   else if (player === computer) {
       return "draw"; 
    } 

}
 

// select the child nodes
  const rock = document.querySelector(".rock");
  const paper = document.querySelector(".paper");
  const scissors = document.querySelector(".scissors"); 
// add addeventlistener to the child nodes
  rock.addEventListener('click', () => {
     console.log(playRound("rock", computerChoice()));  
   
 })  

 paper.addEventListener('click', () => {
      
 playRound("paper", computerChoice());  
    console.log(playRound("paper", computerChoice()));  
 })  

 scissors.addEventListener('click', () => {
     console.log(playRound("scissors", computerChoice()));  
       
 });  
    