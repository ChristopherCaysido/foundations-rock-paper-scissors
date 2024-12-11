function getComputerChoice(){
    let computerChoice
    let computerChoiceNumber = Math.random()
    if(computerChoiceNumber <= 0.3 && computerChoiceNumber >0){
        computerChoice = "rock"
    } else if(computerChoiceNumber <= 0.6 && computerChoiceNumber >0.3) {
        computerChoice = "paper"
    } else if(computerChoiceNumber <= 1 && computerChoiceNumber >0.6){
        computerChoice = "scissors"
    }
    return computerChoice
}
