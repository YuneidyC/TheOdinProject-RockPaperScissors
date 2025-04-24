let machineCount = 0;
let humanCount = 0;
let drawCount = 0;

const text = document.getElementsByClassName('text')[0];
const humanCounter = document.getElementsByClassName('humanCounter')[0];
const machineCounter = document.getElementsByClassName('machineCounter')[0];
const drawCounter = document.getElementsByClassName('drawCounter')[0];

const resetButton = document.getElementById('reset');
resetButton.addEventListener('click', resetValues, { capture: true });
resetButton.disabled = true;

const buttons = document.getElementsByClassName('human-choice');
Array.from(buttons).forEach(button => {
    button.addEventListener('click', getHumanChoice, { capture: true });
});

function getHumanChoice(event) {
    const humanChoice = event.target;
    text.innerHTML = "";

    resetStyle(document.getElementsByClassName('machine-choice'), '0.5');

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

        resetStyle(buttons, '0.5');
        resetStyle(document.getElementsByClassName('machine-choice'), '0.5');

        if (humanCount === 5) {
            text.innerHTML = "Congratulations, You win!";
            text.classList.add('win');
        }
        else {text.innerHTML = "You lose!";
        }
    }
}

function resetStyle(element, opacity) {
    for (let i = 0; i < element.length; i++) {
        element[i].style.opacity = opacity;
    }
}

function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    const item = choices[randomIndex];
    const machineButton = document.getElementsByClassName('machine-choice');

    for (let i = 0; i < machineButton.length; i++) {
        if (machineButton[i].value === item) {
            machineButton[i].style.opacity = '1';
        }
    }

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
    text.classList.remove('win');

    resetStyle(buttons, '1');
}