let counterTag = document.getElementById("counter");
let counterValue = parseInt(counterTag.innerText);
const minusBtn = document.getElementById('minus');
const plusBtn = document.getElementById('plus');
const likeBtn = document.getElementById('heart');
const pauseBtn = document.getElementById('pause');

function counter() {
    counterValue++;
    counterTag.innerText = counterValue;
}
/* setInterval */
let interval = setInterval(counter, 1000);
/* DisAble buttons */
pauseBtn.addEventListener('click', function (e) {
    if (pauseBtn.innerText === 'pause') {
        pauseBtn.innerText = 'resume';
        clearInterval(interval);
        minusBtn.disabled = true;
        minusBtn.style.opacity = 0.50;
        minusBtn.style.cursor = 'not-allowed';
        plusBtn.disabled = true;
        plusBtn.style.opacity = 0.50;
        plusBtn.style.cursor = 'not-allowed';
        likeBtn.disabled = true;
        likeBtn.style.opacity = 0.50;
        likeBtn.style.cursor = 'not-allowed';

    } else {
        pauseBtn.innerText = 'pause';
        interval = setInterval(counter, 1000);
        minusBtn.disabled = false;
        minusBtn.style.opacity = 1;
        minusBtn.style.cursor = 'default';
        plusBtn.disabled = false;
        plusBtn.style.opacity = 1;
        plusBtn.style.cursor = 'default';
        likeBtn.disabled = false;
        likeBtn.style.opacity = 1;
        likeBtn.style.cursor = 'default';
    }

});

/* minus button */
minusBtn.addEventListener('click', function (e) {
    counterValue = counterValue - 1;
    counterTag.innerText = counterValue;
});
/* plus button */
plusBtn.addEventListener('click', function (e) {
    counterValue = counterValue + 1;
    counterTag.innerText = counterValue;
});
/* like button */
likeBtn.addEventListener('click', likelike);
let ul = document.getElementsByClassName('likes')[0];
let acc, liTag, currentCounterValue;
function likelike() {
    if (counterValue === currentCounterValue) {
        acc += 1;
        liTag.innerText = `${counterValue} is liked ${acc} times`;
    } else {
        acc = 1;
        liTag = document.createElement('li');
        liTag.innerText = `${counterValue} is liked ${acc} times`;
        ul.appendChild(liTag);
        currentCounterValue = counterValue;
    }
};
/* Add Comments */
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


