const counter = document.getElementById("counter");
let num = 0;

function increment() {
    increase = setInterval(function () {
        ++num;
        counter.textContent = num;
    }, 1000);
}
increment();

const plus = document.getElementById("plus");
plus.addEventListener("click", () => {
    counter.textContent = ++num;
});

const minus = document.getElementById("minus");
minus.addEventListener("click", () => {
    counter.textContent = --num;
});

const heart = document.getElementById("heart");
const likes = document.getElementsByClassName("likes");
heart.addEventListener("click", () => {
    let i;
    for (i = 0; i < likes.length; i++) {
        let newLike = document.createElement("li")
        let likeNum = document.createTextNode(`Like number is ${num}.`);
        newLike.appendChild(likeNum);
        likes[i].appendChild(newLike);
    }
});

const pauseBtn = document.getElementById("pause");
active = true;
pauseBtn.addEventListener("click", () => {
    if (active == true) {
        clearInterval(increase)
        pause.textContent = "resume"
        minus.disabled = true;
        plus.disabled = true;
        heart.disabled = true;
        submit.disabled = true;
        commentInput.disabled = true
        active = false;
    } else {
        increment()
        pause.textContent = "pause"
        minus.disabled = false;
        plus.disabled = false;
        heart.disabled = false;
        commentInput.disabled = false
        submit.disabled = false;
        active = true;
    }
});

const commentList = document.getElementById("list");
const submitBtn = document.getElementById("submit");
const commentInput = document.getElementById("comment-input");

submitBtn.addEventListener("click", () => {
    event.preventDefault();
    let newCommentLine = document.createElement("p");
    let newCommentInput = commentInput.value;
    newCommentLine.textContent = newCommentInput;
    commentList.appendChild(newCommentLine);
    commentInput.value = " ";
});

