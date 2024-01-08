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
    let pickBox = document.getElementById("pickBox");
    let Box = document.getElementById("resultBox");

    let paperBox = document.getElementById("userChoicePaper");
    let rockBox = document.getElementById("userChoiceRock");
    let scissorsBox = document.getElementById("userChoiceScissors");
    userChoice = userNumber;
    // checkUserChoice();
    pickBox.style.display = "none";
    resultBox.style.display="flex";

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
    setTimeout(findWinner, delayInMilliseconds); // Call the function to find the winner after the user has picked
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
    const result = compareMoves(userChoice, computerChoice);
    console.log(result);
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
