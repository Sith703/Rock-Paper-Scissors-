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
    
     if (computerSelection == "scissors") {
    return "You Win! You're the best"
}
    else if (computerSelection == "paper") {
    return "Haha you lose!"
}
    else (computerSelection == "rock") 
    return "damn it do be drawin doe"


}
    
let playerSelection = "rock" ;
let computerSelection = getComputerChoice() ;

console.log(playRound(playerSelection, computerSelection))