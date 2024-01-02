function getComputerChoice () {
    let  randomNumber = Math.floor(Math.random() * 4)
    if (randomNumber == 1) {
        return "Rock"
    }
    else if (randomNumber == 2) {
        return "paper"
    }
    else if (randomNumber == 3) {
        return "scissors"
    }

}

console.log(getComputerChoice())