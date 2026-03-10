function moveButton(){

var button = document.getElementById("no");

var x = Math.random() * (window.innerWidth - 100);
var y = Math.random() * (window.innerHeight - 50);

button.style.position="absolute";
button.style.left=x+"px";
button.style.top=y+"px";

}

function createStars(){

for(let i=0;i<20;i++){

let star=document.createElement("div")
star.innerHTML="⭐"
star.className="star"

star.style.left=Math.random()*100+"vw"
star.style.animationDuration=(Math.random()*5+5)+"s"

document.body.appendChild(star)

}

}

function yesClicked(){

alert("Mission Success ❤️")

for(let i=0;i<30;i++){

let heart=document.createElement("div")
heart.innerHTML="❤️"
heart.className="heart"

heart.style.left=Math.random()*100+"vw"
heart.style.animationDuration=(Math.random()*3+2)+"s"

document.body.appendChild(heart)

}

}

createStars()

