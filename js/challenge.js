// Timer increment every second once the page has loaded

const counter = document.querySelector('#counter');

let seconds = 0;

function incrementSeconds() {
    seconds++;
    counter.innerText = seconds;
}

setInterval(incrementSeconds, 1000);



// Increment the counter using the plus button

const plus = document.querySelector("#plus");

function plusButton() {
    counter.innerText = seconds++;
}

plus.addEventListener("click", plusButton, false);


// Decrement the counter using the minus button

const minus = document.querySelector("#minus");

function minusButton() {
    counter.innerText = --seconds;
}

minus.addEventListener("click", minusButton, false);


// Like button to add liked seconds

const heart = document.querySelector("#heart");
const likes = document.querySelector(".likes");

function likeButton() {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode("You liked this second: " + seconds));
    likes.appendChild(li);
}

heart.addEventListener("click", likeButton, false);

// Pause button to pause counter and disable all buttons

const pause = document.querySelector("#pause");
let pauseStatus = 1;

function pauseButton() {
    if (pauseStatus == 1) {
        pause.textContent = "resume";
        minus.disabled = true;
        plus.disabled = true;
        heart.disabled = true;
        pauseStatus = 0;
    } else {
        pause.textContent = "pause";
        minus.disabled = false;
        plus.disabled = false;
        heart.disabled = false;
        pauseStatus = 1;
    }
}

pause.addEventListener("click", pauseButton,false);

// Comment section

