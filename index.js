let machineCount = 0;
let humanCount = 0;
let drawCount = 0;

const text = document.getElementsByClassName('text')[0];
const humanCounter = document.getElementsByClassName('humanCounter')[0];
const machineCounter = document.getElementsByClassName('machineCounter')[0];
const drawCounter = document.getElementsByClassName('drawCounter')[0];

const resetButton = document.getElementById('reset');
resetButton.addEventListener('click', resetValues);
resetButton.disabled = true;

const buttons = document.getElementsByClassName('humanChoice');
Array.from(buttons).forEach(button => {
    button.addEventListener('click', getHumanChoice);
});

function getHumanChoice(event) {
    text.innerHTML = "";
    const humanChoice = event.target;
    let computerChoice = getComputerChoice();

    if (humanChoice.value === computerChoice) {
        text.innerHTML = "Draw!";
        drawCount++;
        drawCounter.innerHTML = drawCount;
    }
    else if (machineCount < 5 && humanCount < 5) {
        if (computerChoice === "Rock" && humanChoice.value === "Scissors") {
            machineCount++;
        }
        else if (computerChoice === "Scissors" && humanChoice.value === "Paper") {
            machineCount++;
        }
        else if (computerChoice === "Paper" && humanChoice.value === "Rock") {
            machineCount++;
        }
        else {
            humanCount++;
        }
    }

    humanCounter.innerHTML = humanCount;
    machineCounter.innerHTML = machineCount;

    if (humanCount === 5 || machineCount === 5) {
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
        resetButton.disabled = false;

        if (humanCount === 5) {
            text.innerHTML = "You win!";
        }
        else {text.innerHTML = "Computer win!";
        }
    }
}

function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    const item = choices[randomIndex];
    return item;
}

function resetValues() {
    Array.from(buttons).forEach(button => {
        button.disabled = false;
    });

    resetButton.disabled = true;

    humanCount = 0;
    machineCount = 0;
    drawCount = 0;

    humanCounter.innerHTML = humanCount;
    machineCounter.innerHTML = machineCount;
    drawCounter.innerHTML = drawCount;

    text.innerHTML = "";
}