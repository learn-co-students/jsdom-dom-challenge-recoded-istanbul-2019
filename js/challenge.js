let counter  = document.getElementById('counter');
let plusBtn  = document.getElementById('plus');
let minBtn  = document.getElementById('minus');
let pauseBtn  = document.getElementById('pause');
let submitBtn  = document.getElementById('submit');
let likeBtn  = document.getElementById('heart');
let likeList  = document.querySelector('.likes');
let commentList  = document.getElementById('list');
let input  = document.querySelector('input');


//global variable
let num = 0;
let speed =1000;
let pauseFlag = true;

//******************functions**************

// timer function
function count(){
    counter.textContent= num++;
    setTimeout(count,  speed);
 }
  

// add and sub functions
function add(){
    counter.innerText = num++;
}

function sub(){
    counter.innerText = num--;
}

// add comment function

function addComment(e){
    e.preventDefault();
     let listItem2 = document.createElement("p");
     let inputText = input.value;
     listItem2.innerHTML = inputText;
     commentList.appendChild(listItem2);
     console.log(input);
   
}


// add like function

let likes = [];

function addLike(e){
     //<li data-num="9">9 has been liked <span>3</span> times</li>
     let likeItem = document.querySelector(`.likes li[data-num='${num}']`);
     if (likeItem === null) {
         likes[`${num}`] = 1;
         let item = document.createElement("LI");
         item.setAttribute('data-num', `${num}`);
         item.innerHTML = `${num} has been liked 1 time.`;
         likeList.append(item);
     } else {
         likes[`${num}`]++;
         likeItem.innerHTML = `${num} has been liked ${likes[num]} times.`
     }
    
   
}


// pause function
function pause(){
    
    if(pauseFlag){
        pauseBtn.innerText = 'pause';
        pauseFlag = false;
        num.disabled = false;
        likeBtn.disabled = false;
        plusBtn.disabled = false;
        minBtn.disabled = false;
        submitBtn.disabled = false;
        
    }else{
        pauseBtn.innerText = 'resume';
        pauseFlag = true;
        num.disabled = true;
        likeBtn.disabled = true;
        plusBtn.disabled = true;
        minBtn.disabled = true;
        submitBtn.disabled = true;
        
    }
    // disable all the btns
}

 

//***************************  events *****************************

likeBtn.addEventListener('click' , addLike);
submitBtn.addEventListener('click' , addComment);
plusBtn.addEventListener('click' , add);
minBtn.addEventListener('click' , sub);
 pauseBtn.addEventListener('click' , pause);

//*******************functions calls*********************

    count();
