let counter=document.getElementById("counter");
let plus=document.getElementById('plus');
let minus=document.getElementById("minus");
let count=0;

//Counter
function theCounter(){
add = setInterval(function(){
    ++count;
    counter.textContent=count;
},1000);
}
theCounter();

//Plus 
plus.addEventListener("click",function(){
    counter.textContent=count+1;
});

//Minus
minus.addEventListener("click",function(){
    counter.textContent=count-1;
});