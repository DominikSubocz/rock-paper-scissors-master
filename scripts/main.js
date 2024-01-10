let userChoice = "";
var delayInMilliseconds = 1000; //1 seconds







function clickPaper() {
    userPicks(1);
}

function clickRock() {
    userPicks(2);
}

function clickScissors() {
    userPicks(3);
}

// 1 = paper
// 2 = rock
// 3 = scissors

function userPicks(userNumber) {

    
    userChoice = userNumber;

    showHideUserChoice(userChoice, false)
    findWinner();
}



function showHideUserChoice(userChoice, hide){

    let pickBox = document.getElementById("pickBox");
    let Box = document.getElementById("resultBox");

    let paperBox = document.getElementById("userChoicePaper");
    let rockBox = document.getElementById("userChoiceRock");
    let scissorsBox = document.getElementById("userChoiceScissors");

    let compPaperBox = document.getElementById("compChoicePaper");
    let compRockBox = document.getElementById("compChoiceRock");
    let compScissorsBox = document.getElementById("compChoiceScissors");


    compPaperBox.style.display = "none";
    compRockBox.style.display= "none";
    compScissorsBox.style.display= "none";


    // checkUserChoice();

    if( hide == false )
    {
        pickBox.style.display = "none";
        Box.style.display="flex";

        if (userChoice == 1){
            paperBox.style.display = "flex";
            rockBox.style.display= "none";
            scissorsBox.style.display= "none";

        }
    
        else if (userChoice == 2){
            rockBox.style.display = "flex";
            scissorsBox.style.display= "none";
            paperBox.style.display = "none";

        }
    
        else{
            scissorsBox.style.display = "flex";
            paperBox.style.display = "none";
            rockBox.style.display= "none";

        }
    }   

    else{
        pickBox.style.display = "flex";
        Box.style.display="none";
    }




}

// For debuging purposes
function checkUserChoice() {
    console.log("User's choice is: " + userChoice);
}

function generateComputerMove() {
    const randomDecimal = Math.random();
    const randomNumber = Math.floor(randomDecimal * 3) + 1;



    return randomNumber;
}

const computerChoice = generateComputerMove();
console.log(computerChoice);

function findWinner() {
    let result = compareMoves(userChoice, computerChoice);
    console.log(result);

    let compPaperBox = document.getElementById("compChoicePaper");
    let compRockBox = document.getElementById("compChoiceRock");
    let compScissorsBox = document.getElementById("compChoiceScissors");

    if (computerChoice === 1){
        compPaperBox.style.display = "flex";
        compRockBox.style.display= "none";
        compScissorsBox.style.display= "none";
    }

    else if (computerChoice === 2){
        compRockBox.style.display = "flex";
        compScissorsBox.style.display= "none";
        compPaperBox.style.display = "none";
    }

    else{
        compScissorsBox.style.display = "flex";
        compPaperBox.style.display = "none";
        compRockBox.style.display= "none";
    }
}

// 1 = paper
// 2 = rock
// 3 = scissors

function compareMoves(userChoice, computerChoice) {
    
    let scoreBox = document.getElementById("score");
    if (userChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (userChoice === 3 && computerChoice === 1) ||
        (userChoice === 1 && computerChoice === 2) ||
        (userChoice === 2 && computerChoice === 3)
    ) {
        scoreBox.textContent = +1;
        return "You win!";
    } else {
        if (scoreBox > 0){
            scoreBox.textContent = -1;
        }

        else{
            scoreBox.textContent = 0;
        }
        return "Computer wins!";
    }


}
