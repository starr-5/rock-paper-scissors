const btn = document.querySelectorAll(".btn");
const result = document.getElementById("result");
const score = document.getElementById("score");
const userImage = document.getElementById("userImage");
const compImage = document.getElementById("compImage");

const arr = ["rock", "paper", "scissors"];
let userScore = 0;
let compScore = 0;

btn.forEach(function (userBtn) {
  userBtn.addEventListener("click", function (e) {
    const comp = arr[Math.floor(Math.random() * arr.length)];
    const user = e.target.value;
    userImage.src = `./images/${user}.jpeg`;
    compImage.src = `./images/${comp}.jpeg`;
    userImage.style.display = "inline-block";
    compImage.style.display = "inline-block";
    
    if (user === comp) {
      result.textContent = "Draw";
    } else if (
      (user === "rock" && comp === "scissors") ||
      (user === "paper" && comp === "rock") ||
      (user === "scissors" && comp === "paper")
    ) {
      userScore += 1;
      result.textContent = "Humans will always win!";
    } else {
      compScore += 1;
      result.textContent = "Yəqin səhvən əlin dəydi..";
    }
    score.textContent = `You: ${userScore} | Computer: ${compScore}`;
  });
});
