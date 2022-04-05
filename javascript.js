
let rando;
let computerScore = 0;
let playerScore = 0;

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
function oneRound(compSel, playrSel){
    if((playrSel == "Rock" && compSel == "Paper") || (playrSel == "Paper" && compSel == "Scissor") || (playrSel == "Scissor" && compSel == "Rock")){
        compScore();
        return console.log(`You Lose!, ${compSel} beats ${playrSel}!`);
    }
    else if  ((playrSel == "Rock" && compSel == "Scissor") || (playrSel == "Paper" && compSel == "Rock") || (playrSel == "Scissor" && compSel == "Paper")){   
        playrScore();
        return console.log(`You Win!, ${playrSel} beats ${compSel}!`);
}
    else {
        return console.log("It's a tie... an unstoppable force met an immovable object!");
    }

}

function game(){
    for (let i = 0; i < 5; i++){
       let computerSelection = computerPlay();
       let playerSelection = prompt("Choose Your Weapon: Rock, Paper or Scissor?");
        playerSelection = playerSelection.toLowerCase();
        playerSelection = playerSelection.replace(playerSelection[0],playerSelection[0].toUpperCase());
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


game();

function compScore(){
    computerScore += 1;
}

function playrScore(){
    playerScore += 1;
}
