let gameSeq = [];
let userSeq = [];
let btns = ["yellow", "red", "purple", "green"];
let body = document.querySelector("body");

let started = false;
let level = 0;
let h2 = document.querySelector("h2");
document.addEventListener("keypress", function () {
  if (started == false) {
    started = true;

    levelUp();
  }
});

function gameFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}
function userFlash(btn) {
  btn.classList.add("userflash");
  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 250);
}
function levelUp() {
  userSeq = [];
  level++;
  h2.innerText = `Level ${level}`;
  let rndmIdx = Math.floor(Math.random() * 3);
  let rndmColor = btns[rndmIdx];
  gameSeq.push(rndmColor);
  let randBtn = document.querySelector(`.${rndmColor}`);
  gameFlash(randBtn);
}
function cheakAns(idx) {
  if (userSeq[idx] === gameSeq[idx]) {
    if (userSeq.length == gameSeq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    h2.innerHTML = `Game Over!! your score is :<b> ${level}</b> </br> press any key to restart the game!!`;
    body.classList.add("gameover");
    setTimeout(function () {
      body.classList.remove("gameover");    
    },200);
    reset();
  }
}
function btnPress() {
  let btn = this;
  userFlash(btn);
  userColor = btn.getAttribute("id");
  userSeq.push(userColor);
  console.log(userSeq);
  cheakAns(userSeq.length - 1);
}
let allBtns = document.querySelectorAll(".btn");

for (btn of allBtns) {
  btn.addEventListener("click", btnPress);
}

function reset() {
  started = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
}