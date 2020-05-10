//shoo hayah eelj zaah
var activePlayer = 1;
// 2 toglogchiin onoog hadgalah
var onoo = [0, 0];
// eeljiin onoo hadgalah
var eeljOnoo;
//dice hadgalah
var dice = Math.floor(Math.random() * 6) + 1;
console.log(dice);
//
document.querySelector("#name-0").textContent = "тоглогч1";
document.querySelector("#name-1").textContent = "тоглогч2";

document.querySelector("#score-0").textContent = 0;
document.querySelector("#score-1").textContent = 0;

document.querySelector("#current-0").textContent = 0;
document.querySelector("#current-1").textContent = 0;

document.querySelector(".dice").style.display = "none";
