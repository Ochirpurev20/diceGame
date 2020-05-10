//shoo hayah eelj zaah
var activePlayer = 1;
// 2 toglogchiin onoog hadgalah
var onoo = [0, 0];
// eeljiin onoo hadgalah
var eeljOnoo;
//dice hadgalah

//
document.getElementById("name-0").textContent = "тоглогч1";
document.getElementById("name-1").textContent = "тоглогч2";

document.getElementById("score-0").textContent = 0;
document.getElementById("score-1").textContent = 0;

document.getElementById("current-0").textContent = 0;
document.getElementById("current-1").textContent = 0;

var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";

document.querySelector(".btn-roll").addEventListener("click", function () {
  var dice = Math.floor(Math.random() * 6) + 1;
  //   alert("shoo: " + dice);
  diceDom.style.display = "block";
  diceDom.src = "dice-" + dice + ".png";
});
