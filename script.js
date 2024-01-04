let playerScore = 0
let computerScore = 0
let Draw = 0

let playerWinRound = "Player wins this round!"
let computerWinRound = "Computer wins this round!"
let draw = "Draw!"
let playerWin = "Player wins the game! Congratulations!"
let computerWin = "Computer wins the game! Congratulations!"


function getComputerChoice () {
    let  randomNumber = Math.floor(Math.random() * 4)
    if (randomNumber == 1) {
        return "rock"
    }
    else if (randomNumber == 2) {
        return "paper"
    }
    else if (randomNumber == 3) {
        return "scissors"
    }

}

console.log(getComputerChoice())



function playRound(_playerSelection, computerSelection) {
    
    if (computerSelection === _playerSelection) {
        return draw ;
    }
    
    else if (computerSelection === "scissors" && _playerSelection === "rock") {
    return playerWinRound ;
}
    else if (computerSelection === "paper" && _playerSelection === "rock") {
    return computerWinRound ;
}
    else if (computerSelection === "scissors" && _playerSelection === "paper") {
    return  computerWinRound ;
}
    else {
        return playerWinRound ;
    }

}
    


    for (let i = 0; i < 1000; i++) {
        let playerSelection = prompt("Rock, Paper, Scissors, Your pick.").toLowerCase() ;
        let computerSelection = getComputerChoice() ;
        let roundResult = playRound(playerSelection, computerSelection);
        console.log(roundResult);
        gameScore(roundResult);
        console.log("Your Score is " + playerScore);
        console.log("The Computer Score is " + computerScore);

        if (playerScore === 5 || computerScore === 5) {
            break;
        }

    }
    
   


function gameScore(result) {
    

    if (result === playerWinRound) {
        playerScore++;
    }   else if (result === draw) {
        Draw++;
    }   else {
        computerScore++;
    }

    if (playerScore === 5 ) {
        console.log(playerWin);
        return;
    } 
    if (computerScore === 5 ) {
        console.log(computerWin);
        return;
    }
}