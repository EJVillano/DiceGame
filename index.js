var randomNumber1 = Math.floor(Math.random()*6)+ 1;
var randomNumber2 = Math.floor(Math.random()*6)+ 1;


document.querySelector(".img1").setAttribute("src", "./images/dice"+randomNumber1+".png");
document.querySelector(".img2").setAttribute("src", "./images/dice"+randomNumber2+".png");

if(randomNumber1 > randomNumber2){
    document.getElementById("result").textContent ="(^▽^)👍 Winner is player 1 ";
}else if (randomNumber1 < randomNumber2){
    document.getElementById("result").textContent ="Winner is player 2 👍(^▽^)"; 
}else{
    document.getElementById("result").textContent ="Refresh me"
}