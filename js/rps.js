function getComputerChoice() {
  let choices = ["Rock", "Paper", "Scissors"];
  var index = Math.floor(Math.random() * 3);
  return choices[index];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection == "rock") {
    if (computerSelection == "Scissors") {
      return "Congratulations, you win!";
    } else if (computerSelection == "Rock") {
      return "It's a tie, play again?";
    } else {
      return "You Lose! Paper beats Rock";
    }
  } else if (playerSelection == "paper") {
    if (computerSelection == "Rock") {
      return "Congratulations, you win!";
    } else if (computerSelection == "Paper") {
      return "It's a tie, play again?";
    } else {
      return "You Lose! Scissors beats Paper";
    }
  } else {
    if (computerSelection == "Paper") {
      return "Congratulations, you win!";
    } else if (computerSelection == "Scissors") {
      return "It's a tie, play again?";
    } else {
      return "You Lose! Rock beats Scissors";
    }
  }
}

function game() {}
