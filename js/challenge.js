const counterContainer = document.querySelector("#counter");
let counterValue = parseInt(counterContainer.innerHTML, 10);
const listOfNumber = [counterValue];
const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const heart = document.querySelector("#heart");
const pause = document.querySelector("#pause");
let commentForm = document.querySelector("#comment-form");

//--------FUNCTIONS--------//
let counter = () => {
  let increasedNumber = parseInt(counterContainer.innerHTML, 10) + 1;
  counterContainer.innerHTML = increasedNumber;
};

let startCounter = setInterval(counter, 1000);

plus.addEventListener(
  "click",
  (increment = () => {
    counterValue++;
    counterContainer.innerHTML = counterValue;
  })
);

minus.addEventListener(
  "click",
  (decrement = () => {
    counterValue--;
    counterContainer.innerHTML = counterValue;
  })
);

pause.addEventListener("click", (e) => {
  if (counter === 0) {
    startCounter = setInterval(counter, 1000);
    pause.innerHTML = "pause";
  } else {
    pause.innerHTML = "resume";
    clearInterval(startCounter);
    counter = 0;
  }
  e.preventDefault();
});

heart.addEventListener("click", () => {
  let like = document.querySelector(".likes");
  let num = parseInt(counterContainer.innerText);
  if (document.querySelector('[likenum="' + num + '"]')) {
    let li = document.querySelector('[likenum="' + num + '"]');
    let no = parseInt(li.children[0].innerText);
    li.innerHTML = `${num} has been liked <span> ${no + 1}</span> time`;
  } else {
    let li = document.createElement("li");
    li.setAttribute("likenum", num);
    li.innerHTML = `${num} has been liked <span>1</span> time`;
    like.appendChild(li);
  }
});
