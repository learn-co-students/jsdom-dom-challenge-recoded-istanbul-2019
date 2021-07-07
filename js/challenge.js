document.addEventListener("DOMContentLoaded", () => {
    const decrease = document.getElementById("minus");
    const increase = document.getElementById("plus");
    const counter = document.getElementById("counter");
    const submit = document.getElementById("submit");
    const list = document.getElementById("list");
    const heart = document.getElementById("heart");
    const stop = document.getElementById("pause");
    const likesMap = new Map(); // key => count 


    let sec = setInterval(function () {
        counter.innerText++;
    }, 1000)

    decrease.addEventListener("click", () => {
        counter.innerHTML = parseInt(document.getElementById("counter").innerHTML, 10) - 1;
    })
    increase.addEventListener("click", () => {
        counter.innerHTML = parseInt(document.getElementById("counter").innerHTML, 10) + 1;
    })
    submit.addEventListener("click", (e) => {
        e.preventDefault();
        let comment = document.querySelector('input#comment-input').value;
        list.innerHTML += `<li>${comment}</li>`;
    })
    heart.addEventListener("click", function (e) {
        const list = document.createElement("li");
        let likesCounter = likesMap.get(counter.innerHTML)
        console.log(likesMap.get(counter.innerHTML))
        /**
         * 1- user counter.Innerhtml as key for the map X
         * 2- retrive value from the map using the key X
         * 3- if the value is undefined set the value to 0
         * 4- increase the value by one
         * 5- print the value on screen 
         * 6- update the value in the map using innerHtml as key
         **/

        if (likesCounter === undefined) {
            likesCounter = 0;
        }
        likesCounter += 1;

        let liked = document.createTextNode(`${counter.innerHTML} has been liked ${likesCounter} times`);
        likesMap.set(counter.innerHTML, likesCounter)
        list.appendChild(liked);
        document.body.appendChild(list);


    });
    stop.addEventListener("click", (e) => {
        if (stop.innerText === "pause") {
            stop.innerText = "resume";
            clearInterval(sec);
            increase.style.display = "none";
            decrease.style.display = "none";
            heart.style.display = "none";
            submit.disabled = "false";
        }
        else {
            sec = setInterval(function () {
                counter.innerText++
            }, 1000)
            stop.innerText = "pause";
            increase.style.display = "inline-block";
            decrease.style.display = "inline-block";
            heart.style.display = "inline-block";
            submit.style.display = "inline-block";
            submit.disabled = true;
        }

    })

})

