// counter + add and minus second
let currentSecond = 0;
let shouldPauseInterval = true;

function addSecond(){
    currentSecond = currentSecond + 1;
    document.getElementById('counter').innerHTML = currentSecond;
};

function minusSecond(){
    currentSecond = currentSecond - 1;
    document.getElementById('counter').innerHTML = currentSecond;
};

let interval = window.setInterval(addSecond, 1000);
document.getElementById("pause").addEventListener("click", pause);

function pause(){
    if (shouldPauseInterval) {
        clearInterval(interval);
        shouldPauseInterval = false;
    } else {
        addSecond();
        interval = window.setInterval(addSecond, 1000);
        shouldPauseInterval = true;
    }

}

const minusButton = document.getElementById('minus');
const plusButton = document.getElementById('plus');

plusButton.addEventListener("click", addSecond);
minusButton.addEventListener("click", minusSecond);

// add likes
const heartButton = document.getElementById('heart');
const ul = document.getElementById('likes');
let lastLikedSecond;
let likeNum;

function addLike(){
    if (currentSecond === lastLikedSecond) {
        likeNum = likeNum + 1;
        ul.lastChild.innerHTML = currentSecond + " has been liked "  + likeNum + " time";
    } else {
        likeNum = 1;
        let li = document.createElement("li");
        li.innerHTML = currentSecond + " has been liked "  + likeNum + " time";
        ul.appendChild(li);
    }
    lastLikedSecond = currentSecond;
}
heartButton.addEventListener("click", addLike);

// add comments
function addComment(event){
    event.preventDefault();
    let inputValue = document.getElementById("comment-input").value;
    if (!inputValue) {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputValue;
        document.getElementById("list").appendChild(li);
    }
    document.getElementById("comment-input").value = "";
}
document.getElementById("submit").addEventListener("click", addComment);
