// Generate Random Number from 1 to 6
var randomNum1 = Math.floor(Math.random()*6) + 1;
var randomNum2 = Math.floor(Math.random()*6) + 1;

// Create new string for new image source using the random number
var dice1Image = "images/dice" + randomNum1 + ".png";
var dice2Image = "images/dice" + randomNum2 + ".png";

// Change image source 
document.querySelectorAll("img")[0].setAttribute("src", dice1Image);
document.querySelectorAll("img")[1].setAttribute("src", dice2Image);

// Winner declaration
var player1Wins = "🚩 Player 1 Wins!";
var player2Wins = "Player 2 Wins! 🚩";
if (randomNum1 > randomNum2){
    document.querySelector("h1").innerHTML = player1Wins;
}
else if (randomNum1 < randomNum2){
    document.querySelector("h1").innerHTML = player2Wins;
}
else {
    document.querySelector("h1").innerHTML = "Draw!";
}

