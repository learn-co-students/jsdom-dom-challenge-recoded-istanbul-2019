let count = 0;
let myInterval = 0;

function timer(){
    document.getElementById("pause").addEventListener("click",function(e){
    if(myInterval==-1){
        myInterval = setInterval(function(){
        count++;
        document.getElementById("counter").innerHTML = count;
        }, 1000);
        document.getElementById("pause").innerText = "pause";

        document.getElementById("plus").disabled = false;
        document.getElementById("minus").disabled = false;
        document.getElementById("heart").disabled = false;
        document.getElementById("submit").disabled = false;
    } else {
        clearInterval(myInterval);
        myInterval = -1;
        document.getElementById("pause").innerText = "resume";

        document.getElementById("plus").disabled = true;
        document.getElementById("minus").disabled = true;
        document.getElementById("heart").disabled = true;
        document.getElementById("submit").disabled = true;
    }
    })
}

function increment(){
    document.getElementById("plus").addEventListener("click", function(e){
        count++;
        document.getElementById("counter").innerHTML = count;s
    })
}

function decrement(){
    document.getElementById("minus").addEventListener("click", function(e){
        count--;
        document.getElementById("counter").innerHTML = count;s
    })
}

function like(){
    document.getElementById("heart").addEventListener("click", function(e){
        let ul = document.querySelector("ul.likes");
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(count));
        ul.appendChild(li);
    })
}

function addComment(){
    document.getElementById("submit").addEventListener("click", function(e){
        e.preventDefault();
        let div = document.getElementById("list");
        let p = document.createElement("p");
        p.appendChild(document.createTextNode(document.getElementById("comment-input").value));
        div.appendChild(p);
    })
}

document.addEventListener("DOMContentLoaded", function(){
    myInterval = setInterval(function(){
        count++;
        document.getElementById("counter").innerHTML = count;
        }, 1000);
    timer();
    increment();
    decrement();
    like();
    addComment();
})