//shoo hayah eelj zaah
var activePlayer = 0;
// 2 toglogchiin onoog hadgalah
var onoo = [0, 0];
// eeljiin onoo hadgalah
var eeljOnoo = 0;
//dice hadgalah

//
document.getElementById("name-0").textContent = "тоглогч1";
document.getElementById("name-1").textContent = "тоглогч2";

document.getElementById("score-0").textContent = 0;
document.getElementById("score-1").textContent = 0;

document.getElementById("current-0").textContent = 0;
document.getElementById("current-1").textContent = 0;
//shoog  haragdahgui bolgoh, ehleh ued
var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";
//shoog shideh event listener
document.querySelector(".btn-roll").addEventListener("click", function () {
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
    document.getElementById("current-" + activePlayer).textContent = 0;
    eeljOnoo = 0;
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
    //ulaan tsegiig shuljuuleh
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
    diceDom.style.display = "none";
  }
});
