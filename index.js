//alert("hello");
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage = "dice" +randomNumber1 + ".png";
var randomImages = "images/"+ randomDiceImage;
var image1 = document.querySelectorAll("img")[0].setAttribute("src", randomImages);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage = "dice" +randomNumber2 + ".png";
var randomImages = "images/"+ randomDiceImage;
var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomImages);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 won";
}else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 won";
}else{
    document.querySelector("h1").innerHTML = "draw";
}


