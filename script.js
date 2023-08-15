let secretNumber = myno();
function myno() {
  return Math.trunc(Math.random() * 20) + 1;
}

let score = document.querySelector(".real-score").textContent;
let highScore = document.querySelector(".high-score").textContent;

document.querySelector(".check-button").addEventListener("click", vaibhav);

function vaibhav() {
  let usersNumber = Number(document.querySelector(".input-number").value);
  if (score > 0) {
    if (Number.isInteger(usersNumber)) {
      if (!usersNumber) {
        document.querySelector(".start").textContent = "❌ Not a number!";
      } else if (secretNumber == usersNumber) {
        document.querySelector(".start").textContent = "🥳 Correct Number";
        if (score > highScore) {
          highScore = score;
          document.querySelector(".high-score").textContent = highScore;
        }
        document.querySelector(".high-score").textContent = highScore;
        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector(".question").textContent = secretNumber;
      } else if (usersNumber < secretNumber && usersNumber > 0) {
        document.querySelector(".start").textContent = "📉  Too low";
        score--;
        document.querySelector(".real-score").textContent = score;
      } else if (usersNumber > secretNumber && usersNumber <= 20) {
        document.querySelector(".start").textContent = "📈  Too high";
        score--;
        document.querySelector(".real-score").textContent = score;
      } else if (usersNumber > 20) {
        document.querySelector(".start").textContent = "Incorrect number";
      } else if (usersNumber < 1) {
        document.querySelector(".start").textContent = "Incorrect number";
      }
    } else {
      document.querySelector(".start").textContent = "Enter an integer";
    }
  } else {
    document.querySelector(".start").textContent =
      "😭  You have lost this game!";
  }
}
document.querySelector(".play-again").addEventListener("click", wagh);
function wagh() {
  secretNumber = myno();
  document.querySelector(".input-number").value = " ";
  document.querySelector(".start").textContent = "Start guessing";
  document.querySelector(".real-score").textContent = "20";
  document.querySelector("body").style.backgroundColor = " #222";
  document.querySelector(".question").textContent = "?";
}
