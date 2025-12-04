const rock = document.getElementById("rock");
const scissors = document.getElementById("scissors");
const paper = document.getElementById("paper");
const text = document.getElementById("text");

const turn = (choice) => {
  const computerChoice = computerChoicer();
  console.log(choice, computerChoice);

  if (choice < computerChoice) {
    console.log("🎉 You win 🎉 😃");
  }

  if (choice > computerChoice) {
    console.log("You lose ☹️");
  }

  if ((choice = computerChoice)) {
    console.log("Tentslee");
  }
};

const computerChoicer = () => {
  const ramdomChoiceIndex = Math.floor(Math.random() * 3);

  const choices = ["rock", "scissors", "paper"];

  let computerChoice = choices[ramdomChoiceIndex];

  return computerChoice;
};

// user oorin songolt oruuldag
// computer songodog
// hen ylsan esehiig shalgana
// user bolon computer onootoi bna /0/
// onoo nemne
