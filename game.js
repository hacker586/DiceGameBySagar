var player1 = Math.random();
var player2 = Math.random();
var p1 = Math.floor(player1*6+1);
var p2 = Math.floor(player2*6+1);
if(p1 == p2)
{
  while(p1==p2)
  {
    var player2 = Math.random();
    var p2 = Math.floor(player2*6+1);
  }
}
else if (p1>p2)
{
  document.querySelector("h1").textContent="Player 1 is winner";
}
else
{
  document.querySelector("h1").textContent="Player 2 is winner";
}


if (p1 == 1)
{
  document.getElementById("p1").src="dice1.png";
}
else if (p1 == 2)
{
  document.getElementById("p1").src="dice2.png";
}
else if (p1 == 3)
{
  document.getElementById("p1").src="dice3.png";
}
else if (p1 == 4)
{
  document.getElementById("p1").src="dice4.png";
}
else if (p1 == 5)
{
  document.getElementById("p1").src="dice5.png";
}
else if (p1 == 6)
{
  document.getElementById("p1").src="dice6.png";
}
else {
  document.querySelector("h1").textContent="kya yaar";
}


if (p2 == 1)
{
  document.getElementById("p2").src="dice1.png";
}
else if (p2 == 2)
{
  document.getElementById("p2").src="dice2.png";
}
else if (p2 == 3)
{
  document.getElementById("p2").src="dice3.png";
}
else if (p2 == 4)
{
  document.getElementById("p2").src="dice4.png";
}
else if (p2 == 5)
{
  document.getElementById("p2").src="dice5.png";
}
else if (p2 == 6)
{
  document.getElementById("p2").src="dice6.png";
}
else{
  document.querySelector("h1").textContent="kya yaar";
}

console.log(p1)
console.log(p2)
