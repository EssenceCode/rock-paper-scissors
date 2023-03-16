
    //Write a function that plays a single round of Rock Paper Scissors.
    function playRound(player,computer) {
        const choice = ["rock", "paper", "scissors"];
        let choiceRandom = choice[Math.floor(Math.random()*choice.length)];
        player = prompt("Choice").toLowerCase();
        computer = choiceRandom;
        console.log("PlayerChoice:" + player);
        console.log("ComputerChoice:" + computer);
   
       if (player === "rock" && computer === "scissors" || player === "paper" && computer === "rock" || player === "scissors" && computer === "paper") {
           playerScore++;      
           return win; 
         }   
       
       else if  (computer === "rock" && player === "scissors" || computer === "paper" && player === "rock" || computer === "scissors" && player === "paper") {
                 computerScore++;
                 return lose;
          }
   
       else if (player === computer) {
                drawScore++; 
                return draw;
          }   
     }
    
       
    //define win , lose or draw (global variable}         
       const win = "Outcome:Very nice! You won"; 
       const lose = "Outcome:Nice try! You lose";
       const draw = "Outcome:Draw";
   
   
   // score store(global variable)
      let playerScore = 0;
      let computerScore = 0;
      let drawScore = 0;
   
    // this will be updated,because iterator is a global variable
    
   // a function that will play Rock, Paper and Scissors 5 times with aid of playRound(...){...}
     function playGame() {
     // create a loop
     for ( let i = 0; i < 5; ++i) {
        let result = playRound(); 
        console.log(result);
   
       }
         // score comparison to determine who won the game or draw
         if (playerScore > computerScore) { // an if statement that determines who won (or draw) the game based on the score variables
              return "Player wins"; 
            }
         else if (playerScore  === computerScore) {
               return "Nobody wins";
            } else {
               return "Computer wins";
            }
         
       
     
   }
    
     
   console.log(playGame());
   console.log("Your final score is " + playerScore + " " + "wins" + " " + computerScore + " " + "loses" + " " + drawScore +" " + "draw");// declaring the scores
   //Declare the total rounds
   let roundTotal = playerScore+ computerScore + drawScore;
   console.log("Total rounds" + " " + roundTotal + " " + "times.");// declaring how many rounds
   