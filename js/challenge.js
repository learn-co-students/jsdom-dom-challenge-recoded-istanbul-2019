let timer= document.getElementById("counter");
let timerTxt= timer.innerText;
let timerValue= parseInt(timerTxt,10);
//start counter when page load
document.addEventListener("DOMContentLoaded",counterOn);
let i= 1;
let isPaused= false;
function counterOn(){
    setInterval(increase,1000);
}
function increase() {
    if(!isPaused) {
        if(i<1000) {
            timer.innerText= timerValue+i;
          i++;
        }
    }
    
}
//enable increment and decrement by buttons
let plusBtn= document.getElementById("plus");
let minusBtn= document.getElementById("minus");
plusBtn.addEventListener("click",function(){
    increase();
} );
minusBtn.addEventListener("click",function(){
   i= i-2;
} );

//add likes
let likeBtn= document.getElementById("heart");
let currentSec;
let likeCount=0;
let likes;
let likesList= document.getElementsByClassName("likes")[0];
likeBtn.addEventListener("click",function(){
    currentSec =timerValue+i-1;
    let likeItem = document.querySelector(`.likes li[data-num= "${currentSec}"]`)
   if(likeItem===null){
        likes=1;
        let li= document.createElement('li');
        li.setAttribute("data-num", `${currentSec}`);
        li.innerHTML= `${currentSec} has been liked 1 time`;
        likesList.appendChild(li);
    }
    else{
        likes++;
        likeItem.innerHTML= `${currentSec} has been liked ${likes} times`;
    }
    
} );

// PAUSE
let pauseBtn= document.getElementById("pause");
pauseBtn.addEventListener("click",pauseOrResume);
function pauseOrResume(){
    if(isPaused===true){
        isPaused=false;
        plusBtn.disabled = false;
        minusBtn.disabled = false;
        likeBtn.disabled = false; 
        pauseBtn.textContent="pause";
    }
    else{
        isPaused=true;
        plusBtn.disabled = true;
        minusBtn.disabled = true;
        likeBtn.disabled = true;
        pauseBtn.textContent="resume";
        
    }
}


//Add Comments
let submitBtn= document.getElementById("submit");
let comment= document.getElementById("comment-input");
let commentsList= document.getElementById("list");
submitBtn.addEventListener("click",function(){
    event.preventDefault();
    let para= document.createElement("p");
    para.textContent = comment.value;
    commentsList.appendChild(para);
    comment.value="";
    comment.focus();
} );


  