function getComputerChoice() {
    // pseudocode: 
    // - get random number between 0-2
    // - assign to rock paper scissors

    let randomNumber = Math.floor(Math.random() * 3);

    let choices = ['rock','paper','scissors'];
    return choices[randomNumber];
}

getComputerChoice();