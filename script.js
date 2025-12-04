const rock = document.getElementById("rock");
const scissors = document.getElementById("scissors");
const paper = document.getElementById("paper");
const text = document.getElementById("text");
const user = document.getElementById("user");
const com = document.getElementById("com");
const reset = document.getElementById("reset");

let userScore = 1;

let computerScore = 1;

const turn = (choice) => {
  const computerChoice = computerChoicer();

  winnerCheck(choice, computerChoice);
};

const winnerCheck = (choice, computerChoice) => {
  text.style.display = "block";
  user.style.display = "block";
  com.style.display = "block";
  if (choice === "rock" && computerChoice === "scissors") {
    text.innerHTML = "🎉 You win 🎉 😃";
    userScore++;
  }

  if (choice === "rock" && computerChoice === "paper") {
    text.innerHTML = "You lose ☹️";
    computerScore++;
  }

  if (choice === "scissors" && computerChoice === "paper") {
    text.innerHTML = "🎉 You win 🎉 😃";
    userScore++;
  }

  if (choice === "scissors" && computerChoice === "rock") {
    text.innerHTML = "You lose ☹️";
    computerScore++;
  }

  if (choice === "paper" && computerChoice === "rock") {
    text.innerHTML = "🎉 You win 🎉 😃";
    userScore++;
  }

  if (choice === "paper" && computerChoice === "scissors") {
    text.innerHTML = "You lose ☹️";
    computerScore++;
  }

  if (choice === computerChoice) {
    text.innerHTML = "Draw 🤝";
  }

  user.innerHTML = `Your win number: ${userScore}`;
  com.innerHTML = `AI win number: ${computerScore}`;

  if (userScore === 5) {
    reset.style.display = "block";

    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
    text.innerHTML = `You have won ${userScore} times, 
    Congratulations! 😎 🎉`;
  }

  if (computerScore === 5) {
    reset.style.display = "block";

    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
    text.innerHTML = `AI have won ${computerScore} times and the GAME OVER, 
    Would you play again?  😉`;
  }
};

const resetGame = () => {
  text.style.display = "none";
  user.style.display = "none";
  com.style.display = "none";
  userScore = 0;
  computerScore = 0;
  reset.style.display = "none";
  rock.disabled = false;
  paper.disabled = false;
  scissors.disabled = false;

  user.innerHTML = `Your win number: ${userScore}`;
  com.innerHTML = `AI win number: ${computerScore}`;
};

const computerChoicer = () => {
  const ramdomChoiceIndex = Math.floor(Math.random() * 3);
  const choices = ["rock", "scissors", "paper"];
  let computerChoice = choices[ramdomChoiceIndex];

  return computerChoice;
};
