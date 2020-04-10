let commentForm = document.querySelector('#comment-form');
let pauseBtn = document.querySelector("#pause");
let minusBtn = document.querySelector('#minus');
let plusBtn = document.querySelector('#plus');
let time = document.querySelector('#counter');
let heart = document.querySelector('#heart');


function inputComment (){
x=document.querySelector('#comment-input').value;
nComment = document.createElement('p');
nComment.innerText = x;
document.querySelector('#list').appendChild(nComment);
document.querySelector('#comment-input').value="";
}



function timer (){
   let b = parseInt(time.innerHTML) + 1;
   time.innerHTML = b;
}

let x = setInterval(timer, 1000);

pauseBtn.addEventListener('click', function(e){
if (x===0){
    x = setInterval(timer,1000);
    pauseBtn.innerHTML="pause";
}else {
    pauseBtn.innerHTML="resume"
    clearInterval(x);
    x=0;
}
e.preventDefault();
});

minusBtn.addEventListener('click', function(e){
    let b = parseInt(time.innerHTML) - 1;
    time.innerHTML = b;
e.preventDefault();
});

plusBtn.addEventListener('click', function(e){
    let b = parseInt(time.innerHTML) + 1;
    time.innerHTML = b;
    e.preventDefault();
    });

commentForm.addEventListener('submit', function(e){
inputComment();
e.preventDefault();

});

heart.addEventListener('click', function(){
let likey = document.querySelector('.likes')
let b =parseInt(time.innerText);
if (document.querySelector('[likenum="'+b+'"]')){
  let li =document.querySelector('[likenum="'+b+'"]');
  let no=parseInt(li.children[0].innerText);
  li.innerHTML=`${b} has been liked <span> ${no+1}</span> time`;
}else {
let li = document.createElement('li')
li.setAttribute("likenum",b);
console.log(li);
li.innerHTML=`${b} has been liked <span>1</span> time`;
likey.appendChild(li);}
});
