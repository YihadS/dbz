var character = document.getElementById('character');
var pausemenu = document.getElementById('pause-m');
var restart = document.getElementById('restart');
var block = document.getElementById('block');
var block2 = document.getElementById('block2');
var block3 = document.getElementById('block3');
var block4 = document.getElementById('block4');
var scorecount = document.getElementById('score_count');
var bgsound = document.getElementById('bg-song');
var lost = document.getElementById('lost');
var success = document.getElementById('success');
/* scoreboard */
var counter = parseInt(scorecount.innerHTML);
/**/
var gamebg = document.getElementById('game');
var title = document.getElementById('ptitle');

/*Abrir menú de Pausa*/
document.addEventListener("keyup", e=> {
  if (e.key === "Escape") {
     bgsound.pause();
block.style.animation ="none";
block2.style.animation ="none";
block3.style.animation ="none";
block4.style.animation ="none";
restart.style.display="inline-block";
title.innerHTML = "Juego Pausado";
pausemenu.style.display="block";

  }
});

function jump(){
	if(character.classList != "animate"){
character.classList.add("animate");
}

setTimeout(function(){
character.classList.remove("animate");

},500);
}

document.addEventListener('contextmenu', function(e) {
    e.preventDefault() 
    if(character.classList != "animate2"){
character.classList.add("animate2");
}
setTimeout(function(){
character.classList.remove("animate2");

},500);
});


var checksound = setInterval(function(){
    bgsound.play();
},0.1);

/*Revisa si hubo una colisión entre el jugador y la pelota*/
var checkDead = setInterval(function(){
/*var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
var blockTop = parseInt(window.getComputedStyle(block).getPropertyValue("top"));
var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));*/
let rect1 = block.getBoundingClientRect();
let rect2 = character.getBoundingClientRect();
if (rect1.x < rect2.x + rect2.width && rect1.x + rect1.width > rect2.x && rect1.y < rect2.y + rect2.height && rect1.y +rect1.height > rect2.y ){
bgsound.pause();
lost.play();
block.style.animation ="none";
block.style.display = "none";
block2.style.animation ="none";
block2.style.display = "none";
block3.style.animation ="none";
block3.style.display = "none";
block4.style.animation ="none";
block4.style.display = "none";
restart.style.display="none";
title.innerHTML = "Perdiste";
pausemenu.style.display="block";
}
},10);

var checkDead2 = setInterval(function(){
/*var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
var blockTop = parseInt(window.getComputedStyle(block).getPropertyValue("top"));
var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));*/
let rect1 = block2.getBoundingClientRect();
let rect2 = character.getBoundingClientRect();
if (rect1.x < rect2.x + rect2.width && rect1.x + rect1.width > rect2.x && rect1.y < rect2.y + rect2.height && rect1.y +rect1.height > rect2.y ){
bgsound.pause();
lost.play();
block.style.animation ="none";
block.style.display = "none";
block2.style.animation ="none";
block2.style.display = "none";
block3.style.animation ="none";
block3.style.display = "none";
block4.style.animation ="none";
block4.style.display = "none";
restart.style.display="none";
title.innerHTML = "Perdiste";
pausemenu.style.display="block";
}
},10);

var checkDead3 = setInterval(function(){
/*var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
var blockTop = parseInt(window.getComputedStyle(block).getPropertyValue("top"));
var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));*/
let rect1 = block3.getBoundingClientRect();
let rect2 = character.getBoundingClientRect();
if (rect1.x < rect2.x + rect2.width && rect1.x + rect1.width > rect2.x && rect1.y < rect2.y + rect2.height && rect1.y +rect1.height > rect2.y ){
bgsound.pause();
lost.play();
block.style.animation ="none";
block.style.display = "none";
block2.style.animation ="none";
block2.style.display = "none";
block3.style.animation ="none";
block3.style.display = "none";
block4.style.animation ="none";
block4.style.display = "none";
restart.style.display="none";
title.innerHTML = "Perdiste";
pausemenu.style.display="block";
}
},10);

var checkDead4 = setInterval(function(){
/*var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
var blockTop = parseInt(window.getComputedStyle(block).getPropertyValue("top"));
var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));*/
let rect1 = block4.getBoundingClientRect();
let rect2 = character.getBoundingClientRect();
if (rect1.x < rect2.x + rect2.width && rect1.x + rect1.width > rect2.x && rect1.y < rect2.y + rect2.height && rect1.y +rect1.height > rect2.y ){
bgsound.pause();
lost.play();
block.style.animation ="none";
block.style.display = "none";
block2.style.animation ="none";
block2.style.display = "none";
block3.style.animation ="none";
block3.style.display = "none";
block4.style.animation ="none";
block4.style.display = "none";
restart.style.display="none";
title.innerHTML = "Perdiste";
pausemenu.style.display="block";
}
},10);

/*Aumenta un punto*/
var checkPoint = setInterval(function(){
var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
if (blockLeft<40 && blockLeft > 0 ){
    counter++;
  scorecount.innerHTML = counter;
  success.play();
}
if (blockLeft < 0){
    var top=Math.random();
    top=top*330;   
    block.style.top = top + "px";
}
},100);


var checkPoint = setInterval(function(){
var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
var blockLeft = parseInt(window.getComputedStyle(block2).getPropertyValue("left"));
if (blockLeft<40 && blockLeft > 0 ){
    counter++;
  scorecount.innerHTML = counter;
  success.play();
}
if (blockLeft < 0){
    var top=Math.random();
    top=top*330;   
    block2.style.top = top + "px";
}
},100);

var checkPoint = setInterval(function(){
var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
var blockLeft = parseInt(window.getComputedStyle(block3).getPropertyValue("left"));
if (blockLeft<40 && blockLeft > 0 ){
    counter++;
  scorecount.innerHTML = counter;
  success.play();
}
if (blockLeft < 0){
    var top=Math.random();
    top=top*330;   
    block3.style.top = top + "px";
}
},100);

var checkPoint = setInterval(function(){
var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
var blockLeft = parseInt(window.getComputedStyle(block4).getPropertyValue("left"));
if (blockLeft<40 && blockLeft > 0 ){
    counter++;
  scorecount.innerHTML = counter;
  success.play();
}
if (blockLeft < 0){
    var top=Math.random();
    top=top*330;   
    block4.style.top = top + "px";
}
},100);

/*cambia el fondo y la velocidad de la pelota*/
var checkbg = setInterval(function(){
   if (counter < 10 ){
    gamebg.style.background="url(img/background1.jpg)";
    }

  if (counter > 10 ){
    gamebg.style.background="url(img/background2.jpg)";
       scenario1()
    }
     if (counter > 20){
         gamebg.style.background="url(img/background3.png)";
         scenario2()
    }
     if (counter > 30){
        gamebg.style.background="url(img/background4.png)";
       scenario3()
    }
     if (counter > 40){
       gamebg.style.background="url(img/background5.png)";
    scenario4();
    }
},1);

function scenario1(){
   block.style.display="none";
 block2.style.display="block"; 
}

function scenario2(){
   block.style.display="none";
        block2.style.display="block";
        block3.style.display="block";
}

function scenario3(){
  block.style.display="none";
        block2.style.display="none";
        block3.style.display="none";
        block4.style.display="block";
}

function scenario4(){
  block.style.display="none";
          block2.style.display="none";
        block3.style.display="block";
        block4.style.display="block"; 
}

function reanudar(){
pausemenu.style.display="none";
block.style.animation ="object 1.5s infinite linear";
block2.style.animation ="object 1.3s infinite linear";
block3.style.animation ="object 2s infinite linear";
block4.style.animation ="object 1s infinite linear";
    bgsound.resume(); 
}

function reiniciar(){
counter = 0;
pausemenu.style.display="none"; 
block.style.animation ="object 1.5s infinite linear";
block2.style.animation ="object 1.3s infinite linear";
block3.style.animation ="object 2s infinite linear";
block4.style.animation ="object 1s infinite linear";
if (counter < 10 ){
    block.style.display="block";
     block2.style.display="none";
     block3.style.display="none";
     block4.style.display="none";
    }

  if (counter > 10 ){
       scenario1()
    }
     if (counter > 20){
         scenario2()
    }
     if (counter > 30){
       scenario3()
    }
     if (counter > 40){
    scenario4();
    }
bgsound.resume();   
}