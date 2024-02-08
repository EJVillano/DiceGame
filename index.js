var randomNumber1 = Math.floor(Math.random()*6)+ 1;
var randomNumber2 = Math.floor(Math.random()*6)+ 1;


document.querySelector(".img1").setAttribute("src", "./images/dice"+randomNumber1+".png");
document.querySelector(".img2").setAttribute("src", "./images/dice"+randomNumber2+".png");

if(randomNumber1 > randomNumber2){
    document.getElementById("result").textContent ="(^▽^)👍 Mag manila ka ";
}else if (randomNumber1 < randomNumber2){
    document.getElementById("result").textContent ="mag lucena ka 👍(^▽^)"; 
}else{
    document.getElementById("result").textContent ="Refresh me"
}