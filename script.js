const btn=document.getElementById("themeBtn");

btn.onclick=()=>{

document.body.classList.toggle("light");

if(document.body.classList.contains("light")){

btn.innerHTML="☀";

}

else{

btn.innerHTML="🌙";

}

}

const cards=document.querySelectorAll(".card");

window.addEventListener("scroll",()=>{

cards.forEach(card=>{

let position=card.getBoundingClientRect().top;

let screen=window.innerHeight;

if(position<screen-100){

card.style.opacity="1";

card.style.transform="translateY(0)";

}

});

});

cards.forEach(card=>{

card.style.opacity="0";

card.style.transform="translateY(50px)";

card.style.transition=".6s";

});
