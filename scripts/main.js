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

function userPicks(userNumber) {
    userChoice = userNumber;
    checkUserChoice();
    let hide = document.getElementById("pickBox");
    hide.style.display = "none";
    setTimeout(findWinner, delayInMilliseconds); // Call the function to find the winner after the user has picked
}

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
