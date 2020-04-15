
let pauseBtn = document.querySelector("#pause");
let minusBtn = document.querySelector('#minus');
let plusBtn = document.querySelector('#plus');
let time = document.querySelector('#counter');
let heart = document.querySelector('#heart');


function inputComment (){
	let commentForm = document.querySelector('#comment-form');
	inputVal=document.querySelector('#comment-input').value;
	comment = document.createElement('p');
	comment.innerText = inputVal;
	document.querySelector('#list').appendChild(comment);
	document.querySelector('#comment-input').value="";
}



function timer (){
	   let t = parseInt(time.innerHTML) + 1;
	   time.innerHTML = t;
}

let seconds = setInterval(timer, 1000);

pauseBtn.addEventListener('click', function(e){
	if (seconds===0){
	    seconds = setInterval(timer,1000);
	    pauseBtn.innerHTML="pause";
	}else {
	    pauseBtn.innerHTML="resume"
	    clearInterval(seconds);
	    seconds=0;
	}
	e.preventDefault();
	});

minusBtn.addEventListener('click', function(e){
	    let val = parseInt(time.innerHTML) - 1;
	    time.innerHTML = val;
	    e.preventDefault();
});

plusBtn.addEventListener('click', function(e){
	    let val = parseInt(time.innerHTML) + 1;
	    time.innerHTML = val;
	    e.preventDefault();
    });

commentForm.addEventListener('submit', function(e){
	    inputComment();
	    e.preventDefault();

});

heart.addEventListener('click', function(){
let heartSec = document.querySelector('.likes')
let t =parseInt(time.innerText);
if (document.querySelector('[likenum="'+t+'"]')){
  let li =document.querySelector('[likenum="'+t+'"]');
  let no=parseInt(li.children[0].innerText);
  li.innerHTML=`${t} has been liked <span> ${no+1}</span> time`;
}else {
let li = document.createElement('li')
li.setAttribute("likenum",t);
console.log(li);
li.innerHTML=`${t} has been liked <span>1</span> time`;
heartSec.appendChild(li);}
});
