let counter = document.getElementById("counter");
let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let heart = document.getElementById("heart");
let pause = document.getElementById("pause");
let likes = document.getElementsByClassName("likes")[0];

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