function getComputerChoice() {
    // pseudocode: 
    // - get random number between 0-2
    // - assign to rock paper scissors

    let randomNumber = Math.floor(Math.random() * 3);

    let choices = ['rock','paper','scissors'];
    return choices[randomNumber];
}

function playRound(playerChoice, computerChoice) {
    // pseudocode:
    // convert playerChoice to lowercase so that their choice is case-insensitive
    // make comparisons between choices
    // return message saying who won

    playerChoice = playerChoice.toLowerCase();

    let result;

    if (playerChoice === 'rock' && computerChoice === 'scissors') {
        result = 'You win, rock beats scissors'
    } else if (playerChoice === 'paper' && computerChoice === 'rock') {
        result = 'You win, paper beats rock'
    } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
        result = 'You win, scissors beats paper'
    } else if (playerChoice === computerChoice) {
        result = 'You tie, you both chose ' + playerChoice;
    } else {
        result = 'You lose, ' + computerChoice + ' beats ' + playerChoice;
    }

    // console.log(result);
    return result;
}

function game() {
    let wins = 0;
    let losses = 0;
    let ties = 0;

    for (i = 0; i < 5; i++) {
        let playerChoice = prompt('What do you choose: rock, paper, scissors?');
        let result = playRound(playerChoice,getComputerChoice());
        
        if (result.substring(0,5) === 'You w') {
            wins++;
        } else if (result.substring(0,5) === 'You l') {
            losses++;
        } else {
            ties++;
        }

        console.log(result);
    }

    if (wins > losses) {
        console.log('You won!');
    } else if (losses > wins) {
        console.log('You lose :(');
    } else {
        console.log('You tied :/ Try again.')
    }
}

const computerChoice = getComputerChoice();
// const playerChoice = 'ROCK';
// playRound(playerChoice,computerChoice);
game();