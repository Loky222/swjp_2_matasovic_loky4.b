

function randomnumber() {
  return Math.floor(Math.random() * 6) + 1;
}





let randomNumber1 = randomnumber();
//console.log(randomNumber1);

let randomDiceImage = "./images/dice" + randomNumber1 + ".png";
document.querySelector(".img1").setAttribute("src", randomDiceImage);

let randomNumber2 = randomnumber();

let randomDiceImage2 = "./images/dice" + randomNumber2 + ".png";
document.querySelector(".img2").setAttribute("src", randomDiceImage2);

let randomNumber3 = randomnumber();
let randomDiceImage3 = "./images/dice" + randomNumber3 + ".png";
document.querySelector(".img3").setAttribute("src", randomDiceImage3);

let randomNumber4 = randomnumber();
let randomDiceImage4 = "./images/dice" + randomNumber4 + ".png";
document.querySelector(".img4").setAttribute("src", randomDiceImage4);

let total1 = randomNumber1 + randomNumber3;
let total2 = randomNumber2 + randomNumber4;

if (total1 > total2) {
  document.querySelector("h1").innerHTML = " Player 1 Wins! 🚩";
}
if (total2 > total1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
} 
if (total1 === total2) {
  document.querySelector("h1").innerHTML = "It's a Draw!";
}

document.querySelector("h2.p1").innerHTML= total1;
document.querySelector("h2.p2").innerHTML= total2;

