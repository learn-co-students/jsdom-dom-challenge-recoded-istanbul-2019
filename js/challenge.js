document.addEventListener("DOMContentLoaded", function() {
    let count = document.getElementById("counter");
    let counter = document.getElementById("counter").textContent
    let countNum = parseInt(counter);
    let minus = document.getElementById("minus");
    let plus = document.getElementById("plus");
    let heart = document.getElementById("heart");
    let ul = document.getElementsByClassName("likes")[0];
    let pause = document.getElementById("pause")
    let i = 1;
    let submit = document.getElementById("submit");
    let commentInput = document.getElementById("comment-input")
    let listDiv = document.getElementById("list")
    let ul2 = document.createElement("ul")

    let say = 0
    let li = document.createElement("li")
    let span = document.createElement("span")

    function time() {
        timer = setInterval(() => {
            countNum = countNum + 1
            let num = countNum.toString();
            count.textContent = num;
            say = 0
            li = document.createElement("li")
            span = document.createElement("span")
        }, 1000);
    }

    time()

    minus.addEventListener("click", function() {
        countNum = countNum - 1;
        let num = countNum.toString();
        count.textContent = num;
    })

    plus.addEventListener("click", function() {
        countNum = countNum + 1;
        let num = countNum.toString();
        count.textContent = num;
    })

    heart.addEventListener("click", function() {
        say = say + 1;
        span.textContent = count.textContent + " has been liked " + say + " times"
        li.appendChild(span);
        ul.appendChild(li);

    })

    pause.addEventListener("click", function() {

        if (i == 1) {
            clearInterval(timer)
            pause.textContent = "resume"
            minus.disabled = true;
            plus.disabled = true;
            heart.disabled = true;
            submit.disabled = true;
            commentInput.disabled = true
            i = 0;


        } else {
            time()
            pause.textContent = "pause"
            minus.disabled = false;
            plus.disabled = false;
            heart.disabled = false;
            commentInput.disabled = false
            submit.disabled = false;
            i = 1;
        }
    })

    submit.addEventListener("click", function() {
        event.preventDefault();
        let p = document.createElement("p")
        let com = commentInput.value;
        p.textContent = com
        listDiv.appendChild(p)
        commentInput.value = " "

    })
})