//create a function that will get a random computer choice
    function computerChoice () {
        const compChoice = ['pyro','hydro','dendro'];
        const randomChoice = compChoice[Math.floor(Math.random() * compChoice.length)];

        return randomChoice;    
        
    }

// function with two parameters that will play a 1 round of rps
    let playerLife = 0;
    let computerLife = 0;    
    function playRound (player) {
        computer = computerChoice();

        if (player === computer) {
            document.querySelector('.results').textContent = 'draw';
        }
        else if (player === 'pyro' && computer === 'dendro') {
            playerLife++;
            document.querySelector('.results').textContent = 'win';
        }
        else if (player === 'hydro' && computer === 'pyro') {
            playerLife++;
            document.querySelector('.results').textContent = 'win';
        }
        else if (player === 'dendro' && computer === 'hydro') {
            playerLife++;
            document.querySelector('.results').textContent = 'win';
        }else {
            computerLife++;
            document.querySelector('.results').textContent = 'lose';
        }
        compColor();   
    }
 
//parent node
    const container = document.querySelector('.game-container');
// player node
   const computerContainer = document.querySelector('.computer-container'); 
// creating result nodes
    const resultsDiv = document.createElement('div');
    resultsDiv.setAttribute('class', 'results');
    container.appendChild(resultsDiv); 
// game results nodes
    const gameResults = document.createElement('div');
    gameResults.setAttribute('class', 'game-results');
    container.appendChild(gameResults);
// reset button nodes
    const gameReset = document.createElement('div');
    gameReset.setAttribute('class','reset-button')
    container.insertBefore(gameReset,computerContainer );
    const resetImg = document.createElement('img');
    resetImg.src = "./img/pokeball.png";
    gameReset.appendChild(resetImg);
// player button nodes
    const pyro = document.querySelector('.pyro');    
    const hydro = document.querySelector('.hydro');   
    const dendro = document.querySelector('.dendro');
// player event listener
    pyro.addEventListener('click', mouseClick);   
    hydro.addEventListener('click', mouseClick);  
    dendro.addEventListener('click', mouseClick);
// computer button nodes
    compPyro = document.querySelector('.comp-pyro');
    compHydro = document.querySelector('.comp-hydro');
    compDendro = document.querySelector('.comp-dendro');
// computer event listener
   compPyro.addEventListener('transitionend', removeTransition);
   compHydro.addEventListener('transitionend', removeTransition);
   compDendro.addEventListener('transitionend', removeTransition);

// reset button event listener
    gameReset.addEventListener('click', (e) => {
        resetBtn(e);
    })     
// function that disable buttons when reach 0
    function disableBtn () {
        if (playerLife === 3 || computerLife === 3) {
            pyro.classList.toggle('disabled');
            hydro.classList.toggle('disabled');
            dendro.classList.toggle('disabled');
        }
    }
    
// check score to disable buttons
    function checkWin () {
        if (playerLife === 3) {
            disableBtn();
            document.querySelector('.game-results').textContent = 'PLAYER WINS';  
        }
        else if (computerLife === 3) {
            disableBtn();
            document.querySelector('.game-results').textContent = 'COMPUTER WINS';  
        } else {
            document.querySelector('.game-results').textContent = 'GAME DRAW';  
        }
    }     

// create a function to reset a game
   function resetBtn (e) {
        playerLife = 0;
        computerLife = 0;

        if (playerLife === 0 && computerLife === 0) {
            const userPoke = document.querySelector('.user-poke');
            const compPoke = document.querySelector('.computer-poke');
            userPoke.textContent = '';
            compPoke.textContent = '';
            pyro.classList.remove('disabled');
            hydro.classList.remove('disabled');
            dendro.classList.remove('disabled');
            const results = document.querySelector('.results');
            const gameResults = document.querySelector('.game-results');
            results.textContent = '';
            gameResults.textContent = '';

            console.log(e.target);
        }
   }

// write a function to put other functions in eventlistener
function mouseClick (e) {
    player = e.target.className
    playRound(player);
    checkWin();
    addPoke ();
    playerColor(e);
   // console.log(e.target)
}
// add pokeballs
    function addPoke () {
        const userPoke = document.querySelector('.user-poke')
        const compPoke = document.querySelector('.computer-poke');
        const img = document.createElement('img');
        img.src = "./img/pokeball.png";

        if (document.querySelector('.results').textContent === 'win') {
            userPoke.appendChild(img);
        }
        if (document.querySelector('.results').textContent === 'lose') {
            compPoke.appendChild(img);
        } 
    }
// computer choice color
    function compColor () {
        if (computer === 'pyro') {
            compPyro.classList.toggle('allPick');
        }
        if (computer === 'hydro') {
            compHydro.classList.toggle('allPick');
        }
        if (computer === 'dendro') {
            compDendro.classList.toggle('allPick');
        }
    }   
// function to remove computer color each round
    function removeTransition () {
        compPyro.classList.remove('allPick');
        compHydro.classList.remove('allPick');
        compDendro.classList.remove('allPick');
    }   
// player choice transition 
    function playerColor (e) {
       e.target.classList.toggle('allPick');
    }
    function playerRemove (e) {
        e.target.classList.remove('allPick');
    }
    const allBtns = document.querySelectorAll('.pyro, .hydro, .dendro');   
    allBtns.forEach(btns => btns.addEventListener('transitionend',playerRemove));
