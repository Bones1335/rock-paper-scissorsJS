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

//make playerSelection variable
const playerSelection = prompt('Please choose Rock, Paper, or Scissors: ');


//make playRound function with playerSelection, computerSelection as the two parameters
function playRound(playerSelection, computerSelection) {
    //make computerSelection variable calling computerPlay function
    if (playerSelection === 'rock' && computerSelection === 'rock') {
        return console.log('It\'s a tie!');
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return console.log('Computer wins. Paper beats Rock.');
    } else if (playerSelection === 'rock' && computerSelecion === 'scissors') {
        return console.log('You win! Rock beats Scissors!');
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return console.log('You win! Paper beats Rock!');
    } else if (playerSelection === 'paper' && computerSelection === 'paper') {
        return console.log('It\'s a tie!');
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return console.log('Computer wins. Scissors beat Paper.');
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return console.log('Computer wins. Rock beats scissors.');
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return console.log('You win! Scissors beat Paper!');
    } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        return console.log('It\s a tie!');
    } else 
        return console.log('Not working.');
    //return results

}
console.log(playRound(playerSelection, computerPlay()))
//make game function looping through 5 rounds of play
    //call playRound function 5 times
    //return wins, losses, ties