var scores, count, pcount, player, playerScore, playerCount, indicator1, indicator2, pressRoll;
scores = [0, 0];
psores = [0, 0];
numbers = ["one" , "two", "three", "four", "five", "six"];
count = 0;
pCount = [0, 0]
player = 0;
pressRoll = document.getElementById("roll");
indicator1 = document.getElementById("arrow1");
indicator2 = document.getElementById("arrow2");
pressRoll.addEventListener("click", roll);

document.getElementById("pause").addEventListener("click",skip);
document.getElementById("new").addEventListener("click", init);


function init(){
    scores = [0, 0]
    player = 1;
    updateCount();
    skip();
    updateCount();
    pressRoll.className = "";
}




function updateCount(){
    document.getElementById("count-"+[player+1]).textContent = String(count);
    document.getElementById("score-"+[player+1]).textContent = String(scores[player]);
    
}

function roll(){
    var result = Math.floor(Math.random()*6 + 1);
    count += result;
    myNumber = numbers[result-1];
    pCount.unshift(result);
    pCount.pop();
    document.getElementById("diceImage").className = "fas fa-dice-" + myNumber + " fa-6x";
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

