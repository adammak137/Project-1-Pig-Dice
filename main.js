var scores, count, pcount, player, playerScore, playerCount, indicator1, indicator2, pressRoll;
scores = [0, 0]; //tracks the score
numbers = ["one" , "two", "three", "four", "five", "six"]; //used to reference the dice
count = 0; //total count
pCount = [0, 0] //tracks the last two rolls
player = 0; //tracks which player is it
pressRoll = document.getElementById("roll");
indicator1 = document.getElementById("arrow1");
indicator2 = document.getElementById("arrow2");
pressRoll.addEventListener("click", roll);

document.getElementById("pause").addEventListener("click",skip);
document.getElementById("new").addEventListener("click", ogNG);
document.getElementById("gameOne").addEventListener("click", gameOneStart)

function ogNG(){ //original new game used to restart the original game
    scores = [0, 0]
    player = 1;
    updateCount();
    skip();
    updateCount();
    pressRoll.className = "";
    document.getElementById("diceImage1").className = "fa fa-dice fa-4x";
    document.getElementById("diceImage2").className = "fa fa-dice fa-7x";
}


function gameOneStart(){
    document.getElementById("ogGame").className = "innerGrid";
    document.getElementById("startMenu").className = "hide";







}






function updateCount(){
    document.getElementById("count-"+[player+1]).textContent = String(count);
    document.getElementById("score-"+[player+1]).textContent = String(scores[player]);
    
}

function roll(){
    var result = Math.floor(Math.random()*6 + 1);
    count += result;
    pCount.unshift(result);
    pCount.pop();
    document.getElementById("diceImage1").className = "fas fa-dice-" + numbers[pCount[1]-1] + " fa-3x";
    document.getElementById("diceImage2").className = "fas fa-dice-" +  numbers[pCount[0]-1] + " fa-6x";
    updateCount();
    if(result === 1){
        count = 0;
        skip();
    }
    else if(pCount[0] && pCount[1] == 6){
            count = 0;
            scores[player] = 0;
            skip();
    }
    else{
        pause.className = "";
        }
    }

function skip(){
    scores[player] += count;
    count= 0;
    pCount = [0,0]
    updateCount();
    pause.className = "hide";
    
    if(scores[player] >= 100){
        alert("Congratulations Player " + [player+1] + " You have won this round of Pig Dice please start a new game")
        pressRoll.className = "hide";
    }
    else{
    if(player == 0){
        player= 1;
        indicator1.className = "fas fa-arrow-down fa-3x hide ";
        indicator2.className = "fas fa-arrow-down fa-3x ";
    }
    else{
        player= 0;
        indicator1.className = "fas fa-arrow-down fa-3x ";
        indicator2.className = "fas fa-arrow-down fa-3x hide";
    }
}
 
}

