// a function that randomly return either rock,paper or scissors

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
          return win; // return statement can return a variable within a scope of a function(){}
     }
     
     else if (computer === "rock" && player === "scissors" || computer === "paper" && player === "rock" ||computer === "scissors" && player === "paper" )  {
        return lose;
    } 
    
    else if (player === computer) { 
        return draw;
    }
}
 //define win , lose or draw (global variable}         
    const win = "Player won the round"; 
    const lose = "Computer won the round";
    const draw = "Draw";

// data score(global variable)
    let playScore = 0;
    let compScore = 0;
    let drawScore = 0; 
//let roundScore = playScore+ compScore+drawScore; by placing it here it will not capture the changes because let is use a keyword used to declare block scoped variable
// meaning the score variable will not change until the function game(){} is called

// function that will play 5 times with aid of function playRound(){...}
    function playGame() { 
// create a loop
    for (let i = 0; i < 5; i++) { 
      let result = playRound();
        console.log(result);
    
    // increasing the score variable based on who won the round    
    if (result === win) { 
        playScore++;
    }   

    else if (result === lose) {
            compScore++;
    } 

    else if (result === draw) {
            drawScore++;}
    }
    
    // if statement that determines who won the game based on score variables
    if (playScore > compScore) { 
           return "Player wins"; 
    }
    
    else if (playScore  === compScore) {
            return "Nobody wins";
    }else {
        return "Computer wins";
    }
}
//console.log(playGame());//to play the game
    console.log("Your final score is " + playScore + " " + "wins" + " " + compScore + " " + "loses" + " " + drawScore +" " + "draw");// declaring the scores
// final score
    let roundScore = playScore+ compScore+drawScore;
// declaring how many rounds
    console.log("Total rounds" + " " + roundScore + " " + "times.");




    