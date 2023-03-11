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
  
// const win = "Player won the round"; // cant put this here because the game() {if(){}} can't reach it here because it is out of its scope
//  const lose = "Computer won the round";// so make it a global variable instead
// const draw = "Draw";//
  player = prompt('choose rock, paper or scissors').toLowerCase();
  computer = getComputerChoice();
   
     if (player === "rock" && computer === "scissors" || player === "paper" && computer === "rock" ||player === "scissors" && computer === "paper" ) {
        
        return win; // return statement can return a variable within a fucntion(){}
     }
     
     else if (computer === "rock" && player === "scissors" || computer === "paper" && player === "rock" ||computer === "scissors" && player === "paper" )  {
        return lose;
    
    } else if (player === computer) { 
        return draw;}
}
 //define win , lose or draw (global variable}         
const win = "Player won the round"; // a variable that declare the player won
const lose = "Computer won the round";//
const draw = "Draw";//

// create a score variable to store the results of each round (global variable)
let playScore = 0;
let compScore = 0;
let drawScore = 0; 
//let roundScore = playScore+ compScore+drawScore; by placing it here it will not capture the changes because let is use a keyword used to declare block scoped variable
// meaning the score variable will not change unti the fucntion game(){} is called

// function that will play 5 times
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
else if (result === draw) {// using increment(++) to increase TieScore if nobody won the round
drawScore++;}
}
    if (playScore > compScore) { // an if statement that determines who won (or draw) the game based on the score variables
           return "Player wins"; 
}
    else if (playScore  === compScore) {
            return "Nobody wins";
}  else {
   return "Computer wins";
}
}
//console.log(game());//to play the game
console.log("Your final score is " + playScore + " " + "wins" + " " + compScore + " " + "loses" + " " + drawScore +" " + "draw");// declaring the scores
let roundScore = playScore+ compScore+drawScore;
console.log("Total rounds" + " " + roundScore + " " + "times.");// declaring how many rounds