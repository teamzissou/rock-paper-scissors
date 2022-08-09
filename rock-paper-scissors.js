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

const computerChoice = getComputerChoice();
const playerChoice = 'ROCK';
playRound(playerChoice,computerChoice);