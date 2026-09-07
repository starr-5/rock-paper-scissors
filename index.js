const btn = document.querySelectorAll(".btn")
const result=document.getElementById("result")
const score = document.getElementById("score"); 

const arr = ['rock', 'paper', 'scissors']
let userScore = 0;
let compScore = 0;

btn.forEach(function(userBtn){
    userBtn.addEventListener("click", function(e){
        const comp = arr[Math.floor(Math.random() * 3)];
        const user = e.target.value

        if(user===comp){
         console.log("Draw")
         result.textContent="Hec-hece"
        }
        else if (
          (user === "rock" && comp === "scissors") ||
          (user === "paper" && comp === "rock") ||
          (user === "scissors" && comp === "paper")
        ) {
          userScore += 1;
          result.textContent="Humans will always win!"
        } 
        else {
          compScore += 1;
          result.textContent="Yeqin sehven elin deydi"
        }
        score.textContent="Siz:"+userScore+"Kompyuter:"+compScore
    })
})

