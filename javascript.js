
let rando;
let computerScore = 0;
let playerScore = 0;

const rockBtn = document.querySelector(".rockBtn");
const paperBtn = document.querySelector(".paperBtn");
const scissorBtn = document.querySelector(".scissorBtn");
const result = document.querySelector(".result")
const compSpan = document.querySelector(".computerScore");
const playrSpan = document.querySelector(".playerScore");
const winner = document.querySelector(".winner");
const body = document.querySelector("body");

rockBtn.addEventListener("click", () => {
    let playerSelection = 'Rock';
    let computerSelection = computerPlay();
    oneRound(computerSelection, playerSelection);
});

paperBtn.addEventListener("click", () => {
    let playerSelection = 'Paper';
    let computerSelection = computerPlay();
    oneRound(computerSelection, playerSelection);
});

scissorBtn.addEventListener("click", () => {
    let playerSelection = 'Scissor';
    let computerSelection = computerPlay();
    oneRound(computerSelection, playerSelection);
});

//function declaration for computer's item selection at random
function computerPlay(){
    rando = Math.floor(Math.random()*100);
    if(rando >=0 && rando < 33){
        return "Rock";
    }
    else if (rando >= 33 && rando < 66){
        return "Paper";
    }
    else {
        return "Scissor";
    }
}

//function declaration that plays one round of the game
function oneRound(compSel, playrSel){
    if((playrSel == "Rock" && compSel == "Paper") || (playrSel == "Paper" && compSel == "Scissor") || (playrSel == "Scissor" && compSel == "Rock")){
        result.innerHTML = `You Lose!, ${compSel} beats ${playrSel}!`;
        compScore();
        compSpan.innerHTML = "Computer Score : " + computerScore;
        playrSpan.innerHTML = "Player Score : " + playerScore;
        checkWinner();
        return;
    }
    else if  ((playrSel == "Rock" && compSel == "Scissor") || (playrSel == "Paper" && compSel == "Rock") || (playrSel == "Scissor" && compSel == "Paper")){   
        result.innerHTML =  `You Win!, ${playrSel} beats ${compSel}!`;
        playrScore();
        compSpan.innerHTML = "Computer Score : " + computerScore;
        playrSpan.innerHTML = "Player Score : " + playerScore;
        checkWinner();
        return;
    }
    else {
        result.innerHTML = "It's a tie... an unstoppable force met an immovable object!";
        compSpan.innerHTML = "Computer Score : " + computerScore;
        playrSpan.innerHTML = "Player Score : " + playerScore;
        return;
    }
}


//function to keep track of computer's score
function compScore(){
    computerScore += 1;

}

//function to keep track of player's score
function playrScore(){
    playerScore += 1;
}

function checkWinner() {
    if (computerScore == 5 ) {
        winner.innerHTML = "Computer Wins :(";
        playAgain();
    }
    else if (playerScore == 5) {
        winner.innerHTML = "You Win!";
        playAgain();
    }     
}

function playAgain (){
    const playAgainBtn = document.createElement('button');
    playAgainBtn.innerHTML = "Play Again"
    body.appendChild(playAgainBtn);
    playAgainBtn.addEventListener('click', () =>{
        computerScore = 0;
        playerScore = 0;
        compSpan.innerHTML = "Computer Score : " + computerScore;
        playrSpan.innerHTML = "Player Score : " + playerScore;
        winner.innerHTML = '';
        result.innerHTML = '';
        body.removeChild(playAgainBtn);
        
    });
}

//game();

// function declaration for player's item selection
/* function playerPlay(){
        let weapon = prompt("Choose Your Weapon: Rock, Paper or Scissor?");
        weapon = weapon.toLowerCase();
        weapon = weapon.replace(weapon[0],weapon[0].toUpperCase());
        if ((weapon == "Rock") || (weapon == "Paper") || (weapon == "Scissor")){
            return weapon;
        } 
        else {
            alert("Weapon not permitted. Please choose either a Rock, Paper or Scissor");
            playerPlay();
        }    
}
*/


//function declaration that plays a set of 5 games and decides the winner
/* function game(){
    for (let i = 0; i < 5; i++){
       let computerSelection = computerPlay();
       let playerSelection = 
       
        oneRound(computerSelection, playerSelection);
        console.log(`Round ${i+1}: ` + "computer score is " + computerScore + ", " + "player score is " + playerScore);
    }
    
    if (computerScore > playerScore){
        console.log("Computer is the Winner!");
    }
    else if (playerScore > computerScore) {
        console.log("You are the winner! Get ready for chicken dinner!");
    }

    else console.log("Game Tied...weak -_-");
}
*/
