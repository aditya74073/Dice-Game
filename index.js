var randomNumber1=Math.random()
randomNumber1=randomNumber1*6;
randomNumber1=Math.floor(randomNumber1);

var randomImages=["dice1.png","dice2.png","dice3.png","dice4.png","dice5.png","dice6.png"];

document.querySelector("img.img1").setAttribute("src",randomImages[randomNumber1]);


var randomNumber2=Math.random()
randomNumber2=randomNumber2*6;
randomNumber2=Math.floor(randomNumber2);

var randomImages=["dice1.png","dice2.png","dice3.png","dice4.png","dice5.png","dice6.png"];

document.querySelector("img.img2").setAttribute("src",randomImages[randomNumber2]);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerText=" 🚩 Player 1 Wins ";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerText="  Player 2 Wins 🚩";
}
else{
    document.querySelector("h1").innerText="Its A Tie, Try Once More";
}
