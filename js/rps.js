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

function game() {
  let playerscore = 0;
  let computerscore = 0;
  let tiescore = 0;
  for (let i = 0; i < 5; i++) {
    let choice = prompt("Choose rock, paper or scissors");
    choice = choice.toLowerCase();
    while (choice != "rock" && choice != "paper" && choice != "scissors") {
      choice = prompt("Check your spelling, choose rock, paper or scissors");
      choice = choice.toLowerCase();
    }
    let outcome = playRound(choice, getComputerChoice());
    if (outcome == "Congratulations, you win!") {
      playerscore++;
      console.log("You win");
      console.log(
        `Player Score is ${playerscore}, Computer Score is ${computerscore}, Number of Ties is ${tiescore}`
      );
    } else if (outcome == "It's a tie, play again?") {
      tiescore++;
      console.log("It's a tie");
      console.log(
        `Player Score is ${playerscore}, Computer Score is ${computerscore}, Number of Ties is ${tiescore}`
      );
    } else {
      computerscore++;
      console.log("You lost");
      console.log(
        `Player Score is ${playerscore}, Computer Score is ${computerscore}, Number of Ties is ${tiescore}`
      );
    }
  }
  if (playerscore > computerscore) {
    console.log(
      `You beat the computer ${playerscore}/5 times. You won the game!`
    );
  } else if (playerscore == computerscore) {
    console.log(
      `Both you and the computer won ${playerscore}/5 times. It's a tie!`
    );
  } else {
    console.log(
      `The computer beat you ${computerscore}/5 times. You lost the game.`
    );
  }
}
