//const rock = 0; //make variable for 'Rock'
//const paper = 1; //make variable for 'Paper'
//const scissors = 2; //make variable for 'Scissors'

function randomInt(min, max) { //make function choosing randomly between R, P, and S
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
    //make playerSelection variable
    //make computerSelection variable calling computerPlay function
    //if playerSelection === 'rock' && computerSelection === 'rock' => tie
    //else if playerSelection === 'rock' && computerSelection === 'paper' => comp wins
    //else if playerSelection === 'rock' && computerSelecion === 'scissors' => player wins
    //else if playerSelection === 'paper' && computerSelection === 'rock' => player wins
    //else if playerSelection === 'paper' && computerSelection === 'paper' => tie
    //else if playerSelection === 'paper' && computerSelection === 'scissors' => comp wins
    //else if playerSelection === 'scissors' && computerSelection === 'rock' => comp wins
    //else if playerSelection === 'scissors' && computerSelection === 'paper' => player wins
    //else if playerSelection === 'scissors' && computerSelection === 'scissors' => tie
    //return results
//make game function looping through 5 rounds of play
    //call playRound function 5 times
    //return wins, losses, ties