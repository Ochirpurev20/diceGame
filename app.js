//shoo hayah eelj zaah
var activePlayer = 0;
// 2 toglogchiin onoog hadgalah
var onoo = [0, 0];
// eeljiin onoo hadgalah
var eeljOnoo = 0;
//game status
var gameStatus;
//dice hadgalah
var diceDom = document.querySelector(".dice");
//shineer ehluuleh func
startGame();
function startGame() {
  gameStatus = true;
  activePlayer = 0;
  onoo = [0, 0];
  eeljOnoo = 0;
  document.getElementById("name-0").textContent = "тоглогч1";
  document.getElementById("name-1").textContent = "тоглогч2";

  document.getElementById("score-0").textContent = 0;
  document.getElementById("score-1").textContent = 0;

  document.getElementById("current-0").textContent = 0;
  document.getElementById("current-1").textContent = 0;
  //shoog  haragdahgui bolgoh, ehleh ued

  diceDom.style.display = "none";
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-0-panel").classList.remove("winner");

  document.querySelector(".player-1-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("winner");

  document.querySelector(".player-0-panel").classList.add("active");
}

//shoog shideh event listener
document.querySelector(".btn-roll").addEventListener("click", function () {
  if (gameStatus) {
    var dice = Math.floor(Math.random() * 6) + 1;
    //   alert("shoo: " + dice);
    //shoonii zurgiig haragddag bolgoh
    diceDom.style.display = "block";
    //dice n toonii daguu zurgiig haruulah
    diceDom.src = "dice-" + dice + ".png";
    //toglogchiin eeljin onoog uurchilnu. 1s yalgaatai bol onoog nemne, 1 bol onoo 0 bolno
    if (dice !== 1) {
      eeljOnoo = eeljOnoo + dice;
      document.getElementById("current-" + activePlayer).textContent = eeljOnoo;
    } else {
      eeljSolih();
    }
  } else {
    alert("game over. start new game");
  }
});

//hold tovchnii event listener
document.querySelector(".btn-hold").addEventListener("click", function () {
  if (gameStatus) {
    // tsugluulsan eeljiin onoog global deer ni nemhe
    onoo[activePlayer] += eeljOnoo;
    document.getElementById("score-" + activePlayer).textContent =
      onoo[activePlayer];
    // 100 hurch hojson esehiig shalgah
    if (onoo[activePlayer] >= 20) {
      gameStatus = false;
      document.getElementById("name-" + activePlayer).textContent = "Winner";
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.remove("active");
    } else {
      eeljSolih();
    }
  } else {
    alert("game over. start new game");
  }
});
//togloh eeljiig solih function
function eeljSolih() {
  eeljOnoo = 0;
  document.getElementById("current-" + activePlayer).textContent = eeljOnoo;
  //toglogchiin eeljiin solino
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
  diceDom.style.display = "none";
}

//new game tovch
document.querySelector(".btn-new").addEventListener("click", startGame);
