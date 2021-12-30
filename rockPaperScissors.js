let wins = 0;
let losses = 0;
let ties = 0;


function randomInt(min, max) { 
    return Math.floor(Math.random() * (max - min)) + min;
}


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


function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'rock') {
        return textOutput('It\'s a tie!'), ties += 1;
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return textOutput('Computer wins. Paper beats Rock.'), losses += 1;
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return textOutput('You win! Rock beats Scissors!'), wins += 1;
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return textOutput('You win! Paper beats Rock!'), wins += 1;
    } else if (playerSelection === 'paper' && computerSelection === 'paper') {
        return textOutput('It\'s a tie!'), ties += 1;
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return textOutput('Computer wins. Scissors beat Paper.'), losses += 1;
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return textOutput('Computer wins. Rock beats scissors.'), losses += 1;
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return textOutput('You win! Scissors beat Paper!'), wins += 1;
    } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        return textOutput('It\'s a tie!'), ties += 1;
    } else 
        return textOutput('Didn\'t work.');
}

//function game(){
//    for (let i = 0; i < 5; i++) {
//        let playerSelection = prompt('Please choose Rock, Paper, or Scissors: ');
//            playerSelection = playerSelection.toLowerCase();
//        playRound(playerSelection, computerPlay());
//    }
//    return console.log(wins, losses, ties)
//}

//console.log(game())



const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            const playerSelection = button.id;
            const computerSelection = computerPlay();
            playRound(playerSelection, computerSelection);
            result();
        });
    });

const results = document.querySelector('#results');

// Results displaying who won
const textResults = document.createElement('h2');
    textResults.classList.add('textResults');
    


results.appendChild(textResults);

// Wins
const Wins = document.createElement('h3');
    Wins.classList.add('Wins');
    Wins.textContent = 'Wins';

results.appendChild(Wins);

const pWins = document.createElement('p');
    pWins.classList.add('pWins');
    pWins.textContent = 0;
    
results.appendChild(pWins);

// Losses
const Losses = document.createElement('h3');
    Losses.classList.add('Losses');
    Losses.textContent = 'Losses';

results.appendChild(Losses);

const pLosses = document.createElement('p');
    pLosses.classList.add('pLosses');
    pLosses.textContent = 0;

results.appendChild(pLosses);

// Ties
const Ties = document.createElement('h3');
    Ties.classList.add('Ties');
    Ties.textContent = 'Ties';

results.appendChild(Ties);

const pTies = document.createElement('p');
    pTies.classList.add('pTies');
    pTies.textContent = 0;

results.appendChild(pTies);

function result() {
    pWins.textContent = `${wins}`;
    pLosses.textContent = `${losses}`;
    pTies.textContent = `${ties}`;
};

function textOutput(outcome) {
    textResults.textContent = outcome;
};
