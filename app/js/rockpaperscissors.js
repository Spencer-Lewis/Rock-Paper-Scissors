////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    // Need to write a function above this boolean that defines move as the result of `getInput()`. This can then be called with `playerMove` for the rules below.
    move = getInput();
    if ((move != 'rock') && (move != 'paper') && (move != 'scissors')) {
        return getInput();
    }
    else {
        return move;
    }
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    // Need to write a function above this boolean that defines move as the result of `randomPlay()`. This can then be called with `computerMove` for the rules below.
    move = randomPlay();
    if ((move != 'rock') && (move != 'paper') && (move != 'scissors')) {
        return randomPlay();
    }
    else {
        return move;
    }
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    var playerMove = getPlayerMove();
    var computerMove = getComputerMove();

    console.log('Player has chosen ' + playerMove + ' and Computer has chosen ' + computerMove + '.');

    if (playerMove === 'rock' && computerMove === 'scissors') {
        winner = "Player Wins!";
    }
    
    else if (playerMove === 'rock' && computerMove === 'paper') {
        winner = "Computer Wins!";
    }
    
    else if (playerMove === 'rock' && computerMove === 'rock') {
        winner = "Tie!";
    }
    
    else if (playerMove === 'paper' && computerMove === 'rock') {
        winner = "Player Wins!";
    }
    
    else if (playerMove === 'paper' && computerMove === 'scissors') {
        winner = "Computer Wins!";
    }
    
    else if (playerMove === 'paper' && computerMove === 'paper') {
        winner = "Tie!";
    }
    
    else if (playerMove === 'scissors' && computerMove === 'paper') {
        winner = "Player Wins!";
    }
    
    else if (playerMove === 'scissors' && computerMove === 'rock') {
        winner = "Computer Wins!";
    }
    
    else {
        winner = "Tie!";
    }
    alert(winner);
    return winner;
}

function playToFive(playerWins,computerWins) {
    console.log("Let's play Rock, Paper, Scissors");
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    for (var i = 0; playerWins < 5 && computerWins < 5; i += 1) {
        
        getWinner();
        var Winner = getWinner();
        
        if (Winner === "Player Wins!") {
            console.log('Player Wins!');
            playerWins += 1;
            alert('player wins = ' + playerWins + ' & computer wins = ' + computerWins);
        }
        else if (Winner === "Computer Wins!") {
            console.log('Computer Wins!');
            computerWins += 1;
            alert('player wins = ' + playerWins + ' & computer wins = ' + computerWins);
        }
        else {
            console.log('score remains the same!');
        }
}
    if (playerWins === 5) {
        console.log('Player Wins it all!');
        return [playerWins, computerWins];
    }
    else if (computerWins === 5) {
        console.log('Computer Wins it all');
        return [playerWins, computerWins];
    }
}
playToFive(0,0);

// The code at the top gets an answer (rock, paper, or scissors).
// The code in the middle makes sure we got valid answers (or loops back into above function if not).
// The code under that determines who won the game.
// The code at the bottom records and reports the score up until we have a winner of 5 games.