
let rando;

function computerPlay(){
    rando = Math.floor(Math.random()*100);
    if(rando >=0 && rando < 33){
        console.log(rando);
        return "Rock";
        
    }
    else if (rando >= 33 && rando < 66){
        console.log(rando);
        return "Paper";
    }
    else {
        console.log(rando);
        return "Scissor";
    }   
}

let computerSelection = computerPlay();
let playerSelection = prompt("Choose Your Weapon: Rock, Paper or Scissor?");
playerSelection = playerSelection.toLowerCase();
playerSelection = playerSelection.replace(playerSelection[0],playerSelection[0].toUpperCase());


function oneRound(compSel, playrSel){
    if((playrSel == "Rock" && compSel == "Paper") || (playrSel == "Paper" && compSel == "Scissor") || (playrSel == "Scissor" && compSel == "Rock")){
        return alert(`You Lose!, ${computerSelection} beats ${playerSelection}!`);
    }
    else if  ((playrSel == "Rock" && compSel == "Scissor") || (playrSel == "Paper" && compSel == "Rock") || (playrSel == "Scissor" && compSel == "Paper")){   
        return alert(`You Win!, ${playerSelection} beats ${computerSelection}!`);
}
    else {
        return alert("It's a tie... an unstoppable force met an immovable object!");
    }

}

oneRound(computerSelection, playerSelection);
