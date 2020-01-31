// counter + add and minus second
let num = 0;
let shouldPauseInterval = true;

function addSecond(){
    num = num + 1;
    document.getElementById('counter').innerHTML = num;
};

function minusSecond(){
    num = num - 1;
    document.getElementById('counter').innerHTML = num;
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
const ul = document.getElementById('list');
let likeNum = 1;

function addLike(){
   likeNum = likeNum ++;
   let li = document.createElement("li");
   li.innerHTML = num + " has been liked "  + likeNum + " time";
   ul.appendChild(li);
}
document.getElementById('heart').addEventListener("click", addLike);

// add comments
function addComment(){
    let li = document.createElement("li");
    let inputValue = document.getElementById("comment-input").value;
    li.innerHTML = inputValue;
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("list").appendChild(li);
    }
    document.getElementById("comment-input").value = "";
}
document.getElementById("submit").addEventListener("click", function(event){
    event.preventDefault();
    addComment();
 });
