let wins = 0;
let losses = 0;
let ties = 0;

//make function choosing randomly between R, P, and S
function randomInt(min, max) { 
    return Math.floor(Math.random() * (max - min)) + min;
}

//make computerPlay function that randomly returns 'Rock', 'Paper', or 'Scissors'
function computerPlay() {
    const computer = randomInt(0, 3);
    if (computer === 0) {
        return computerSelection = 'rock';
    } else if (computer === 1) {
        return computerSelection = 'paper';
    } else if (computer === 2) {
        return computerSelection = 'scissors';
    } else
        return console.log('Not working')
}

//make playRound function with playerSelection, computerSelection as the two parameters
function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'rock') {
        return console.log('It\'s a tie!'), ties += 1;
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return console.log('Computer wins. Paper beats Rock.'), losses += 1;
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return console.log('You win! Rock beats Scissors!'), wins += 1;
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return console.log('You win! Paper beats Rock!'), wins += 1;
    } else if (playerSelection === 'paper' && computerSelection === 'paper') {
        return console.log('It\'s a tie!'), ties += 1;
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return console.log('Computer wins. Scissors beat Paper.'), losses += 1;
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return console.log('Computer wins. Rock beats scissors.'), losses += 1;
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return console.log('You win! Scissors beat Paper!'), wins += 1;
    } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        return console.log('It\s a tie!'), ties += 1;
    } else 
        return console.log('Didn\'t work.');
}
//make game function looping through 5 rounds of play
    //call playRound function 5 times
    //return wins, losses, ties
function game(){
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt('Please choose Rock, Paper, or Scissors: ');
            playerSelection = playerSelection.toLowerCase();
        playRound(playerSelection, computerPlay());
    }
    return console.log(wins, losses, ties)
}

console.log(game())