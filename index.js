console.log("This is Tic Tac Toe game");

// declaring variables
let turn = "X";
const click_sound = new Audio("music/Click_sound.wav");
gameover = false;
let dark = document.getElementById("dark").addEventListener("click", () => {
  if (document.body.style.backgroundColor != "darkslateblue") {
    document.body.style.backgroundColor = "darkslateblue";
    document.getElementById("nav").style =
      " background-color:#09182a; color: grey";
    let boxItems = document.querySelectorAll(".boxItems");
    (boxItems).forEach((e) => {
      e.style.backgroundColor = "#09182a";
    });
  } else {
    document.body.style.backgroundColor = "#9feef4";
    document.getElementById("nav").style.backgroundColor = " rgb(82 1 159)";
    let boxItems = document.querySelectorAll(".boxItems");
    Array.from(boxItems).forEach((e) => {
      e.style.backgroundColor = "rgb(255, 255, 255)";
    });
  }
});

// Turn call function
const gameTurn = () => {
  return turn === "X" ? "0" : "X";
};

// Game win check
const gameWin = () => {
  let boxLists = document.getElementsByClassName("boxList");
  let win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
  ];
  win.forEach((e) => {
    if (
      boxLists[e[0]].innerText === boxLists[e[1]].innerText &&
      boxLists[e[2]].innerText === boxLists[e[1]].innerText &&
      boxLists[e[0]].innerText !== ""
    ) {
      document.getElementsByClassName("title")[0].innerText =
        boxLists[e[0]].innerText + " Won";
      gameover = true;
      let img = (document
        .querySelector(".img")
        .getElementsByTagName("img")[0].style.width = "200px");
    }
  });
};

// function for game Logic
let boxItems = document.getElementsByClassName("boxItems");
Array.from(boxItems).forEach((element) => {
  let boxList = element.querySelector(".boxList");
  element.addEventListener("click", () => {
    click_sound.play();
    if (boxList.innerText === "") {
      boxList.innerText = turn;
      turn = gameTurn();
      gameWin();
      if (!gameover) {
        document.getElementsByClassName("title")[0].innerText =
          "Turn for " + turn;
      }
    }
  });
});

// for reset
let reset = document.getElementById("btn");
reset.addEventListener("click", () => {
  let boxList = document.querySelectorAll(".boxList");
  Array.from(boxList).forEach((e) => {
    e.innerText = "";
    let img = (document
      .querySelector(".img")
      .getElementsByTagName("img")[0].style.width = "0px");
    document.getElementsByClassName("title")[0].innerText = "Turn for " + turn;
    turn = gameTurn();
  });
});
