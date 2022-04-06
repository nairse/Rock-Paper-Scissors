
let rando;
let computerScore = 0;
let playerScore = 0;

// function declaration for player's item selection
function playerPlay(){
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

//function declaration that plays a set of 5 games and decides the winner
function game(){
    for (let i = 0; i < 5; i++){
       let computerSelection = computerPlay();
       let playerSelection = playerPlay();
       
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


//function to keep track of computer's score
function compScore(){
    computerScore += 1;
}

//function to keep track of player's score
function playrScore(){
    playerScore += 1;
}

game();
