let counter = document.getElementById("counter");
let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let heart = document.getElementById("heart");
let pause = document.getElementById("pause");
let likes = document.getElementsByClassName("likes")[0];
let comments = document.getElementsByClassName("comments")[0];
let commentInput = document.getElementById("comment-input");
let commentSubmit = document.getElementById("submit");

function incrementCounter() {
    counter.innerText = parseInt(counter.innerText, 10) + 1;
};

var intervalID = setInterval(incrementCounter, 1000);


plus.addEventListener("click", function(e) {
    incrementCounter();
});
minus.addEventListener("click", function(e) {
    counter.innerText = parseInt(counter.innerText, 10) - 1;
});
heart.addEventListener("click", function(e) {
    let counterValue = counter.innerText;
    let counterValueElement = document.getElementById(counterValue);
    if (counterValueElement === null) {
        let likeTimes = document.createElement("li");
        likeTimes.innerHTML = `${counterValue} has been liked <span>1</span> time`;
        likeTimes.id = counterValue;
        likes.appendChild(likeTimes);
    } else {
        let spanElement = counterValueElement.getElementsByTagName("span")[0];
        let spanValue = parseInt(spanElement.innerText, 10);
        spanElement.innerText = spanValue + 1;
        if (spanValue === 1) {
            counterValueElement.innerHTML += "s";
        }
    }  
});

pause.addEventListener("click", function(e) {
    let pauseText = pause.innerText;
    if (pauseText === "pause") {
        clearInterval(intervalID);
        pause.innerText = "resume";
        plus.disabled = true; minus.disabled = true; heart.disabled = true; commentSubmit.disabled = true;
    } else if (pauseText === "resume") {
        pause.innerText = "pause";
        plus.disabled = false; minus.disabled = false; heart.disabled = false; commentSubmit.disabled = false;
        intervalID = setInterval(incrementCounter, 1000);
    }
});

commentSubmit.addEventListener("click", function(e) {
    e.preventDefault();
    let commentValue = commentInput.value;
    commentInput.value = "";
    if (commentValue !== "") {
        let newComment = document.createElement("p");
        newComment.innerText = commentValue;
        comments.appendChild(newComment);
    }
});