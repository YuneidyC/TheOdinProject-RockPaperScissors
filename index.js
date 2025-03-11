function getComputerChoice(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    const item = array[randomIndex];
    return item;
}

function getHumanChoice() {
    let computerCount = 0;
    let humanCount = 0;
    let choices = ["Rock", "Paper", "Scissors"];

    while (computerCount < 5 && humanCount < 5)
    {
        let option = prompt(`What's your choice? (${choices[0]}, ${choices[1]} or ${choices[2]})`);
        let computerChoice = getComputerChoice(choices);

        if (option === computerChoice) {
            alert("It's a tie!");
        }
        else if (computerChoice === "Rock" && option === "Scissors") {
            computerCount++;
        }
        else if (computerChoice === "Scissors" && option === "Paper") {
            computerCount++;
        }
        else if (computerChoice === "Paper" && option === "Rock") {
            computerCount++;
        }
        else {
            humanCount++;
        }
    }

    if (humanCount === 5) {
        return alert("You win!");
    }

    return alert("Computer win!");
}

getHumanChoice();
