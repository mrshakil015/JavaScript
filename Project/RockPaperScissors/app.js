let userScore = 0;
let computerScore =0;
const choices = document.querySelectorAll(".choice");

let computerScoreId = document.querySelector("#computer-score");
let userScoreId = document.querySelector("#user-score");
let msg = document.querySelector("#msg");

const genComputerChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
    msg.innerHTML = "Game was draw! Play Again.";
    msg.style.backgroundColor = "blue" 
}

const showWinner = (userWin, userChoice, computerChoice) => {
    if(userWin) {
        msg.innerHTML = `You win! Your ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor = "green";
        userScore++;
        userScoreId.innerHTML = userScore;
    }else {
        msg.innerHTML = `You lose. ${computerChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
        computerScore++;
        computerScoreId.innerHTML = computerScore;
    }
}

const playGame = (userChoice) => {
    //Generate computer choice
    const computerChoice = genComputerChoice();

    if(userChoice === computerChoice) {
        drawGame();
    }else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = computerChoice === "paper" ? false : true;
        }else if (userChoice == "paper") {
            userWin = computerChoice === "scissors" ? false : true;
        }else {
            userWin = computerChoice == "rock" ? false : true;
        }
        showWinner(userWin,userChoice, computerChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice); 
    })
})