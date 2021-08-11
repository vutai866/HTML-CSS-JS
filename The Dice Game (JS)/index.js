var randomNumber1 = Math.floor(Math.random() * 6) + 1; // Select 1-6 randomly  

var randomDice1 = "images/dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomDice1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1; //Select 1-6 randomly 

var randomDice2 = "images/dice" + randomNumber2 + ".png"; //dice1.png - dice6.png

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomDice2);

//Select a Winner 

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "\u2B50 Play 1 Wins!";
} else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = ("Player 2 WIN \u2B50");
} else {
    document.querySelector("h1").innerHTML = ("DRAW");
}