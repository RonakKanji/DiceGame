var randomNumber1 = Math.random();
randomNumber1 = Math.floor(randomNumber1*6+1);
var number = "images/dice" + randomNumber1 + ".png";
document.querySelector(".img1").setAttribute("src", number);
var randomNumber2 = Math.random();
randomNumber2 = Math.floor(randomNumber2*6+1);
number = "images/dice" + randomNumber2 + ".png";
document.querySelector(".img2").setAttribute("src", number);

if(randomNumber1>randomNumber2)
{
  document.querySelector("h1").innerHTML = "Player 1 wins!";
}
else if(randomNumber1<randomNumber2)
{
  document.querySelector("h1").innerHTML = "Player 2 wins";
}
else
{
  document.querySelector("h1").innerHTML = "Draw";
}
