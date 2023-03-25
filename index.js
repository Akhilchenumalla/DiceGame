var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceImage = "C:\Users\akhil\AppData\Local\Temp\Temp1_Dicee Challenge - Completed.zip\Dicee Challenge - Completed\images\dice" + randomNumber1 + ".png";



var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomDiceImage);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "C:\Users\akhil\AppData\Local\Temp\Temp1_Dicee Challenge - Completed.zip\Dicee Challenge - Completed\images\dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


//If player 1 wins
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Play One Wins!";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player Two Wins! 🚩";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}
