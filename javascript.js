// create a function getComputerChoice that will randomly return either rock, paper or scissors.

function getComputerChoice() {
    let computerRandom = Math.floor(Math.random() * 3 ) + 1;
    if(computerRandom === 1) {
        return "rock"; 
    }
    else if(computerRandom === 2) {
        return "paper";
    }
    else if(computerRandom === 3) {
        return "scissors";
    }
}

//Write a function that plays a single round of Rock Paper Scissors.


function playRound(player,computer){
    
  player = prompt('choose rock, paper or scissors').toLowerCase();
  computer = getComputerChoice();
   
     if (player === "rock" && computer === "scissors" || player === "paper" && computer === "rock" ||player === "scissors" && computer === "paper" ) {
        
        return win;
     }
     
     else if (computer === "rock" && player === "scissors" || computer === "paper" && player === "rock" ||computer === "scissors" && player === "paper" )  {
        return lose;
    
    } else (player === computer) 
        return tie;
}
 //define win , lose or tie           
const win = "Player won the round"; // a variable that decla
const lose = "Computer won the round";//
const tie = "Draw";//

// create a score variable to store the results of each round
let playScore = 0;
let compScore = 0;
let drawScore = 0; 


function game() {
// create a loop
for (let i = 0; i < 5; i++) {
    let result = playRound();
    console.log(result);
    if (result === win) { // using increment(++) to increase playScore if won the round 
playScore++;
}
else if (result === lose) {// using increment(++) to increase compScore if won the round
compScore++;
} 
else if (result === tie) {// using increment(++) to increase TieScore if nobody won the round
drawScore++;}
}
    if (playScore > compScore) {
           return "Player wins"; 
}
    else if (playScore  === compScore) {
            return "Nobody wins";
}  else {
   return "Computer wins";
}
}
console.log(game());//to play the game
console.log("Your final score is " + playScore + " " + "wins" + " " + compScore + " " + "loses" + " " + drawScore +" " + "draw");// declaring the scores
let roundScore = playScore+ compScore+drawScore;
console.log("Total rounds" + " " + roundScore + " " + "times.");// declaring how many rounds