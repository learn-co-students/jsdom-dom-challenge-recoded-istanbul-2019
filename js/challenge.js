
// Increse counter number every second

const counter = document.getElementById("counter");
let num = 0;
function increment() {

    increase = setInterval(function () {
        ++num;
        counter.textContent = num;
    }, 1000);
}

increment();

// Increment button to increase counter number

const plus = document.getElementById("plus");
plus.addEventListener("click", () => {
    counter.textContent = ++num;
});


// Decrement button to decrease counter number

const minus = document.getElementById("minus");
minus.addEventListener("click", () => {
    counter.textContent = --num;
});

// Like button to add like number

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

// Pause button to pause counter and disable all buttons

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


// Comment box add comments on submitted

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




