let computerScore = 0
let humanScore = 0

function getComputerChoice(){
    let choice = Math.random()
    if(choice <= .33){
        return "Rock"
    }else if(choice > .33 && choice <= .67){
        return "Paper"
    }else if(choice > .67){
        return "Scissors"
    }
    
}


function getHumanChoice(){
    let choiceInput = prompt("Please enter rock, paper, or scissors:")
    if(choiceInput.toLowerCase() === "rock"){
        return "Rock"
    }else if(choiceInput.toLowerCase() === "paper"){
        return "Paper"
    }else if(choiceInput.toLowerCase() === "scissors"){
        return "Scissors"
    }
}


function playRound(humanChoice, computerChoice){
    if(humanChoice === computerChoice){
        return "The game is a tie!"
    }else if((humanChoice === "Rock" && computerChoice === "Scissors") || (humanChoice === "Scissors" && computerChoice === "Paper") || (humanChoice === "Paper" && computerChoice === "Rock")){
        humanScore += 1
        return `${humanChoice} beats ${computerChoice}. You have won the round!`
    }else{
        computerScore += 1
        return `${computerChoice} beats ${humanChoice}. You have lost the round.`
    }
}

for(let i = 0; i < 5; i++){
    console.log(`Round ${i+1}`)
    let humanChoice = getHumanChoice()
    console.log(`Your choice: ${humanChoice}`)
    let computerChoice = getComputerChoice()
    console.log(`Your choice: ${computerChoice}`)
    console.log(playRound(humanChoice, computerChoice))
    console.log(`Your score: ${humanScore}`)
    console.log(`Computer score: ${computerScore}`)
}
if(humanScore > computerScore){
    console.log("You win the game!")
}else{
    console.log("You lost the game.")
}