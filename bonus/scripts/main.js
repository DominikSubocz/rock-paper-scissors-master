let userChoice = "";
let score = 0;

//1 - Paper
//2 - Rock
//3- Scissors

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
    showHideUserChoice(userChoice, false);
    findWinner();
}

function showRules() {
    document.getElementById("rulesContainer").style.display = "flex";
}

function hideRules() {
    document.getElementById("rulesContainer").style.display = "none";
}

function showHideUserChoice(userChoice, hide) {
    let pickBox = document.getElementById("pickBox");
    let resultBox = document.getElementById("resultBox");
    let paperBox = document.getElementById("userChoicePaper");
    let rockBox = document.getElementById("userChoiceRock");
    let scissorsBox = document.getElementById("userChoiceScissors");

    let compPaperBox = document.getElementById("compChoicePaper");
    let compRockBox = document.getElementById("compChoiceRock");
    let compScissorsBox = document.getElementById("compChoiceScissors");

    [compPaperBox, compRockBox, compScissorsBox].forEach(box => box.style.display = "none");

    if (!hide) {
        pickBox.style.display = "none";
        resultBox.style.display = "flex";

        if (userChoice === 1) {
            paperBox.style.display = "flex";
            rockBox.style.display = "none";
            scissorsBox.style.display = "none";
        } else if (userChoice === 2) {
            rockBox.style.display = "flex";
            scissorsBox.style.display = "none";
            paperBox.style.display = "none";
        } else {
            scissorsBox.style.display = "flex";
            paperBox.style.display = "none";
            rockBox.style.display = "none";
        }
    } else {
        pickBox.style.display = "flex";
        resultBox.style.display = "none";
    }
}

function generateComputerMove() {
    return Math.floor(Math.random() * 3) + 1;
}

let computerChoice = generateComputerMove();
console.log(computerChoice);

function findWinner() {

    compareMoves(userChoice, computerChoice);
    let compPaperBox = document.getElementById("compChoicePaper");
    let compRockBox = document.getElementById("compChoiceRock");
    let compScissorsBox = document.getElementById("compChoiceScissors");

    [compPaperBox, compRockBox, compScissorsBox].forEach(box => box.style.display = "none");

    if (computerChoice === 1) {
        compPaperBox.style.display = "flex";
    } else if (computerChoice === 2) {
        compRockBox.style.display = "flex";
    } else if (computerChoice === 3) {
        compScissorsBox.style.display = "flex";
    }
}

function showOutcome(number) {
    let outcomeWin = document.getElementById("victoryBox");
    let outcomeFail = document.getElementById("looseBox");
    let outcomeTie = document.getElementById("tieBox");
    let scoreBox = document.getElementById("score");

    outcomeWin.style.display = "none";
    outcomeFail.style.display = "none";
    outcomeTie.style.display = "none";

    if (number === 0) {
        outcomeFail.style.display = "flex";
        if (score > 0) score -= 1;
    } else if (number === 1) {
        outcomeWin.style.display = "flex";
        score += 1;
    } else if (number === 2) {
        outcomeTie.style.display = "flex";
    }

    scoreBox.textContent = score;
}

function compareMoves(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        setTimeout(showOutcome, 2000, 2);
        return "It's a tie!";
    } else if (
        (userChoice === 3 && computerChoice === 1) ||
        (userChoice === 1 && computerChoice === 2) ||
        (userChoice === 2 && computerChoice === 3)
    ) {
        setTimeout(showOutcome, 2000, 1);
        return "You win!";
    } else {
        setTimeout(showOutcome, 2000, 0);
        return "Computer wins!";
    }
}

function playAgain() {
    showOutcome(3);
    let pickBox = document.getElementById("pickBox");
    let resultBox = document.getElementById("resultBox");

    computerChoice = generateComputerMove();
    console.log(computerChoice);

    pickBox.style.display = "flex";
    resultBox.style.display = "none";
}
