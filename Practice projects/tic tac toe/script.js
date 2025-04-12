let boxes = document.querySelectorAll(".box");
let resBtn = document.querySelector("#reset");
let newBtn1 = document.querySelector("#newBtn");
let msgCont1 = document.querySelector(".msgCont");
let msg = document.querySelector("#msg");

let turnO = true;

const winPat = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
const resetGame = () => {
  turnO = true;
  enableBoxes();
  msgCont1.classList.add("hide");
};

const checkDraw = () => {
  let isDraw = true;

  boxes.forEach((box) => {
    if (box.innerText === "") {
      isDraw = false;
    }
  });

  if (isDraw) {
    msg.innerText = "It's a Draw!";
    msgCont1.classList.remove("hide");
  }
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;

    checkWin();
  });
});

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};
const showWin = (winner) => {
  msg.innerText = `Congratulations! Winner is ${winner}`;
  msgCont1.classList.remove("hide");
  disableBoxes();
};
const checkWin = () => {
  for (let pattern of winPat) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        console.log("WINNER", pos1Val);

        showWin(pos1Val);
      }
    }
  }
  checkDraw();
};

newBtn1.addEventListener("click", resetGame);
resBtn.addEventListener("click", resetGame);
