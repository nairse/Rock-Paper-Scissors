
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
        return "Scissors";
    }   
}

