
let resumeBtn=document.getElementById('resume');
resumeBtn.disabled=true;
var count=0;
var timer;

//timer 
function startTimer(){
timer=setInterval(function(){
document.getElementById("counter").innerHTML = count++;
}, 1000);}

startTimer();

//minus

let mBtn=document.getElementById("minus");
mBtn.addEventListener("click", function(){
 document.getElementById("counter").innerHTML = count--;
});

//pluse

let pBtn=document.getElementById("plus");
pBtn.addEventListener("click", function(){
document.getElementById("counter").innerHTML =  count++;
});

//likes 

let ulElm=document.querySelector(".likes");
let lBtn=document.getElementById("heart");
lBtn.addEventListener("click", function(){
  let liElm=document.createElement('li');
  liElm.innerHTML= "You have " + count +" likes";
ulElm.appendChild(liElm); 
});

//submit commet
let divElem=document.getElementById('list');
let sBtn=document.getElementById('submit');
sBtn.addEventListener('click',  function(){
 let pElm=document.createElement('p');
 pElm.innerHTML=document.getElementById('comment-input').value;
 divElem.appendChild(pElm);
});


//pause 

let pausBtn=document.getElementById('pause');
pausBtn.addEventListener('click',  function(){
 pBtn.disabled=true;
 mBtn.disabled=true;
 pausBtn.disabled=true;
 resumeBtn.disabled=false;
 clearInterval(timer);
});


//resume

resumeBtn.addEventListener('click',  function(){
 pBtn.disabled=false;
 mBtn.disabled=false;
 pausBtn.disabled=false;
 resumeBtn.disabled=true;
 startTimer();
});





