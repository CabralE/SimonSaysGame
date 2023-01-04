let buttons = document.querySelectorAll(".gameButton");
let colors = ["green", "red", "yellow", "blue"];
let simon;
let input = [];
let center = document.getElementById("center");
let randomNum;
let label = document.getElementById("label");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function buttonOn() {
    setTimeout(function () {
      buttons[i].style.opacity = "60%";
    }, 250);
    buttons[i].style.opacity = "100%";

    input.push(i);
    checker();
  });
}

document
  .getElementsByClassName("start")[0]
  .addEventListener("click", () => startGame());

function startGame() {
  label.innerHTML = "Simon's Turn!";
  center.classList.remove("start");
  setTimeout(simonsTurn, 1500);
  center.innerHTML = "";
  simon = [];
}

function simonsTurn() {
  label.innerHTML = "Simon's Turn!";

  randomNum = Math.floor(Math.random() * 4);

  simon.push(randomNum);

  for (let i = 0; i < simon.length; i++) {
    setTimeout(function () {
      setTimeout(function () {
        buttons[simon[i]].style.opacity = "60%";
      }, 500);
      buttons[simon[i]].style.opacity = "100%";

      setTimeout(function () {
        center.style.backgroundColor = "rgb(40, 40, 40)";
      }, 500);
      center.style.backgroundColor = colors[simon[i]];
    }, 1000 * i);
  }

  setTimeout(playersTurn, 1000 * simon.length);
}

function playersTurn() {
  label.innerHTML = "Your Turn!";
  input = [];
}

function checker() {
  if (input[input.length - 1] == simon[input.length - 1]) {
    if (input.length == simon.length) {
      setTimeout(simonsTurn, 1500);
    }
  } else {
    if (JSON.stringify(input) == JSON.stringify(simon)) {
      simonsTurn();
    } else {
      label.innerHTML = "Game Over!";
      center.innerHTML =
        "Total Score: " +
        (simon.length - 1) +
        "<br><br>Click here to try again!";
      center.classList.add("start");
    }
  }
}
